import { Metadata } from "next";
import React from "react"; // Import React if not already implicitly available

export const metadata: Metadata = {
  title: "News - LIAS",
};

// Define the news items as an array of JSX elements or strings
// Using JSX elements directly is easiest if you have links/formatting inside
const newsItems: React.ReactNode[] = [
  <>
    A paper was accepted by 2025 IEEE CDC(2025.07.17).
    <br />
    Jianhui Li, Shi Pu, Jianqi Chen, Junfeng Wu, Linear Convergence Analysis
    of A Single-loop Algorithm for Bilevel Optimization via Small-gain
    Theorem, 2025 64th IEEE Conference on Decision and Control (CDC),
    accepted.
  </>,
  <>
    A paper was accepted by 2025 IEEE CDC(2025.07.17).
    <br />
    Junfeng Wu, Wei Chen, Li Qiu, Understanding Stabilizability of Feedback
    Control from First-Order System with One-step Random Delay, 2025 64th
    IEEE Conference on Decision and Control (CDC), accepted.
  </>,
  <>
    A paper was accepted by 2025 IEEE TIFS(2025.07.17).
    <br />
    Jianhui Li, Bokang Zhang, Youcheng Niu, Shuang Wu, Kemi Ding, Junfeng Wu,
    Online Reward Poisoning in Reinforcement Learning with Convergence
    Guarantee, IEEE Transactions on Information Forensics and Security,
    accepted.
  </>,
  <>
    A paper was conditionally accepted by 2025 IEEE TCNS(2025.07.05).
    <br />
    Shuaiting Huang, Haodong Jiang, Chengcheng Zhao, Peng Cheng, Junfeng Wu,
    Fully Distributed State Estimation for Multi-agent Systems and its
    Application in Cooperative Localization, IEEE Transactions on Control of
    Network Systems, conditionally accepted.
  </>,
  <>
    A paper was accepted by 2025 IEEE RAL(2025.03.31).
    <br /> Wenliang Sheng, Hongxu Zhao, Lingpeng Chen, Guangyang Zeng, Yunling
    Shao, Yuze Hong, Chao Yang, Ziyang Hong, Junfeng Wu, BESTAnP: Bi-Step
    Efficient and Statistically Optimal Estimator for Acoustic-n-Point Problem,
    IEEE Robotics and Automation Letters, accepted.
  </>,
  <>
    Junfeng Wu, Ziyang Hong hosted the SDS Topical Seminar Series on Marine
    Science and Marine Robotics, with talks delivered by Dr. Ivan Masmitja
    (Instituto de Ciencias del Mar ,Spain), Apple Chui (CUHK), Giacomo Picardi
    (Instituto de Ciencias del Mar, Spain), Guangyang Zeng(CUHKSZ), Lingying
    Huang(Southeast University, China), 2025.02.19.
  </>,
  <>
    Dr. Ivan Masmitja from Instituto de Ciencias del Ma, Spain, visited our lab
    (2025.02.17-20)
  </>,
  <>Jinglan Yang received a master offer from CMU (2025.02.11)</>,
  <>
    Junfeng Wu visited Peking University hosted by Prof. Wei
    Chen(2025.02.06-09).
  </>,
  <>
    Haoying LI, Qingcheng Zeng, Haoran Li, Yanglin Zhang, Junfeng Wu,
    Distributed Invariant Kalman Filter for Object-level Multi-robot Pose SLAM,
    2025 IEEE International Conference on Robotics and Automation (ICRA).
  </>,
  <>A paper was accepted by 2025 IEEE ICRA.(2025.01.28)</>,
  <>
    Ziyang Hong, Junfeng Wu visited Dr. CHUI Pui Yi Apple at School of Life
    Sciences, CUHK(2025.01.23).
  </>,
  <>
    Haodong Jiang, and Junfeng Wu visited The Centre for Underwater Robotics
    (CIRS) ,University of Girona, Spain(2024.12.19-21).
  </>,
  <>
    Haoding Jiang, Haoying Li, Hongxu Zhao, Junfeng Wu attended CDC @Milano
    (2024.12.16-19).
  </>,
  <>
    Junfeng WU will serve as an AE for{" "}
    <a href="https://2025.ieee-icra.org/" target="_blank" rel="noreferrer">
      IEEE ICRA 2025
    </a>
    .
  </>,
  <>
    <a
      href="https://eng.ox.ac.uk/people/xiaowen-dong/"
      target="_blank"
      rel="noreferrer"
    >
      Prof. Xiaowen Dong
    </a>
    , visited LIAS(2024.09.03). Junfeng hosted his talk in CUHKSZ School of Data
    Science Topical Seminar on Bayesian Optimisation of Graph-based Functions
  </>,
  <>
    A paper was accepted by CCS(2024.08.27) <br />
    Bokang Zhang, Yanglin Zhang, Zhikun Zhang, Jinglan Yang, Lingying Huang,
    Junfeng Wu, S^2NeRF: Privacy-preserving Training Framework for NeRF, ACM
    Conference on Computer and Communications Security, accepted.
  </>,
  <>
    A paper was accepted by TCNS(2024.08.24)
    <br />
    Ke Fang, Jianqi Chen, Junfeng Wu, Clock Synchronization with Unknown and
    Unmodeled Disturbances over Distributed Networks, IEEE Transactions on
    Control of Network Systems, accepted.
  </>,
  <>
    A paper was accepted by CDC(2024.07.24)
    <br />
    Hongxu Zhao, Guangyang Zeng, Haodong Jiang, Xiaogiang Ren, Junfeng Wu,
    Consistent Rigid Body Localizationfrom Range Measurements with Anchor
    Position Uncertainty, IEEE Conference on Decision and Control, accepted.
  </>,
  <>
    A paper was accepted by CDC(2024.07.24)
    <br />
    Haoying Li, Xinghan Li, Shuaiting Huang, ChaoYang,Junfeng Wu, Covariance
    Intersection-based Invariant Kalman Filtering (DInClKF) for Distributed Pose
    Estimation, IEEE Conference on Decision and Control, accepted.
  </>,
  <>
    A paper was accepted by TAC(2024.06.12).
    <br />
    Xinghan Li, Jianqi Chen, Han Zhang, Jieqiang Wei, Junfeng Wu, Errors
    Dynamics in Affine Group Systems, IEEE Transactions on Automatic Control,
    conditionally accepted
  </>,
  <>
    A paper was accepted by Automatica(2024.03.26).
    <br />
    Jianqi Chen, Junfeng Wu, Jie Chen, Small-Gain Criteria for Mean-Square
    Stability of Random Delay Systems, Automatica, accepted
  </>,
  <>
    A paper was conditionally accepted by TRO(2024.02.27).
    <br />
    Liang Wang, Yuanzheng He, Daobilige Su, Katsutoshi Itoyama, Kazuhiro
    Nakadai, Junfeng Wu, Shoudong Huang, You-Fu Li, He Kong, SLAM-based Joint
    Calibration of Multiple Asynchronous Microphone Arrays and Sound Source
    Localization, IEEE Transactions on Robotics, conditionally accepted.
  </>,
  <>
    A paper was accepted by TAC as a regular paper(2023.12.29).
    <br />
    Lingying Huang, Junfeng Wu, Dawei Shi, Subhrakanti Dey, Ling Shi.
    Differential Privacy in Distributed Optimization with Gradient Tracking.{" "}
    <a
      href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=9"
      target="_blank"
      rel="noreferrer"
    >
      IEEE Transactions on Automatic Control (TAC)
    </a>
    , accepted.
  </>,
  <>
    Junfeng will serve as an Associate Editor for{" "}
    <a href="https://ccta2024.ieeecss.org/" target="_blank" rel="noreferrer">
      CCTA 2024
    </a>
    (2023.12.22)
  </>,
  <>
    Junfeng, Xianghan and Jianhui attended{" "}
    <a href="https://cdc2023.ieeecss.org/" target="_blank" rel="noreferrer">
      CDC2023
    </a>
    (2023.12.10-15), and Junfeng visited Prof. Gregory S. Chirikjian and Prof.
    Ling Zhao&#39;s research group at NUS and visited Prof. Lihua Xie&#39;s
    group at NTU (2023.12.18-20).
  </>,
  <>
    A paper was accepted by TIT (2023.12.5)
    <br />
    Guangyang Zeng, Biqiang Mu, Ling Shi, Jiming Chen and Junfeng Wu. Consistent
    and Asymptotically Efficient Localization from Range-Difference
    Measurements.{" "}
    <a
      href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=18"
      target="_blank"
      rel="noreferrer"
    >
      IEEE Transactions on Information Theory (TIT)
    </a>
    , accepted.
  </>,
  <>
    A paper was accepted by TII (2023.10.22)
    <br />
    Shuaiting Huang, Chengcheng Zhao, Lingying Huang, Peng Cheng, Junfeng Wu and
    Lin Cai. Plug-and-Play Distributed Estimation of Driving States in an Open
    Vehicle Platoon.{" "}
    <a
      href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=18" // Note: Double check if this link is correct, it's the same as TIT above
      target="_blank"
      rel="noreferrer"
    >
      IEEE Transactions on Industrial Informatics (TII)
    </a>
    , accepted.
  </>,
];

function Page(): JSX.Element {
  return (
    <>
      <div className="mx-auto mb-20 max-w-5xl items-start justify-center p-4 md:mt-20">
        <h2 className="mb-4 text-2xl font-semibold">News</h2>
        <div>
          {/* Map over the newsItems array */}
          {newsItems.map((item, index) => (
            // Use index as key, ensure it's stable or use unique IDs if available
            <p key={index}>
              ● {item} {/* Prepend the bullet point and a space */}
            </p>
          ))}
        </div>
      </div>
    </>
  );
}

export default Page;
