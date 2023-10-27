import { Metadata } from "next";
import { FC } from "react";

export const metadata: Metadata = {
  title: "Group - LIAS",
};

const Page: FC<Record<string, never>> = function () {
  return (
    <>
      <div className="px-6 py-8">Hi. Please select sub path.</div>
    </>
  );
};

export default Page;
