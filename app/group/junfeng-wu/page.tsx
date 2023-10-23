function Page(): JSX.Element {
  return (
    <>
      <div className="items-start justify-center mx-auto max-w-5xl p-4 my-20">
        <h2 className="font-bold text-xl mb-3">Junfeng Wu</h2>
        <div className="flex flex-col md:flex-row gap-[50px] h-min-screen">
          <div className="flex flex-row md:flex-col shrink-0 md:w-[200px] gap-4">
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
              >
                School of Data Science
              </a>
              <a
                className="text-sm underline"
                target="_blank"
                href="https://www.cuhk.edu.cn/en"
              >
                The Chinese University of Hongkong, Shenzhen
              </a>
              <a
                className="text-sm underline"
                target="_blank"
                href="https://scholar.google.com/citations?user=tfkculkAAAAJ&hl=en"
              >
                Google Scholar
              </a>
            </div>
          </div>

          <div>
            <h2 className="font-semibold text-lg mb-2">Research</h2>
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

            <h2 className="font-semibold text-lg mt-4 mb-2">
              Education Background
            </h2>
            <div className="ml-4">
              <p>● Ph.D., (Sept. 2009 – Aug. 2013)</p>
              <p>
                <a href="https://hkust.edu.hk/" target="_blank">
                  Department of Electronic and Computer Engineering, The Hong
                  Kong University of Science and Technology (HKUST)
                </a>
              </p>
              <p>
                Advisor:{" "}
                <a href="https://eesling.home.ece.ust.hk/" target="_blank">
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
                <a href="https://people.kth.se/~kallej/" target="_blank">
                  Karl H. Johansson
                </a>
              </p>

              <p className="mt-2">● B.Eng., (Sep. 2005 – Jul. 2009)</p>
              <p>
                <a href="http://www.cse.zju.edu.cn/" target="_blank">
                  Department of Control Science and Engineering
                </a>
                , Zhejiang University, Hangzhou, P. R. China
              </p>

              <p>Outstanding Graduate</p>
            </div>

            <h2 className="font-semibold text-lg mt-4 mb-2">
              Working Experiences
            </h2>
            <div className="ml-4">
              <p>● Associate Professor (Sep. 2021 – present)</p>
              <p>
                <a href="https://sds.cuhk.edu.cn/" target="_blank">
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
                  className="text-red"
                >
                  College of Control Science and Engineering
                </a>
                , Zhejiang University, Hangzhou, P. R. China
              </p>
              <p>
                <a
                  href="https://cecc.anu.edu.au/"
                  target="_blank"
                  className="text-red"
                >
                  College of Engineering and Computer Science
                </a>
                , The Australian National University, Australia
              </p>
              <p>
                <a
                  href="https://www.kth.se/is/dcs/division-of-decision-and-control-systems-1.788078%20https://www.kth.se/en"
                  target="_blank"
                >
                  Department of Automatic Control
                </a>
                ,{" "}
                <a href="https://www.kth.se/en" target="_blank">
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
                  className="text-red"
                >
                  Department of Automatic Control, KTH, Sweden
                </a>
              </p>
              <p>
                Advisor:{" "}
                <a href="https://people.kth.se/~kallej/" target="_blank">
                  Karl H. Johansson
                </a>
              </p>
              <p className="mt-2">
                ● Research Associate (Sep. 2013 – Dec. 2013)
              </p>
              <p>
                <a href="https://ece.hkust.edu.hk/" target="_blank">
                  Department of Electronic and Computer Engineering
                </a>
                ,{" "}
                <a href="https://eesling.home.ece.ust.hk/" target="_blank">
                  HKUST
                </a>
                , Hong Kong
              </p>
              <p>
                Advisor:{" "}
                <a href="https://eesling.home.ece.ust.hk/" target="_blank">
                  Ling Shi
                </a>
              </p>
            </div>

            <h2 className="font-semibold text-lg mt-4 mb-2">Awards</h2>

            <div className="ml-4">
              <p>
                ● Invitational Fellowships for Research in Japan,{" "}
                <a href="https://www.jsps.go.jp/english/" target="_blank">
                  The Japan Society for the Promotion of Science (JSPS)
                </a>
                , Japan. 2019
              </p>
              <p>
                ●{" "}
                <a
                  href="https://internationaleducation.gov.au/scholarships/Scholarships-and-Fellowships/Pages"
                  target="_blank"
                >
                  Endeavour Research Fellowship, Australian Government. 2016
                </a>
              </p>
              <p>
                ●{" "}
                <a
                  href="http://tcct.amss.ac.cn/about%20gzz/awarding%20rules.html"
                  target="_blank"
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
                >
                  Outstanding Reviewer, Elsevier Automatica. 2014
                </a>
              </p>
              <p>
                ●{" "}
                <a
                  href="https://ieee-cas.org/publication/ieee-transactions-control-network-systems"
                  target="_blank"
                >
                  Outstanding Reviewer, IEEE Transactions on Control of Network
                  Systems. 2014
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Page;
