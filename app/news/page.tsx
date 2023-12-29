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
          <p>● A paper was accepted by TAC as a regular paper(2023.12.29).</p>
          <p>
            Lingying Huang, Junfeng Wu, Dawei Shi, Subhrakanti Dey, Ling Shi.
            Differential Privacy in Distributed Optimization with Gradient
            Tracking. IEEE Transactions on Automatic Control(TAC), accepted.
            <br></br>
            <a
              href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=9"
              target="_blank"
              rel="noreferrer"
            >
              IEEE Transactions on Automatic Control
            </a>
          </p>
          <p>
            ● Junfeng will serve as an Associate Editor for 
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
            ● Junfeng, Xianghan and Jianhui attended 
            <a
              href="https://cdc2023.ieeecss.org/"
              target="_blank"
              rel="noreferrer"
            >
              CDC2023
            </a>
            (2023.12.10-15), and Junfeng visited Prof. Gregory S. Chirikjian and
            Prof. Ling Zhao’s research group at NUS and visited Prof. Lihua
            Xie’s group at NTU (2023.12.18-20).
          </p>
          <p>● A paper was accepted by TIT (2023.12.5)</p>
          <p>
            Guangyang Zeng, Biqiang Mu, Ling Shi, Jiming Chen and Junfeng Wu.
            Consistent and Asymptotically Efficient Localization from
            Range-Difference Measurements. IEEE Transactions on Information
            Theory (TIT), accepted.
            <br></br>
            <a
              href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=18"
              target="_blank"
              rel="noreferrer"
            >
              IEEE Transactions on Information Theory
            </a>
          </p>
          <p>● A paper was accepted by TII (2023.10.22)</p>
          <p>
            Shuaiting Huang, Chengcheng Zhao, Lingying Huang, Peng Cheng,
            Junfeng Wu and Lin Cai. Plug-and-Play Distributed Estimation of
            Driving States in an Open Vehicle Platoon. IEEE Transactions on
            Industrial Informatics (TII), accepted.
            <br></br>
            <a
              href="https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=9424"
              target="_blank"
              rel="noreferrer"
            >
              IEEE Transactions on Industrial Informatics
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
