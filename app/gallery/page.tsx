import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery - LIAS",
};

function Page(): JSX.Element {
  const imageList = [
    "/images/having-meals.jpg",
    "/images/barbeque-scaled.jpg",
    "/images/climbing.jpg",
  ];
  return (
    <>
      <div className="mx-auto my-20 max-w-5xl items-start justify-center p-4">
        <h2 className="mb-4 text-2xl font-semibold">Gallery</h2>

        <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {imageList.map((src, i) => (
            <a key={i} href={src} target="_blank" rel="noreferrer">
              <Image
                width={300}
                height={300}
                className="h-auto max-w-full rounded-lg"
                src={src}
                alt=""
              />
            </a>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
