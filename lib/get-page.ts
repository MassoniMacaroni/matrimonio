import { Data } from "@puckeditor/core";
import fs from "fs";
import path from "path";

export const getPage = (pagePath: string): Data | null => {
  const dataFile = fs.existsSync(path.join(process.cwd(), "data/puck.json"))
    ? path.join(process.cwd(), "data/puck.json")
    : fs.existsSync(path.join(process.cwd(), "database.json"))
    ? path.join(process.cwd(), "database.json")
    : null;

  if (!dataFile) return null;

  try {
    const raw = fs.readFileSync(dataFile, "utf-8");
    const allData: Record<string, Data> = JSON.parse(raw);
    return allData[pagePath] || null;
  } catch {
    return null;
  }
};
