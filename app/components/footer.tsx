"use client";

import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaRss,
  FaLinkedinIn,
} from "react-icons/fa6";
import { TbMailFilled } from "react-icons/tb";
import { metaData, socialLinks } from "app/lib/config";

const YEAR = new Date().getFullYear();

function SocialLink({ href, icon: Icon }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className="hover:text-rose-500 transition-colors duration-300">
      <Icon />
    </a>
  );
}

export default function Footer() {
  return (
    <footer className="bg-transparent border-t border-white/20">
      <div className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex justify-center">
          <div className="flex text-xl gap-6 text-slate-500 hover:text-slate-600 transition-colors duration-300">
            <SocialLink href={socialLinks.github} icon={FaGithub} />
            <SocialLink href={socialLinks.linkedin} icon={FaLinkedinIn} />
          </div>
        </div>
      </div>
    </footer>
  );
}
