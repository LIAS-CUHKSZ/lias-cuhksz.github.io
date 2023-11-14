import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Gallery - LIAS",
};

interface ImageData {
  src: string;
  caption: string | JSX.Element;
}

const imageList: ImageData[] = [
  {
    src: "/images/having-meals.jpg",
    caption:
      "From left to right: Guangyang, Hengye Zhu(Guest), Shuaiting, Haoying, Binyue Qiu(Guest), Haodong, Ke. @Qingzhiwu(青芝坞), Hangzhou, June 2021.",
  },
  {
    src: "/images/barbeque-scaled.jpg",
    caption:
      "From left to right: Guangyang, Junhu, Haodong, Binyue Qiu(Guest), Haishan, Haoying, Wentao, Xinghan. @Longgang(龙岗), Shenzhen, August, 2022.",
  },
  {
    src: "/images/climbing.jpg",
    caption: (
      <>
        From left to right: Junhu, Haishan, Chuyang Jin(Visiting Student),{" "}
        <a
          href="http://lsc.amss.ac.cn/~bqmu/Eng/index.html"
          target="_blank"
          rel="noreferrer"
        >
          Biqiang Mu
        </a>
        (Visitor from{" "}
        <a href="http://english.amss.cas.cn/" target="_blank" rel="noreferrer">
          AMSS CAS
        </a>
        ), Junfeng, Bokang, Haodong. @Wutong Mountain(梧桐山), Shenzhen,
        November 2021.
      </>
    ),
  },
  {
    src: "/images/wu_group_SDS_DY.jpg",
    caption: (
      <>
        From left to right: Hongxu, Jingchao, Yuan, Haodong, Guangyang, Wenliang
        Sheng(Visitor from{" "}
        <a
          href="https://www.ecust.edu.cn/en/main.psp"
          target="_blank"
          rel="noreferrer"
        >
          ECUST
        </a>
        ), Mengqi Lu(Visitor from{" "}
        <a
          href="https://www.ecust.edu.cn/en/main.psp"
          target="_blank"
          rel="noreferrer"
        >
          ECUST
        </a>
        ), Wenhao Lin(Visitor from{" "}
        <a
          href="https://www.ecust.edu.cn/en/main.psp"
          target="_blank"
          rel="noreferrer"
        >
          ECUST
        </a>
        ), Junfeng, Chao Yang (Visitor from{" "}
        <a
          href="https://www.ecust.edu.cn/en/main.psp"
          target="_blank"
          rel="noreferrer"
        >
          ECUST
        </a>
        ), Bokang. @Daoyuan, CUHKSZ, October, 2023.
      </>
    ),
  },
];

function Page(): JSX.Element {
  return (
    <div className="mx-auto mb-20 max-w-5xl items-start justify-center p-4 md:mt-20">
      <h2 className="mb-6 text-2xl font-semibold">Gallery</h2>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        {imageList.map(({ src, caption }, i) => (
          <div key={i}>
            <a
              href={src}
              className="mx-auto max-w-full"
              target="_blank"
              rel="noreferrer"
            >
              <Image
                width={300}
                height={300}
                className="h-auto w-full rounded-lg"
                src={src}
                alt=""
              />
            </a>
            <p className="mt-2 p-2 text-sm [&>a]:text-sm">{caption}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Page;
