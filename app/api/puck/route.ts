import { revalidatePath } from "next/cache";
import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function POST(request: Request) {
  const payload = await request.json();
  const filePath = path.join(process.cwd(), "data/puck.json");
  const fallbackPath = path.join(process.cwd(), "database.json");

  const existingData = fs.existsSync(filePath)
    ? JSON.parse(fs.readFileSync(filePath, "utf-8"))
    : fs.existsSync(fallbackPath)
    ? JSON.parse(fs.readFileSync(fallbackPath, "utf-8"))
    : {};

  const updatedData = {
    ...existingData,
    [payload.path]: payload.data,
  };

  fs.mkdirSync(path.dirname(filePath), { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(updatedData, null, 2));
  fs.writeFileSync(fallbackPath, JSON.stringify(updatedData, null, 2));

  // Purge Next.js cache
  revalidatePath(payload.path);

  return NextResponse.json({ status: "ok" });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const targetPath = searchParams.get("path") || "/";
  const filePath = path.join(process.cwd(), "data/puck.json");

  if (fs.existsSync(filePath)) {
    const data = JSON.parse(fs.readFileSync(filePath, "utf-8"));
    return NextResponse.json(data[targetPath] || null);
  }

  return NextResponse.json(null);
}
