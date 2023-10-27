"use client";
import { FC, PropsWithChildren } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import FlowbiteContext from "./context/FlowbiteContext";
import "./globals.css";

import { Lato } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const inter = Lato({
  weight: "400",
  display: "swap",
  subsets: ["latin-ext"],
});

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en" className={inter.className}>
      {/* <header>
        <title>LIAS</title>
      </header> */}
      <FlowbiteContext>
        <body className="dark:bg-gray-900 dark:text-white">
          <Header />
          {children}
          <Footer />
        </body>
      </FlowbiteContext>
    </html>
  );
};

export default RootLayout;
