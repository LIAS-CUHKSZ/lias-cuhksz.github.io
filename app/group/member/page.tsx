import Image from "next/image";

function Page(): JSX.Element {
  return (
    <>
      <div className="mx-auto my-20 max-w-5xl items-start justify-center p-4">
        <h2 className="mb-4 text-2xl font-semibold">Ph.D. Students</h2>
        <div className="[&>*]:card grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3">
          <div>
            <Image
              src="/images/haoyingli2.png"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Haoying LI (李昊颖)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2022/09/01 – present
                <br />
                B.Eng. from Zhejiang University
                <br />
                Research Interests: SLAM,Robot perception,sensor fusion
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/haodongjiang2.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Haodong Jiang (江昊东)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2021/09/01 – present
                <br />
                B.Eng. from Zhejiang University
                <br />
                Research Interests: SLAM, Probabilistic Graph
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/bokangzhang2.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Bokang ZHANG (张博康)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2021/09/21 – present
                <br />
                B.Eng. from Zhejiang University
                <br />
                Research Interests: AI and Cyber privacy and security
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/junhujin.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Junhu JIN (金俊虎)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2021/09/01 – present
                <br />
                B.Eng. from Zhejiang University
                <br />
                Research Interests: Graphic signal processing, Distributed
                estimation, Network systems
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/jianghuili2.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg"> Jianhui LI (李建辉)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2020/09/01 - present
                <br />
                B.Eng. from Zhejiang University
                <br />
                Research Interests: Reinforcement Learning, Optimal control
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/kefang2.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Ke Fang (方科)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2019/09/21 – present
                <br />
                M Phil. from Beihang University
                <br />
                B.Eng. , Harbin Institute of Technology
                <br />
                Research Interests: Online control; Distributed control systems
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/xinghanli.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Xinhan LI (李星翰)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2018/09/21 – present
                <br />
                B.Eng. from Zhejiang University
                <br />
                Research Interests: SLAM；Filtering and Estimation on SE
                <sub>n</sub>(3)
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/shuaitinghuang2.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Shuaiting HUANG (黄帅婷)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2018/09/21 - present
                <br />
                B.Eng. from Nanjing Agricultrual University
                <br />
                MSc from Nanjing Agricultrual University
                <br />
                Research Interests: Distributed state estimation; Cyber security
                and privacy
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/zengguangyang.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Guangyang ZENG (曾广扬)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                Postdoc, 2022/08 – Present
                <br />
                B.Eng. from Zhejiang University
                <br />
                Ph.D. from Zhejiang University (Co-supervised)
                <br />
                Research interests: Estimation theory, localization, state
                estimation in robotics, wire sensor networks, distributed signal
                processing
                <br />
                Personal website:{" "}
                <a
                  target="_blank"
                  href="https://guangyangzeng.github.io/"
                  rel="noreferrer"
                >
                  https://guangyangzeng.github.io/
                </a>
              </span>
            </div>
          </div>
        </div>

        <h2 className="mt-10 mb-4 text-2xl font-semibold">MPhil Students</h2>
        <div className="[&>*]:card grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3">
          <div>
            <Image
              src="/images/zengqingcheng.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Qingcheng ZENG (曾庆铖)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2023/09/01 – present (Co-supervised with Prof.{" "}
                <a
                  href="https://sse.cuhk.edu.cn/en/faculty/sunzhenglong"
                  target="_blank"
                  rel="noreferrer"
                >
                  Zhenglong Sun
                </a>
                )
                <br />
                B.Eng. from Hunan University
                <br />
                Personal website:{" "}
                <a
                  href="https://neozng.github.io/"
                  target="_blank"
                  rel="noreferrer"
                >
                  https://neozng.github.io/
                </a>
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/zhangyanglin.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Yanglin ZHANG (张杨林)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2023/09/01 – present (Co-supervised with Prof.{" "}
                <a
                  href="http://www.zhangruimao.site/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ruimao Zhang
                </a>
                )
                <br />
                B.Eng. from the Chinese University of Hong Kong, Shenzhen
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/chenzimin.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Zimin CHEN (陈子民)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2023/09/01 – present (Co-supervised with Prof.{" "}
                <a
                  href="https://myweb.cuhk.edu.cn/tllam"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tianlin Lin
                </a>
                )
                <br />
                2022/06/01 – present (RA)
                <br />
                B.Eng. from the Chinese University of Hong Kong, Shenzhen
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/wangwentao.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Wentao WANG (王文涛)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2022/07/10 – present (Co-supervised with Prof.{" "}
                <a
                  href="http://mypage.zju.edu.cn/cjyang"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chunjie Yang
                </a>
                )
                <br />
                B.Eng. from Zhejiang University
                <br />
                Postgraduate, Zhejiang University
              </span>
            </div>
          </div>
        </div>

        <h2 className="mt-10 mb-4 text-2xl font-semibold">RA</h2>
        <div className="[&>*]:card grid grid-cols-2 items-stretch gap-3 sm:grid-cols-3">
          <div>
            <Image
              src="/images/zhaohongxu-2.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Hongxu ZHAO (赵洪旭)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2023/3/10 – present
                <br />
                MPhil. from University of California, Berkeley
                <br />
                B.S. from Case Western Reserve University
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/chengletian.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Letian CHENG (程乐天)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2023/02/07 – present
                <br />
                Undergraduate, the Chinese University of Hong Kong, Shenzhen
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/zhouyixiao.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Yuxiao ZHOU (周昱潇)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2022/10/15 – present
                <br />
                Undergraduate, the Chinese University of Hong Kong, Shenzhen
                <br />
                Research Project: MaskedXGBoost with Differential Privacy
                Guarantee
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/zhenglihao.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Lihao ZHENG (郑立昊)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2022/12/15 – present
                <br />
                Undergraduate, the Chinese University of Hong Kong, Shenzhen
                <br />
                Research Project: Differential Privacy in MaskedXGBoost
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/huzexi.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Zexi HU (胡泽西) </h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                B.Eng. from the Chinese University of Hong Kong, ShenZhen
              </span>
            </div>
          </div>
          <div>
            <Image
              src="/images/chenshiyu.jpg"
              alt="photo"
              className="h-52 w-full rounded-t-lg object-cover"
              width={200}
              height={200}
            />
            <div className="p-5">
              <h4 className="mb-2 text-lg">Shiyu CHEN (陈诗雨)</h4>
              <span className="font-normal text-gray-700 dark:text-gray-400">
                2022/1/15 – present
                <br />
                Undergraduate, the Chinese University of Hong Kong, Shenzhen
                <br />
                Research Project: Camera pose estimation
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
