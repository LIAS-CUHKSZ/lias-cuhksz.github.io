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
          <p>● Prof. Shiyu Zhao visited LIAS! (2023.07.17)</p>
          <p>
            <a
              href="https://www.westlake.edu.cn/faculty/shiyu-zhao.html"
              target="_blank"
              rel="noreferrer"
            >
              Shiyu Zhao
            </a>
          </p>
          <p>● Prof. Dawei Shi visited LIAS! (2023.07.15)</p>
          <p>
            <a
              href="https://ac.bit.edu.cn/szdw/dsmd/bssds/58156bb085df4b82b7dae77bc20873cb.htm"
              target="_blank"
              rel="noreferrer"
            >
              Dawei Shi
            </a>
          </p>
          <p>● A paper was accepted by CDC (2023.07.12)</p>
          <p>
            Jianhui Li, Youcheng Niu, Shuang Li, Yuzhe Li, Jinming Xu and
            Junfeng Wu. Inducing Desired Equilibrium in Taxi Repositioning
            Problem with Adaptive Incentive Design. 2023 62nd IEEE Conference on
            Decision and Control (CDC), accepted.
            <br></br>
            <a
              href="https://cdc2023.ieeecss.org/"
              target="_blank"
              rel="noreferrer"
            >
              https://cdc2023.ieeecss.org/
            </a>
          </p>
          <p>
            ● Shiyu Chen has received the master&apos;s degree offer from
            Cornell University, congratulations! (2023.04.01)
          </p>
          <p>
            <a
              href="https://www.cornell.edu//"
              target="_blank"
              rel="noreferrer"
            >
              https://www.cornell.edu/
            </a>
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
