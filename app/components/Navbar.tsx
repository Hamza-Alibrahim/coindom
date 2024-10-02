"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

interface Target {
  innerWidth: number;
}

const Navbar = () => {
  const [fixed, setFixed] = useState(false);
  const [expand, setExpand] = useState(false);

  useEffect(() => {
    const handleScroll = function () {
      if (window.scrollY > 160 && !fixed) setFixed(true);
      else if (window.scrollY < 160 && fixed) setFixed(false);
    };
    const handleResize = function (e: UIEvent) {
      const x = e.currentTarget as Target | null;
      if (x!.innerWidth > 900 && expand) setExpand(false);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <header
      className={`h-[10rem] w-full flex items-center ${
        fixed ? "fixed bg-section shadow-navShadow" : "absolute"
      } left-0 top-0 z-[999]`}
    >
      <div className="css-container flex justify-between items-center navbar">
        <Link href="/">
          <h1 className="text-[3rem] font-bold">COINDOM</h1>
        </Link>
        <nav
          className={`flex gap-[4rem] max-sm:absolute max-sm:left-[-100rem] max-sm:top-0 max-sm:flex-col max-sm:items-center max-sm:justify-center max-sm:w-screen max-sm:h-screen max-sm:bg-gradiant max-sm:gap-[2.5rem] transition-[left] duration-500 ${
            expand ? "!left-0" : ""
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setExpand(false)}
            className="close-mobile sm:hidden absolute top-[3rem] right-[3rem] cursor-pointer hover:stroke-[#8c3cc9]"
          >
            <path d="M18 6l-12 12"></path>
            <path d="M6 6l12 12"></path>
          </svg>
          <Link
            onClick={() => setExpand(false)}
            className="text-[2rem] font-bold bg-clip-text hover:text-transparent hover:bg-text-gradiant transition-colors duration-300 max-sm:text-[3rem]"
            href="#Home"
          >
            Home
          </Link>
          <Link
            onClick={() => setExpand(false)}
            className="text-[2rem] font-bold bg-clip-text hover:text-transparent hover:bg-text-gradiant transition-colors duration-300 max-sm:text-[3rem]"
            href="#Market"
          >
            Market
          </Link>
          <Link
            onClick={() => setExpand(false)}
            className="text-[2rem] font-bold bg-clip-text hover:text-transparent hover:bg-text-gradiant transition-colors duration-300 max-sm:text-[3rem]"
            href="#Choose Us"
          >
            Choose Us
          </Link>
          <Link
            onClick={() => setExpand(false)}
            className="text-[2rem] font-bold bg-clip-text hover:text-transparent hover:bg-text-gradiant transition-colors duration-300 max-sm:text-[3rem]"
            href="#Join"
          >
            Join
          </Link>
        </nav>
        <div className="flex gap-[2rem] max-xms:gap-[1rem]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-brand-twitter"
          >
            <path d="M22 4.01c-1 .49 -1.98 .689 -3 .99c-1.121 -1.265 -2.783 -1.335 -4.38 -.737s-2.643 2.06 -2.62 3.737v1c-3.245 .083 -6.135 -1.395 -8 -4c0 0 -4.182 7.433 4 11c-1.872 1.247 -3.739 2.088 -6 2c3.308 1.803 6.913 2.423 10.034 1.517c3.58 -1.04 6.522 -3.723 7.651 -7.742a13.84 13.84 0 0 0 .497 -3.753c0 -.249 1.51 -2.772 1.818 -4.013z"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="tabler-icon tabler-icon-brand-discord"
          >
            <path d="M8 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
            <path d="M14 12a1 1 0 1 0 2 0a1 1 0 0 0 -2 0"></path>
            <path d="M15.5 17c0 1 1.5 3 2 3c1.5 0 2.833 -1.667 3.5 -3c.667 -1.667 .5 -5.833 -1.5 -11.5c-1.457 -1.015 -3 -1.34 -4.5 -1.5l-.972 1.923a11.913 11.913 0 0 0 -4.053 0l-.975 -1.923c-1.5 .16 -3.043 .485 -4.5 1.5c-2 5.667 -2.167 9.833 -1.5 11.5c.667 1.333 2 3 3.5 3c.5 0 2 -2 2 -3"></path>
            <path d="M7 16.5c3.5 1 6.5 1 10 0"></path>
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            onClick={() => setExpand(true)}
            className="hamburger-menu sm:hidden cursor-pointer hover:stroke-[#8c3cc9]"
          >
            <path d="M4 6l16 0"></path>
            <path d="M4 12l16 0"></path>
            <path d="M4 18l16 0"></path>
          </svg>
        </div>
      </div>
    </header>
  );
};
export default Navbar;
