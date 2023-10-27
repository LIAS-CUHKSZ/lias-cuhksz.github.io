"use client";
import { Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import { FC, useEffect, useState } from "react";

const Header: FC<Record<string, never>> = function () {
  const [route, setRoute] = useState("");

  useEffect(() => {
    let route = window.location.pathname;
    route = route.split("/")[1] ?? route.replace("/", "");
    if (route === "") {
      setRoute("index");
    } else {
      setRoute(route);
    }
  }, []);

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
          {/* <DarkThemeToggle /> */}
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="/" active={route === "index"}>
            HOME
          </Navbar.Link>
          <Navbar.Link active={route === "group"}>
            <Dropdown label="GROUP" inline>
              <Dropdown.Item
                onClick={() => (window.location.href = "/group/junfeng-wu")}
              >
                Junfeng Wu
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => (window.location.href = "/group/member")}
              >
                Current Member
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => (window.location.href = "/group/alumni")}
              >
                Alumni
              </Dropdown.Item>
            </Dropdown>
          </Navbar.Link>
          <Navbar.Link href="/gallery" active={route === "gallery"}>
            GALLERY
          </Navbar.Link>
          <Navbar.Link href="/publications" active={route === "publications"}>
            PUBLICATIONS
          </Navbar.Link>
          <Navbar.Link
            href="/research-highlights"
            active={route === "research-highlights"}
          >
            RESEARCH HIGHLIGHTS
          </Navbar.Link>
          <Navbar.Link href="/news" active={route === "news"}>
            NEWS
          </Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default Header;
