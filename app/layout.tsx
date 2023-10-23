"use client";
import { FC, PropsWithChildren } from "react";
import Footer from "./components/footer";
import Header from "./components/header";
import FlowbiteContext from "./context/FlowbiteContext";
import "./globals.css";

const RootLayout: FC<PropsWithChildren> = function ({ children }) {
  return (
    <html lang="en">
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
