import React from "react";
// import Sort from "@/components/Sort";
import { getFiles } from "@/lib/actions/file.actions";
import { Models } from "node-appwrite";
// import Card from "@/components/Card";
// import { getFileTypesParams } from "@/lib/utils";

const Page = async ({ searchParams, params }: SearchParamProps) => {
  const type = ((await params)?.type as string) || "";
  // const searchText = ((await searchParams)?.query as string) || "";
  // const sort = ((await searchParams)?.sort as string) || "";

  // const types = getFileTypesParams(type) as FileType[];

  // const files = await getFiles({ types, searchText, sort });

  return (
    <div className="page-container">
      <section className="w-full">
        <h1 className="h1 capitalize">{type}</h1>
      </section>
    </div>
  );
};

export default Page;
