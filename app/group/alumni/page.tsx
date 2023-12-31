import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Alumni - LIAS",
};

function Page(): JSX.Element {
  return (
    <div className="mx-auto mb-20 max-w-5xl items-start justify-center p-4 md:mt-20">
      <h2 className="mb-4 text-2xl font-semibold">Alumni</h2>
      <div>
        <p>
          8. Qingcheng Zeng, RA, 2023/06 - 2023/09, Current Position: MPhil
          student, the Hong Kong University of Science and Technology
          (Guangzhou)
        </p>
        <p>
          7. Yixiao ZHOU (周昱潇), RA, 2022/10 - 2023/6, Current position: the
          Chinese University of Hong Kong, Shenzhen.
        </p>
        <p>
          6. Lihao ZHENG (郑立昊), RA, 2022/12 - 2023/10, Current position: the
          Chinese University of Hong Kong, Shenzhen.
        </p>
        <p>
          5. Ruobing HAN (韩若冰), RA, 2023/1 - 2023/7, Current position:
          Undergraduate student at the Chinese University of Hong Kong, Shenzhen
        </p>
        <p>
          4. Shiyu CHEN (陈诗雨), RA, 2022/1 – 2023/5, Current position: Master
          student at the Cornell University, Bachelor&apos;s degree from the
          Chinese University of Hong Kong, Shenzhen
        </p>
        <p>
          3. Kemi DING (丁克蜜), Visiting scholar, 2021/10 – 2021/12, Current
          position: Associate Professor at Southern University of Science and
          Technology, Pesonal website:{" "}
          <a
            href="https://kemiding.github.io/"
            target="_blank"
            rel="noreferrer"
          >
            https://kemiding.github.io/
          </a>
        </p>
        <p>
          2. Xingyu CHEN (陈星宇), Visiting student, 2021 – 2022/03, Current
          position: Mphil student at the Australian National University, B.Eng.
          from The Australian National University
        </p>
        <p>
          1. Haishan ZHANG (张海珊), Visiting Student, 2021/09 – 2022/04,
          Current position: Ph.D. student at the Hong Kong University of Science
          and Technology, B.Eng. from Nankai University
        </p>
      </div>
    </div>
  );
}

export default Page;
