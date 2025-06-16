import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path) => {
    navigate(path);
    setMenuOpen(false);
  };

  const getCenterText = () => {
    const path = location.pathname;
    if (path === "/" || path === "/hero") return "HEY THERE!";
    if (path === "/about") return "THIS IS ME";
    if (path === "/projects") return "THING'S I'VE BUILT";
    if (path === "/contact") return "SAY HI👋";
    return "";
  };

  const handleResumeDownload = () => {
    const link = document.createElement("a");
    link.href = "/LOGESH-D.pdf"; // public folder path
    link.download = "LOGESH-D-Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <>
      <nav className="fixed top-4 left-0 right-0 z-50 bg-zinc-900/90 text-white shadow backdrop-blur-md mx-2 rounded-lg">
        <div className="flex items-center justify-between px-3 py-2 sm:px-4 md:px-8">
          {/* LOKiiii button opens resume modal immediately */}
          <button
            onClick={() => setShowResume(true)}
            className="text-base sm:text-xl font-bold text-orange-500"
          >
            LOKiiii
          </button>

          <div className="flex-1 text-center text-sm sm:text-base font-semibold truncate px-2 text-white">
            {getCenterText()}
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-xl focus:outline-none"
              aria-label="Toggle Menu"
            >
              ☰
            </button>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex md:gap-5 lg:gap-6">
            {[
              { label: "Hero", path: "/" },
              { label: "About", path: "/about" },
              { label: "Projects", path: "/projects" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`px-2 py-1 rounded ${
                  location.pathname === link.path
                    ? "bg-orange-500 text-white"
                    : "hover:text-orange-400"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-zinc-900 px-3 pb-3 space-y-1 text-sm">
            {[
              { label: "Hero", path: "/" },
              { label: "About", path: "/about" },
              { label: "Projects", path: "/projects" },
              { label: "Contact", path: "/contact" },
            ].map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`block w-full text-left px-3 py-2 rounded-md ${
                  location.pathname === link.path
                    ? "bg-orange-500 text-white"
                    : "hover:bg-zinc-800 hover:text-orange-400"
                }`}
              >
                {link.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Resume Modal */}
      {showResume && (
        <div
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center"
          onClick={() => setShowResume(false)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resume-title"
        >
          <div
            className="bg-zinc-900 rounded-xl shadow-lg max-w-4xl w-[90%] h-[80vh] flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center p-3 sm:p-4 border-b border-zinc-700">
              <h2
                id="resume-title"
                className="text-base sm:text-lg font-bold text-white"
              >
                Loki's Resume
              </h2>
              <div className="flex gap-2 sm:gap-3">
                <button
                  onClick={handleResumeDownload}
                  className="px-2 py-1 bg-orange-500 hover:bg-orange-600 text-white rounded text-xs sm:text-sm"
                >
                  Download
                </button>
                <button
                  onClick={() => setShowResume(false)}
                  className="text-lg text-gray-400 hover:text-white"
                  aria-label="Close resume modal"
                >
                  ×
                </button>
              </div>
            </div>

            {/* PDF Preview */}
            <div className="flex-1 p-2 sm:p-3 overflow-auto text-center">
              <iframe
                src="/LOGESH-D.pdf"
                title="Resume"
                className="w-full h-full rounded-lg"
                frameBorder="0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
