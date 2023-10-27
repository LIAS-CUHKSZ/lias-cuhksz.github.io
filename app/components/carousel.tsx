"use client";

import Image from "next/image";
import { createRef, RefObject, useEffect, useState } from "react";

const Carousel = ({ imageList }: { imageList: string[] }) => {
  // 切换
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemRefs, setItemRefs] = useState<RefObject<HTMLDivElement>[]>([]);

  useEffect(() => {
    setItemRefs((itemRefs) =>
      Array(imageList.length)
        .fill(0)
        .map((_, i) => itemRefs[i] ?? createRef())
    );
  }, [imageList.length]);

  const scrollToIndex = (index: number) => {
    if (index < 0) {
      index = imageList.length - 1;
    }
    if (index > imageList.length - 1) {
      index = 0;
    }
    itemRefs[index]?.current?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
    setActiveIndex(index);
  };

  useEffect(() => {
    // 设置计时器，当鼠标不在轮播图上时，自动轮播
    const timer = setInterval(() => {
      scrollToIndex(activeIndex + 1);
    }, 5000);
    return () => clearInterval(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex, itemRefs]);

  return (
    <div id="controls-carousel" className="relative w-full">
      <div className="flex h-56 flex-col flex-wrap overflow-hidden rounded-lg md:h-96">
        {imageList.map((image, index) => (
          <div key={index} ref={itemRefs[index]} className="h-full w-[100%]">
            <Image
              alt="..."
              className="h-full w-full object-cover"
              src={image}
              width={1000}
              height={800}
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="group absolute top-0 left-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={() => scrollToIndex(activeIndex - 1)}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M5 1 1 5l4 4"
            />
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="group absolute top-0 right-0 z-30 flex h-full cursor-pointer items-center justify-center px-4 focus:outline-none"
        onClick={() => scrollToIndex(activeIndex + 1)}
      >
        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white/30 group-hover:bg-white/50 group-focus:outline-none group-focus:ring-4 group-focus:ring-white dark:bg-gray-800/30 dark:group-hover:bg-gray-800/60 dark:group-focus:ring-gray-800/70">
          <svg
            className="h-4 w-4 text-white dark:text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 6 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m1 9 4-4-4-4"
            />
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default Carousel;
