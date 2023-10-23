import { DarkThemeToggle, Navbar } from "flowbite-react";
import Image from "next/image";
import { FC } from "react";

const Header: FC<Record<string, never>> = function () {
  return (
    <header className="sticky top-0 z-20">
      <Navbar fluid>
        <Navbar.Brand href="/">
          <Image alt="Flowbite logo" height="45" src="/logo.png" width="45" />
          <span className="my-4 self-center whitespace-nowrap px-3 text-xl font-semibold dark:text-white">
            The Laboratory for Intelligent Autonomous Systems
          </span>
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Navbar.Toggle />
          <DarkThemeToggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            HOME
          </Navbar.Link>
          <Navbar.Link href="/group">GROUP</Navbar.Link>
          <Navbar.Link href="/">PUBLICATIONS</Navbar.Link>
          <Navbar.Link href="/">RESEARCH HIGHLIGHTS</Navbar.Link>
          <Navbar.Link href="/">NEWS</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
