"use client";
import { Carousel } from "flowbite-react";

export default function Index(): JSX.Element {
  return (
    <>
      <div className="flex dark:bg-gray-900">
        <main className="order-2 mx-4 mt-4 mb-24 flex-[1_0_16rem]">
          <HomePage />
        </main>
      </div>
    </>
  );
}

function HomePage(): JSX.Element {
  return (
    <div className="p-6">
      <div className="h-[40vh] sm:h-64 xl:h-80 2xl:h-96">
        <Carousel>
          {[
            "./images/head1.jpg",
            "./images/climbing.jpg",
            "./images/barbeque-scaled.jpg",
          ].map((image, index) => (
            <img alt="..." src={image} key={index} />
          ))}
        </Carousel>
      </div>
      <div className="mx-auto mt-10 max-w-5xl dark:text-white">
        <h1 className="mb-6 text-2xl font-extrabold">
          The Laboratory for Intelligent Autonomous Systems
        </h1>
        <p>
          The Laboratory for Intelligent Autonomous Systems (LIAS) at School of
          Data Science, The Chinese University of Hong Kong, Shenzhen is a
          research center committed to advancing research in the areas of
          systems and control, robotics, machine learning, and signal
          processing, specifically:
        </p>
        <p>1. Localization, state estimation in robotics</p>
        <p>2. Systems theory, decision and control theory, and autonomy</p>
        <p>
          3. Network systems, from multi-agent systems, sensor networks to
          social networks
        </p>
        <p>
          4. Safety, security and privacy in information systems, such as cyber
          physical systems, machine learning algorithms
        </p>
        <p className="mt-2 leading-7">Contact Person: Meiqi Liu</p>
        <p>Contact Email: liumeiqi@cuhk.edu.cn</p>
      </div>
    </div>
  );
}
