import { FC } from "react";

const Footer: FC<Record<string, never>> = function () {
  return (
    <footer className="">
      <div className="bg-[#273171] text-white px-6 py-8">
        © The Laboratory For Intelligent Autonomous System (LIAS). All Rights
        Reserved
      </div>
    </footer>
  );
};

export default Footer;
