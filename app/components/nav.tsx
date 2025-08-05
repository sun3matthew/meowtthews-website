import Link from "next/link";
import { ThemeSwitch } from "./theme-switch";
import { metaData } from "../lib/config";

const navItems = {
  "/projects": { name: "Projects" },
  "/art": { name: "Art" },
};

export function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-6 py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-normal text-slate-700 hover:text-rose-500 transition-colors duration-300 tracking-wide">
              Matthew Sun
            </Link>
          </div>
          <div className="flex items-center space-x-8">
            <Link 
              href="/projects" 
              className="text-slate-600 hover:text-rose-500 transition-colors duration-300 font-medium tracking-wide"
            >
              Projects
            </Link>
            <Link 
              href="/art" 
              className="text-slate-600 hover:text-rose-500 transition-colors duration-300 font-medium tracking-wide"
            >
              Art
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
