import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../lib/config";

const navItems = {
  "/blog": { name: "Blog" },
  "/projects": { name: "Projects" },
  "/photos": { name: "Photos" },
};

export function Navbar() {
  return (
    <div className="vertical table w-full mb-5 z-[800]">
      <div className="topmenubar-toptext bg-neutral-800 text-white opacity-90 h-[110px]">
        <div className="topmenubar-inner w-[80%] max-w-[900px] min-w-[480px] mx-auto relative">
          <div className="yiningkarlli absolute top-[60px] left-[95px] text-[30px] font-medium uppercase z-[1100]">
            <Link href="/" className="nav text-white no-underline hover:text-red-500">
              Matthew Sun
            </Link>
          </div>
          <div className="codeandvisuals absolute top-[1px] text-[60px] font-medium uppercase z-[1100]">
            <Link href="/blog" className="nav text-white no-underline hover:text-red-500">
              Code & Visuals
            </Link>
          </div>
          <div className="topmenu absolute top-[69px] right-0 text-[20px] font-light text-right">
            <Link className="nav" href="/blog">Blog</Link> |{" "}
            <Link className="nav" href="/archive">Archive</Link> |{" "}
            <Link className="nav" href="/projects">Projects</Link> |{" "}
            <Link className="nav" href="/about">About</Link>
          </div>
        </div>
      </div>
    </div>
  );
}
