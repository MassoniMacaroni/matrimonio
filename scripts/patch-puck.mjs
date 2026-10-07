import fs from "fs";
import path from "path";

const files = [
  "node_modules/@puckeditor/core/dist/chunk-PI2N6YRG.mjs",
  "node_modules/@puckeditor/core/dist/index.js",
  "node_modules/@puckeditor/core/dist/no-external.js",
];

for (const relFile of files) {
  const fullPath = path.join(process.cwd(), relFile);
  if (!fs.existsSync(fullPath)) continue;

  let code = fs.readFileSync(fullPath, "utf8");
  if (code.includes("// __PATCHED_PUCK_POINTER__")) continue;

  let modified = false;

  // 1. Fix getPointerCollisions where position.target.ownerDocument is null (e.g. when target is Document)
  const oldCollision = "let elements = position.target.ownerDocument.elementsFromPoint(";
  const newCollision = "const _targetDoc = (position.target && (position.target.ownerDocument || (position.target.nodeType === 9 ? position.target : null))) || document;\n  let elements = _targetDoc.elementsFromPoint(";

  if (code.includes(oldCollision)) {
    code = code.replace(oldCollision, newCollision);
    modified = true;
  }

  // 2. Fix GlobalPosition global getter where document !== this.target.ownerDocument
  const oldGlobal = "if (document !== this.target.ownerDocument && this.frameRect) {";
  const newGlobal = "const _gDoc = this.target && (this.target.ownerDocument || (this.target.nodeType === 9 ? this.target : null));\n    if (document !== _gDoc && this.frameRect) {";
  if (code.includes(oldGlobal)) {
    code = code.replace(oldGlobal, newGlobal);
    modified = true;
  }

  // 3. Fix GlobalPosition frame getter where document === this.target.ownerDocument
  const oldFrame = "if (document === this.target.ownerDocument && this.frameRect) {";
  const newFrame = "const _fDoc = this.target && (this.target.ownerDocument || (this.target.nodeType === 9 ? this.target : null));\n    if (document === _fDoc && this.frameRect) {";
  if (code.includes(oldFrame)) {
    code = code.replace(oldFrame, newFrame);
    modified = true;
  }

  if (modified) {
    code = "// __PATCHED_PUCK_POINTER__\n" + code;
    fs.writeFileSync(fullPath, code, "utf8");
    console.log(`[patch-puck] Successfully patched ${relFile}`);
  }
}
