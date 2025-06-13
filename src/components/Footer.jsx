import React from "react";
import { FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full bg-black border-t border-white/10 py-3 px-4 text-gray-400 text-xs">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
        {/* Left - Copyright */}
        <div className="text-center md:text-left leading-tight">
          © {new Date().getFullYear()}{" "}
          <span className="text-orange-500 font-medium">LOKiiii:-</span> All
          rights reserved.
        </div>

        {/* Right - Social Links */}
        <div className="flex gap-3 text-base">
          <a
            href="https://github.com/LOGESH-D"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/YOUR_LINK"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-orange-400 transition"
          >
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
