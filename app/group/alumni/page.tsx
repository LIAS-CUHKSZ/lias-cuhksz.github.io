import Image from "next/image";

function Page(): JSX.Element {
  return (
    <>
      <div className="mx-auto my-20 max-w-5xl items-start justify-center p-4">
        <h2 className="mb-4 text-2xl font-semibold">Alumni</h2>
        <div className="[&>*]:card grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3">
          <div>
            <Image
              src="/images/dingkemi.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Kemi DING (丁克蜜)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                Visiting scholar
                <br />
                2021/10 – 2021/12
                <br />
                Current position: Associate Professor at Southern University of
                Science and Technology
                <br />
                Pesonal website:{" "}
                <a
                  href="https://kemiding.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://kemiding.github.io/
                </a>
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/chenxingyu.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Xingyu CHEN (陈星宇)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                Visiting student
                <br />
                2021 – 2022/03
                <br />
                Current position: Mphil student at the Australian National
                University
                <br />
                B.Eng. from The Australian National University
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/zhanghaishan.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Haishan ZHANG (张海珊)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                Visiting Student
                <br />
                2021/09 – 2022/04
                <br />
                Current position: Ph.D. student at the Hong Kong University of
                Science and Technology
                <br />
                B.Eng. from Nankai University
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
