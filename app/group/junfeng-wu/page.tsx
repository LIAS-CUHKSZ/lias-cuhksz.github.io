import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Junfeng Wu - LIAS",
};

function Page(): JSX.Element {
  return (
    <>
      <div className="mx-auto mb-20 max-w-5xl items-start justify-center p-4 md:mt-20">
        <h2 className="mb-3 text-xl font-bold">Junfeng Wu</h2>
        <div className="flex min-h-screen flex-col gap-[10px] md:flex-row">
          <div className="flex shrink-0 flex-row gap-4 md:w-[290px] md:flex-col">
            <img
              width={200}
              src="/images/junfengwu-201x300.jpg"
              alt="Junfeng Wu"
            />
            <div className="flex flex-col gap-2">
              <p>Associate Professor</p>
              <a
                className="text-sm underline"
                target="_blank"
                href="https://sds.cuhk.edu.cn/"
                rel="noreferrer"
              >
                School of Data Science
              </a>
              <a
                className="text-sm underline"
                target="_blank"
                href="https://www.cuhk.edu.cn/en"
                rel="noreferrer"
              >
                The Chinese University of Hongkong, Shenzhen
              </a>
              <a
                className="text-sm underline"
                target="_blank"
                href="https://scholar.google.com/citations?user=tfkculkAAAAJ&hl=en"
                rel="noreferrer"
              >
                Google Scholar
              </a>
            </div>
          </div>

          <div>
            <h2 className="mb-2 text-lg font-semibold">Research</h2>
            <div className="ml-4">
              <p>Areas of interest:</p>

              <p>
                1. Coordination of Multi-agent systems, distributed systems.
              </p>
              <p>
                2. Sensing, Estimation and control systems, Kalman filtering,
                localization, state estimation in robotics
              </p>
              <p>3. Network systems, sensor networks to social networks</p>
              <p>
                4. Security and privacy in information systems, such as cyber
                physical systems, machine learning algorithms
              </p>
            </div>

            <h2 className="mt-4 mb-2 text-lg font-semibold">
              Education Background
            </h2>
            <div className="ml-4">
              <p>● Ph.D., (Sept. 2009 – Aug. 2013)</p>
              <p>
                <a
                  href="https://hkust.edu.hk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Department of Electronic and Computer Engineering, The Hong
                  Kong University of Science and Technology (HKUST)
                </a>
              </p>
              <p>
                Advisor:{" "}
                <a
                  href="https://eesling.home.ece.ust.hk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ling Shi
                </a>
                .
              </p>
              <p>
                Thesis: Event-based State Estimation: Theory and Applications,
                Excellent Grade
              </p>
              <p className="mt-2">● Visiting Student (May 2012 – Aug. 2012)</p>
              <p>
                <a href="https://www.kth.se/is/dcs/division-of-decision-and-control-systems-1.788078">
                  Department of Automatic Control, KTH, Sweden
                </a>
              </p>

              <p>
                Advisor:{" "}
                <a
                  href="https://people.kth.se/~kallej/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Karl H. Johansson
                </a>
              </p>

              <p className="mt-2">● B.Eng., (Sep. 2005 – Jul. 2009)</p>
              <p>
                <a
                  href="http://www.cse.zju.edu.cn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Department of Control Science and Engineering
                </a>
                , Zhejiang University, Hangzhou, P. R. China
              </p>

              <p>Outstanding Graduate</p>
            </div>

            <h2 className="mt-4 mb-2 text-lg font-semibold">
              Working Experiences
            </h2>
            <div className="ml-4">
              <p>● Associate Professor (Sep. 2021 – present)</p>
              <p>
                <a
                  href="https://sds.cuhk.edu.cn/"
                  target="_blank"
                  rel="noreferrer"
                >
                  School of Data Science
                </a>
                , Chinese University of Hong Kong Shenzhen, Shenzhen, P. R.
                China
              </p>
              <p className="mt-2">
                ● Professor (on tenure track) (Jul. 2017 – Sep.2021)
              </p>
              <p>
                <a
                  href="https://www.access.kth.se/en"
                  target="_blank"
                  className="text-[red]"
                  rel="noreferrer"
                >
                  College of Control Science and Engineering
                </a>
                , Zhejiang University, Hangzhou, P. R. China
              </p>
              <p>
                <a
                  href="https://cecc.anu.edu.au/"
                  target="_blank"
                  className="text-[red]"
                  rel="noreferrer"
                >
                  College of Engineering and Computer Science
                </a>
                , The Australian National University, Australia
              </p>
              <p>
                <a
                  href="https://www.kth.se/is/dcs/division-of-decision-and-control-systems-1.788078%20https://www.kth.se/en"
                  target="_blank"
                  rel="noreferrer"
                >
                  Department of Automatic Control
                </a>
                ,{" "}
                <a
                  href="https://www.kth.se/en"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Royal Institute of Technology (KTH)
                </a>
                , Sweden
              </p>
              <p className="mt-2">
                ● Postdoctoral Researcher (Jan. 2014 – Dec. 2015)
              </p>
              <p>
                <a
                  href="https://www.kth.se/is/dcs/division-of-decision-and-control-systems-1.788078"
                  target="_blank"
                  className="text-[red]"
                  rel="noreferrer"
                >
                  Department of Automatic Control, KTH, Sweden
                </a>
              </p>
              <p>
                Advisor:{" "}
                <a
                  href="https://people.kth.se/~kallej/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Karl H. Johansson
                </a>
              </p>
              <p className="mt-2">
                ● Research Associate (Sep. 2013 – Dec. 2013)
              </p>
              <p>
                <a
                  href="https://ece.hkust.edu.hk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Department of Electronic and Computer Engineering
                </a>
                ,{" "}
                <a
                  href="https://eesling.home.ece.ust.hk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  HKUST
                </a>
                , Hong Kong
              </p>
              <p>
                Advisor:{" "}
                <a
                  href="https://eesling.home.ece.ust.hk/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Ling Shi
                </a>
              </p>
            </div>

            <h2 className="mt-4 mb-2 text-lg font-semibold">Awards</h2>

            <div className="ml-4">
              <p>
                ● Invitational Fellowship for Research in Japan,{" "}
                <a
                  href="https://www.jsps.go.jp/english/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The Japan Society for the Promotion of Science (JSPS)
                </a>
                , Japan. 2019
              </p>
              <p>
                ●{" "}
                <a
                  href="https://internationaleducation.gov.au/scholarships/Scholarships-and-Fellowships/Pages"
                  target="_blank"
                  rel="noreferrer"
                >
                  Endeavour Research Fellowship, Australian Government. 2016
                </a>
              </p>
              <p>
                ●{" "}
                <a
                  href="http://tcct.amss.ac.cn/about%20gzz/awarding%20rules.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  Guan Zhao-Zhi Best Paper Award, The 34th Chinese Control
                  Conference. 2015
                </a>
              </p>
              <p>
                ●{" "}
                <a
                  href="https://www.sciencedirect.com/journal/automatica"
                  target="_blank"
                  rel="noreferrer"
                >
                  Outstanding Reviewer, Elsevier Automatica. 2014
                </a>
              </p>
              <p>
                ●{" "}
                <a
                  href="https://ieee-cas.org/publication/ieee-transactions-control-network-systems"
                  target="_blank"
                  rel="noreferrer"
                >
                  Outstanding Reviewer, IEEE Transactions on Control of Network
                  Systems. 2014
                </a>
              </p>
            </div>

            <h2 className="mt-4 mb-2 text-lg font-semibold">Services</h2>

            <div className="ml-4">
              <p>Services to University</p>
              <p>
                ● Member: Graduate Panel, School of Data Science of CUHK-SZ,
                2021-present
              </p>
              <p>
                ● Member:Disciplinary Committee, School of Data Science of
                CUHK-SZ, 2021-2022
              </p>
              <p>
                ● Member: University Committee on Student Disciplinary, CUHK-SZ,
                2021-present
              </p>
              <p>
                ● Chair: Teaching Assistance Committee, School of Data Science
                of CUHK-SZ, 2021-present
              </p>
              <p>
                ● Organizer: ZJU CSE-HKUST RI PG Exchange Program,{" "}
                <a href="https://www.zju.edu.cn/english/">
                  Zhejiang University
                </a>{" "}
                Mar. 2018 – Aug. 2018
              </p>
              <p>
                ● Undergraduate Student Mentor:{" "}
                <a href="http://ckc.zju.edu.cn/ckcen/">
                  The Chu Kochen Honors College
                </a>
                , Zhejiang University Aug. 2018 – 2021
              </p>
              <p>
                ● Postgraduate Student Mentor: Zhejiang University Aug. 2017 –
                2021
              </p>
            </div>

            <h2 className="mt-4 mb-2 text-lg font-semibold">
              Academic Services
            </h2>
            <div className="ml-4">
              <p>
                ● Associate Editor:{" "}
                <a
                  href="https://ieeecss.org/publication/transactions-control-network-systems"
                  target="_blank"
                  rel="noreferrer"
                >
                  IEEE Transactions on Control of Network Systems
                </a>
                [IEEE TCNS, Impact Factor 3.467], Jan. 2023 –present
              </p>
              <p>
                ● Leading Guest Editor:{" "}
                <a
                  href="https://ietresearch.onlinelibrary.wiley.com/doi/10.1049/iet-cta.2017.0663"
                  target="_blank"
                  rel="noreferrer"
                >
                  IET Control Theory and Applications
                </a>
                ,{" "}
                <a href="https://ietresearch.onlinelibrary.wiley.com/doi/10.1049/iet-cta.2017.0663">
                  Special Issue on Resource and Control of Cyber-Physical
                  Systems
                </a>
                , Jul. 2016 – Jul. 2017
              </p>
              <p>
                ● Associate Editor,{" "}
                <a
                  href="https://ieeeccta.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The IEEE Conference on Control Technology and Applications
                  (CCTA)
                </a>
                , Bridgetown, Barbados, August, 2023
              </p>
              <p>
                ● Associate Editor,{" "}
                <a
                  href="https://ccta2022.ieeecss.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The IEEE Conference on Control Technology and Applications
                  (CCTA)
                </a>
                , Trieste, Italy, August, 2022
              </p>
              <p>
                ● Associate Editor,{" "}
                <a
                  href="https://ecc21.euca-ecc.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The European Control Conference
                </a>
                , Virtual Conference, June, 2021
              </p>
              <p>
                ● Associate Editor,{" "}
                <a
                  href="https://ieeecss.org/event/4th-ieee-conference-control-technology-and-applications"
                  target="_blank"
                  rel="noreferrer"
                >
                  The IEEE Conference on Control Technology and Applications
                  (CCTA)
                </a>
                , Montreal, Canada, August, 2020
              </p>
              <p>
                ● Associate Editor,{" "}
                <a
                  href="https://ecc20.euca-ecc.org/conference-editorial-board/index.html"
                  target="_blank"
                  rel="noreferrer"
                >
                  The European Control Conference
                </a>
                , Saint Petersburg, Russia, May 2020
              </p>
              <p>
                ● Technical Associate Editor: Stochastic Systems Technical
                Committee,{" "}
                <a
                  href="https://www.ifac2020.org/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The 21st IFAC World Congress
                </a>
                , Berlin, Germany, Jul. 2020
              </p>
              <p>
                ● Associate Editor,{" "}
                <a
                  href="https://controls.papercept.net/conferences/conferences/ICCA19/program/"
                  target="_blank"
                  rel="noreferrer"
                >
                  The 15th IEEE International Conference on Control and
                  Automation (ICCA19)
                </a>
                , Edinburgh, Scotland, Jul. 2019
              </p>
            </div>

            <h2 className="mt-4 mb-2 text-lg font-semibold">Teaching</h2>
            <div className="ml-4">
              At CUHK-SZ, I teach the following courses:
              <div className="relative overflow-x-auto">
                <table className="w-full text-left text-sm">
                  <thead>
                    <tr>
                      <th>Year</th>
                      <th>Spring/Fall</th>
                      <th>Course</th>
                    </tr>
                  </thead>
                  <tbody className="[&>*]:border-t">
                    <tr>
                      <td>2023</td>
                      <td>Spring</td>
                      <td>
                        DDA6040/CSC6121/MDS6222: Dynamic Programming and
                        Stochastic Control
                      </td>
                    </tr>
                    <tr>
                      <td>2022</td>
                      <td>Fall</td>
                      <td>MAT3007: Optimization</td>
                    </tr>
                    <tr>
                      <td>2022</td>
                      <td>Spring</td>
                      <td>
                        DDA604/CIE 6022/MCE5903: Dynamic Programming and
                        Stochastic Control
                      </td>
                    </tr>
                    <tr>
                      <td>2021</td>
                      <td>Fall</td>
                      <td>MAT3007: Optimization</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p>
                Link for the courses:
                <br />
                <a
                  target="_blank"
                  href="https://mypage.cuhk.edu.cn/academics/junfengwu/DDA6040.html"
                  rel="noreferrer"
                >
                  https://mypage.cuhk.edu.cn/academics/junfengwu/DDA6040.html
                </a>
                <br />
                <a
                  target="_blank"
                  href="https://mypage.cuhk.edu.cn/academics/junfengwu/MAT3007.html"
                  rel="noreferrer"
                >
                  https://mypage.cuhk.edu.cn/academics/junfengwu/MAT3007.html
                </a>
              </p>
              <p>
                At Zhejiang University, I taught the following courses: <br />
                Summer 2019, Stochastic Control Systems, (co-taught with Prof.{" "}
                <a
                  target="_blank"
                  href="http://eesling.home.ece.ust.hk/"
                  rel="noreferrer"
                >
                  Ling Shi
                </a>{" "}
                and Prof.{" "}
                <a
                  target="_blank"
                  href="https://person.zju.edu.cn/en/cp"
                  rel="noreferrer"
                >
                  Peng Cheng
                </a>
                )
              </p>
            </div>

            <h2 className="mt-4 mb-2 text-lg font-semibold">Contact</h2>
            <div className="ml-4">
              <p>
                Office: 402 Daoyuan Building, CUHK-SZ, 2001 Longxiang Boulevard,
                Longgang District, Shenzhen, Guangdong Province, P. R. China
              </p>
              <p>Email: junfengwu@cuhk.edu.cn</p>
              <p>Tel: (+86) 755-2351-705</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
