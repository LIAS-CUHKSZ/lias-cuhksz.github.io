import { Metadata } from "next";

export const metadata: Metadata = {
  title: "News - LIAS",
};

function Page(): JSX.Element {
  return (
    <>
      <div className="mx-auto mb-20 max-w-5xl items-start justify-center p-4 md:mt-20">
        <h2 className="mb-4 text-2xl font-semibold">News</h2>
        <div>
          <p>● A paper was accepted by TAC(2024.06.12).</p>
          <p>
            Xinghan Li, Jianqi Chen, Han Zhang, Jieqiang Wei, Junfeng Wu, Errors
            Dynamics in Affine Group Systems, IEEE Transactions on Automatic
            Control, conditionally accepted
          </p>
          <p>● A paper was accepted by Automatica(2024.03.26).</p>
          <p>
            Jianqi Chen, Junfeng Wu, Jie Chen, Small-Gain Criteria for
            Mean-Square Stability of Random Delay Systems, Automatica, accepted
          </p>
          <p>● A paper was conditionally accepted by TRO(2024.02.27).</p>
          <p>
            Liang Wang, Yuanzheng He, Daobilige Su, Katsutoshi Itoyama, Kazuhiro
            Nakadai, Junfeng Wu, Shoudong Huang, You-Fu Li, He Kong, SLAM-based
            Joint Calibration of Multiple Asynchronous Microphone Arrays and
            Sound Source Localization, IEEE Transactions on Robotics,
            conditionally accepted.
          </p>
          <p>● A paper was accepted by TAC as a regular paper(2023.12.29).</p>
          <p>
            Lingying Huang, Junfeng Wu, Dawei Shi, Subhrakanti Dey, Ling Shi.
            Differential Privacy in Distributed Optimization with Gradient
            Tracking.{" "}
            <a
              href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=9"
              target="_blank"
              rel="noreferrer"
            >
              IEEE Transactions on Automatic Control (TAC)
            </a>
            , accepted.
          </p>
          <p>
            ● Junfeng will serve as an Associate Editor for{" "}
            <a
              href="https://ccta2024.ieeecss.org/"
              target="_blank"
              rel="noreferrer"
            >
              CCTA 2024
            </a>
            (2023.12.22)
          </p>
          <p>
            ● Junfeng, Xianghan and Jianhui attended{" "}
            <a
              href="https://cdc2023.ieeecss.org/"
              target="_blank"
              rel="noreferrer"
            >
              CDC2023
            </a>
            (2023.12.10-15), and Junfeng visited Prof. Gregory S. Chirikjian and
            Prof. Ling Zhao&#39;s research group at NUS and visited Prof. Lihua
            Xie&#39;s group at NTU (2023.12.18-20).
          </p>
          <p>● A paper was accepted by TIT (2023.12.5)</p>
          <p>
            Guangyang Zeng, Biqiang Mu, Ling Shi, Jiming Chen and Junfeng Wu.
            Consistent and Asymptotically Efficient Localization from
            Range-Difference Measurements.{" "}
            <a
              href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=18"
              target="_blank"
              rel="noreferrer"
            >
              IEEE Transactions on Information Theory (TIT)
            </a>
            , accepted.
          </p>
          <p>● A paper was accepted by TII (2023.10.22)</p>
          <p>
            Shuaiting Huang, Chengcheng Zhao, Lingying Huang, Peng Cheng,
            Junfeng Wu and Lin Cai. Plug-and-Play Distributed Estimation of
            Driving States in an Open Vehicle Platoon.{" "}
            <a
              href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=18"
              target="_blank"
              rel="noreferrer"
            >
              IEEE Transactions on Information Theory (TIT)
            </a>
            , accepted.
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
