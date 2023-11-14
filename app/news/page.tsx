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
          <p>A paper was accepted by ICRA (2023.01.25)</p>
          <p>
            Guangyang Zeng, Shiyu Chen, Biqiang Mu, Guodong Shi and Junfeng Wu.
            CPnP: Consistent Pose Estimator for Perspective-n-Point Problem with
            Bias Elimination. 2023 IEEE International Conference on Robotics and
            Automation (ICRA), accepted.
          </p>
          <br />
          <br />
          <p>A paper was accepted by ICRA (2023.01.25)</p>
          <p>
            Haodong JIANG, Wentao Wang, Yuan Shen, Xinghan Li, Xiaoqiang Ren,
            Biqiang Mu and Junfeng Wu. Efficient Planar Pose Estimation via UWB
            Measurements. 2023 IEEE International Conference on Robotics and
            Automation (ICRA), accepted.
          </p>
          <br />
          <br />
          <p>A paper was accepted by ACC (2023.01.25)</p>
          <p>
            Maben Rabi, Junfeng Wu, Vyoma Singh and Karl H. Johansson.
            Estimating a scalar log-concave random variable using a silence set
            based probabilistic sampling. 2023 American Control Conference
            (ACC), accepted.
          </p>
          <br />
          <br />
          <p>A paper was accepted by Automatica (2022.08.08)</p>
          <p>
            Biqiang Mu, Tianshi Chen, He Kong, Bo Jiang, Lei Wang and Junfeng
            Wu. On Embeddings and Inverse Embeddings of Input Design for
            Regularized System Identification. Automatica, accepted.
          </p>
          <br />
          <br />
          <p>A paper was accepted by TSP (2022.07.30)</p>
          <p>
            Guangyang Zeng, Biqiang Mu, Jiming Chen, Zhiguo Shi and Junfeng Wu.
            Global and Asymptotically Efficient Localization from Range
            Measurements. IEEE Transactions on Signal Processing, accepted.
          </p>
        </div>
      </div>
    </>
  );
}

export default Page;
