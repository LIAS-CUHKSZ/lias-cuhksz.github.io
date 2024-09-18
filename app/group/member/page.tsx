import Image from "next/image";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Group Members - LIAS",
};

function Page(): JSX.Element {
  return (
    <div className="mx-auto mb-20 max-w-5xl items-start justify-center p-4 md:mt-20">
      <h2 className="mb-4 text-2xl font-semibold">
        Research Assistant Professor and Postdoc
      </h2>
      <div className="[&>*]:card grid grid-cols-1 items-stretch gap-3 sm:grid-cols-3">
        <div>
          <Image
            src="/images/ziyang_hong.jpg"
            alt="photo"
            className="mx-auto pt-5"
            width={200}
            height={200}
          />
          <div className="p-5">
            <h4 className="mb-2 text-lg">Ziyang Hong</h4>
            <span className="font-normal text-gray-700 dark:text-gray-400">
              Research Assistant Professor,2024/08 - Present
              <br />
              Ph.D., Heriot-Watt University, UK
              <br />
              MSc in Vision and Robotics, Heriot-Watt University, UK
              <br />
              BSc in Electronic and Information Engineering, Shantou University,
              China
              <br />
              Research Field: Mobile Robotics, State Estimation, Simultaneous
              Localization and Mapping, Autonomous Driving, Robot Learning,
              Computer Vision, Radar-based Perception, Underwater Robotics
              <br />
              Personal website:{" "}
              <a
                target="_blank"
                href="https://sites.google.com/view/ziyanghong/home"
                rel="noreferrer"
              >
                https://sites.google.com/view/ziyanghong/home
              </a>
            </span>
          </div>
        </div>
        <div>
          <Image
            src="/images/zengguangyang.jpg"
            alt="photo"
            className="mx-auto pt-5"
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

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Ph.D. Students</h2>
      <div className="[&>*]:card grid grid-cols-1 items-stretch gap-3 sm:grid-cols-3">
        <div>
          <Image
            src="/images/yuanshen.jpg"
            alt="photo"
            className="mx-auto pt-5"
            width={200}
            height={200}
          />
          <div className="p-5">
            <h4 className="mb-2 text-lg">Yuan SHEN (沈源)</h4>
            <span className="font-normal text-gray-700 dark:text-gray-400">
              2023/09/01 – present
              <br />
              B.Eng. from Nanjing University of Science and Technology
              <br />
              Research Interests: SLAM
            </span>
          </div>
        </div>
        <div>
          <Image
            src="/images/haoyingli2.png"
            alt="photo"
            className="mx-auto pt-5"
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
            className="mx-auto pt-5"
            width={200}
            height={200}
          />
          <div className="p-5">
            <h4 className="mb-2 text-lg">Haodong JIANG(江昊东)</h4>
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
            className="mx-auto pt-5"
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
            className="mx-auto pt-5"
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
            className="mx-auto pt-5"
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
            className="mx-auto pt-5"
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
            className="mx-auto pt-5"
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
            className="mx-auto pt-5"
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
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">MPhil Students</h2>
      <div className="[&>*]:card grid grid-cols-1 items-stretch gap-3 sm:grid-cols-3">
        <div>
          <Image
            src="/images/lucky.jpeg"
            alt="photo"
            className="mx-auto pt-5"
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
            className="mx-auto pt-5"
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
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">RAs</h2>
      <div className="[&>*]:card grid grid-cols-1 items-stretch gap-3 sm:grid-cols-3">
        <div>
          <Image
            src="/images/wangwentao.jpg"
            alt="photo"
            className="mx-auto pt-5"
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
        <div>
          <Image
            src="/images/zhaohongxu-2.jpg"
            alt="photo"
            className="mx-auto pt-5"
            width={200}
            height={200}
          />
          <div className="p-5">
            <h4 className="mb-2 text-lg">Hongxu ZHAO (赵洪旭)</h4>
            <span className="font-normal text-gray-700 dark:text-gray-400">
              2023/3/10 - present
              <br />
              MPhil. from University of California, Berkeley
              <br />
              B.S. from Case Western Reserve University
            </span>
          </div>
        </div>
        <div>
          <Image
            src="/images/gaojingxing.jpg"
            alt="photo"
            className="mx-auto pt-5"
            width={200}
            height={200}
          />
          <div className="p-5">
            <h4 className="mb-2 text-lg">Jingxing GAO (高景星)</h4>
            <span className="font-normal text-gray-700 dark:text-gray-400">
              2023/9/15 - present
              <br />
              Master student, the Chinese University of Hong Kong, Shenzhen
              <br />
              B.Eng from Northeastern University.
            </span>
          </div>
        </div>
        <div>
          <Image
            src="/images/pengjingchao.jpg"
            alt="photo"
            className="mx-auto pt-5"
            width={200}
            height={200}
          />
          <div className="p-5">
            <h4 className="mb-2 text-lg">Jingchao PENG (彭靖超)</h4>
            <span className="font-normal text-gray-700 dark:text-gray-400">
              2023/9/15 - present
              <br />
              Master, the Chinese University of Hong Kong, Shenzhen.
              <br />
              B.Eng from City University of Hong Kong.
            </span>
          </div>
        </div>
      </div>

      <h2 className="mt-10 mb-4 text-2xl font-semibold">Undergraduate RAs</h2>
      <div>
        <p>
          9. Yuze HONG (洪昱泽), 2023/12/1 - present, B.Eng. from Zhejiang
          University
        </p>
        <p>
          8. Yuzhe WANG (王俣哲), 2023/9/1 - present, the Chinese University of
          Hong Kong, Shenzhen. Research Project: Cross-Source Point Cloud
          Registration
        </p>
        <p>
          7. Yiqian LI (李忆芊), 2023/9/1 - present, the Chinese University of
          Hong Kong, Shenzhen. Research Project: Cross-Source Point Cloud
          Registration
        </p>
        <p>
          6. Ruochen HUANG (黄若尘), 2023/9/16 - present, the Chinese University
          of Hong Kong, Shenzhen. Research Project: Privacy issue in NeRF
        </p>
        <p>
          5. Jinglan YANG (杨景兰), 2023/5/10 - present, the Chinese University
          of Hong Kong, Shenzhen. Research Project: Privacy issue in NeRF
        </p>
        <p>
          4. Hongfu WAN (万洪甫), 2023/10/15 - present, the Chinese University
          of Hong Kong, Shenzhen. Research Project: sonar pose estimation
        </p>
        <p>
          3. Chulin DAI (戴楚霖), 2023/9/5 - present, the Chinese University of
          Hong Kong, Shenzhen. Research Project: camera pose estimation
        </p>
        <p>
          2. Sijia WANG (王斯佳), 2023/9/5 - present, the Chinese University of
          Hong Kong, Shenzhen. Research Project: robust lidar pose estimation
        </p>
        <p>
          1. Letian CHENG (程乐天), 2023/02/07 - present, the Chinese University
          of Hong Kong, Shenzhen
        </p>
      </div>
    </div>
  );
}

export default Page;
