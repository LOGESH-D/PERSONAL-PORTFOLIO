import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaArrowRight, FaGithub, FaLinkedin, FaFigma } from "react-icons/fa";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hovered, setHovered] = useState(null);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-4 sm:px-6 pt-20 relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-orange-500/10 blur-3xl animate-pulse"
          style={{ animationDuration: "8s" }}
        ></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-72 h-72 rounded-full bg-blue-500/10 blur-3xl animate-pulse"
          style={{ animationDuration: "12s" }}
        ></div>
      </div>

      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      <div
        className={`max-w-6xl w-full flex flex-col md:flex-row items-center justify-between gap-12 md:gap-8 z-10 transition-all duration-1000 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
        }`}
      >
        <div className="flex flex-col space-y-6 md:w-1/2 text-center md:text-left">
          <div
            className={`flex items-center space-x-2 justify-center md:justify-start transition-all duration-700 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-8"
            }`}
          >
            <span className="w-3 h-3 bg-orange-500 rounded-full animate-pulse" />
            <p className="text-sm sm:text-base text-gray-300 tracking-wider">
              Available for Work
            </p>
          </div>

          <h1
            className={`text-2xl sm:text-5xl md:text-6xl font-bold leading-tight transition-all duration-700 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="hover:text-orange-400 transition-colors duration-300">
              Frontend Developer,
            </div>
            <div className="hover:text-orange-400 transition-colors duration-300">
              UI / UX Designer,
            </div>
            <div className="hover:text-orange-400 transition-colors duration-300">
              Data Visualization.
            </div>
          </h1>
        </div>

        <div
          className={`flex flex-col space-y-8 items-center md:items-end text-center md:text-right md:w-1/2 mt-8 md:mt-0 transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
          }`}
        >
          <p className="text-lg text-gray-400 sm:text-3xl ">
            Hi, I'm Logesh — Code is my canvas, and creativity is my compiler.
          </p>
          <div className="flex flex-col sm:flex-row w-full sm:w-auto space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-end">
            <Link
              to="/projects"
              onMouseEnter={() => setHovered("projects")}
              onMouseLeave={() => setHovered(null)}
              className="group bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full flex items-center justify-center sm:justify-start space-x-2 transition-all duration-300 w-full sm:w-auto relative overflow-hidden"
            >
              <span className="relative z-10">See my works</span>
              <FaArrowRight
                className={`ml-2 relative z-10 transition-transform duration-300 ${
                  hovered === "projects" ? "translate-x-1" : ""
                }`}
              />
              <span className="absolute inset-0 bg-white/20 transform -translate-x-full -skew-x-12 group-hover:translate-x-0 transition-transform duration-500"></span>
            </Link>

            <Link
              to="/contact"
              onMouseEnter={() => setHovered("contact")}
              onMouseLeave={() => setHovered(null)}
              className="group border border-orange-500 text-orange-500 hover:text-white px-6 py-3 rounded-full transition-all duration-300 flex items-center justify-center w-full sm:w-auto relative overflow-hidden"
            >
              <span className="relative z-10">Get in Touch</span>
              <span className="absolute inset-0 bg-orange-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>
          {/* Social Links */}
          <div className="flex space-x-6 mt-2">
            <a
              href="https://www.linkedin.com/in/logesh-d-6a155a265?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/LOGESH-D"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.figma.com/@lokiiii"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hover:text-orange-500 transition-all duration-300 transform hover:scale-110"
            >
              <FaFigma />
            </a>
          </div>
        </div>
      </div>

      {/* Animated background name */}
      <h1
        className={`absolute bottom-6 left-6 md:left-20 text-[80px] sm:text-[120px] md:text-[160px] font-bold text-white/10 select-none pointer-events-none transition-all duration-1000 delay-1000 whitespace-nowrap ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
        }`}
      >
        LOGESH.D :-)
      </h1>

      {/* Floating particles */}
      {[...Array(10)].map((_, i) => (
        <div
          key={i}
          className="absolute w-1 h-1 bg-orange-500/50 rounded-full animate-ping"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDuration: `${3 + Math.random() * 5}s`,
            animationDelay: `${Math.random() * 2}s`,
          }}
        />
      ))}
    </div>
  );
};

export default Hero;
