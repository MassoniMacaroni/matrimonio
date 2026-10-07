import "@puckeditor/core/puck.css";
import type { Metadata } from "next";
import { Client } from "../puck/[...puckPath]/client";
import { getPage } from "../../lib/get-page";

export const metadata: Metadata = {
  title: "Puck Editor | Jules & Jon",
};

export default async function EditPage() {
  const path = "/";
  const data = getPage(path);

  const initialData = data || {
    content: [],
    root: {
      props: {
        title: "Jules & Jon | Save the Date",
      },
    },
  };

  return <Client path={path} data={initialData} />;
}
