import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPage } from "../lib/get-page";
import { Client } from "./[...puckPath]/client";

export async function generateMetadata(): Promise<Metadata> {
  const data = getPage("/");
  return {
    title: data?.root?.props?.title || "Jules & Jon | Save the Date",
    description: "Save the Date for Jules & Jon's Wedding! julesnjon.com",
  };
}

export default async function HomePage() {
  const data = getPage("/");

  if (!data) {
    return notFound();
  }

  return (
    <main className="w-full min-h-screen flex flex-col justify-between">
      <Client data={data} />
    </main>
  );
}
