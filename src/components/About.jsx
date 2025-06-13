import React, { useState, useEffect } from "react";
import {
  Code2,
  Figma,
  Palette,
  BarChart3,
  Monitor,
  Circle,
  Menu,
  X,
  Lightbulb,
  MessageSquareText,
  RefreshCcw,
  Layers3,
} from "lucide-react";
import {
  FaPython,
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaClock,
  FaBookReader,
  FaLightbulb,
  FaGithub,
  FaGitAlt,
} from "react-icons/fa";
import { GrMysql, GrReactjs } from "react-icons/gr";
import { RiTailwindCssFill, RiTeamFill } from "react-icons/ri";
import { SiCanva } from "react-icons/si";
import { VscVscode, VscGraph } from "react-icons/vsc";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const baseCategories = {
    programming: {
      title: "Programming Languages",
      shortTitle: "Programming",
      icon: <Code2 />,
      skills: [
        { name: "Java", icon: <FaJava /> },
        { name: "Python", icon: <FaPython /> },
        { name: "C/C++", icon: <Code2 /> },
        { name: "HTML", icon: <FaHtml5 /> },
        { name: "CSS", icon: <FaCss3Alt /> },
        { name: "JavaScript", icon: <FaJs /> },
        { name: "SQL", icon: <GrMysql /> },
      ],
    },
    frontend: {
      title: "Frontend Technologies",
      shortTitle: "Frontend",
      icon: <Monitor />,
      skills: [
        { name: "ReactJS", icon: <GrReactjs /> },
        { name: "Tailwind CSS", icon: <RiTailwindCssFill /> },
      ],
    },
    design: {
      title: "UI/UX Design",
      shortTitle: "Design",
      icon: <Figma />,
      skills: [
        { name: "Figma", icon: <Figma /> },
        { name: "Canva", icon: <SiCanva /> },
        { name: "Wireframing", icon: <Figma /> },
        { name: "Prototyping", icon: <Figma /> },
        { name: "Frontend Design Principles", icon: <Palette /> },
      ],
    },
    tools: {
      title: "Tools",
      shortTitle: "Tools",
      icon: <BarChart3 />,
      skills: [
        { name: "Power BI", icon: <VscGraph /> },
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGithub /> },
        { name: "VS Code", icon: <VscVscode /> },
      ],
    },
    softSkills: {
      title: "Soft Skills",
      shortTitle: "Soft Skills",
      icon: <Lightbulb />,
      skills: [
        { name: "Problem-Solving", icon: <FaLightbulb /> },
        { name: "Teamwork & Collaboration", icon: <RiTeamFill /> },
        { name: "Communication", icon: <MessageSquareText /> },
        { name: "Adaptability", icon: <RefreshCcw /> },
        { name: "Continuous Learning", icon: <FaBookReader /> },
        { name: "Time Management", icon: <FaClock /> },
      ],
    },
  };

  const allSkills = Object.values(baseCategories).flatMap((cat) => cat.skills);

  const skillCategories = {
    all: {
      title: "All",
      shortTitle: "All",
      icon: <Layers3 />,
      skills: allSkills,
    },
    ...baseCategories,
  };

  const getSkillDescription = (category) => {
    const descriptions = {
      all: "A combined overview of all my skills across different categories including programming, frontend, design, tools, and soft skills.",
      programming:
        "My expertise in programming languages, frameworks, and technologies that I use to build robust applications.",
      frontend:
        "Modern frontend technologies for building responsive and interactive user interfaces.",
      design:
        "Design tools and principles for creating intuitive and visually appealing user experiences.",
      tools:
        "Essential development tools and platforms that enhance my productivity and workflow.",
      softSkills:
        "Personal attributes and interpersonal skills that enable effective collaboration and problem-solving.",
    };
    return descriptions[category];
  };

  return (
    <section className="bg-black text-white min-h-screen overflow-hidden relative">
      {/* Grid overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        {/* Profile Section */}
        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 xl:gap-16 items-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Left side - Image */}
          <div className="w-full flex justify-center order-1 lg:order-1">
            <div className="relative w-52 h-52 xs:w-56 xs:h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-[20rem] lg:h-[20rem] rounded-2xl overflow-hidden shadow-xl border-2 border-orange-500/20 transform hover:scale-105 transition duration-300">
              <div className="w-full h-full bg-gradient-to-br from-orange-500/20 to-gray-800 flex items-center justify-center">
                <img
                  src="/Loki-About.png"
                  alt="Profile"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="space-y-4 sm:space-y-6 text-center lg:text-left order-2 lg:order-2">
            <h1 className="text-2xl xs:text-3xl sm:text-4xl md:text-5xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-extrabold leading-tight">
              I'M LOGESH D <br className="hidden sm:block" />
              <span className="text-orange-500 block sm:inline">
                A PASSIONATE DEVELOPER
              </span>
            </h1>
            <p className="text-sm sm:text-base lg:text-lg text-gray-400 font-medium max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              I'm a frontend developer focused on building beautiful,
              interactive and accessible web experiences. From concept to
              execution, my work blends creativity with code. Currently
              developing projects using the MERN stack, specializing in clean
              UI, UX, and responsive design.
            </p>

            <div className="pt-2 sm:pt-4 flex flex-col xs:flex-row gap-3 sm:gap-4 justify-center lg:justify-start">
              <a
                href="/contact"
                className="inline-block border-2 border-orange-500 text-orange-500 px-4 sm:px-6 py-2 sm:py-3 rounded-md hover:bg-orange-500 hover:text-white transition duration-300 font-bold text-sm sm:text-base"
              >
                Let's Connect
              </a>
            </div>
          </div>
        </div>

        {/* Education Section */}
        <div className="max-w-6xl mx-auto mt-12 sm:mt-16 lg:mt-24 mb-12 sm:mb-16 lg:mb-24">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 text-white border-b border-white/20 pb-2 inline-block">
            <span className="text-orange-500">Education</span> Journey
          </h2>

          <div className="space-y-4 sm:space-y-6 lg:space-y-8 border-l-2 border-orange-500 pl-4 sm:pl-6 relative">
            {[
              {
                year: "2022 - 2026",
                title: "B.Tech in Computer Science and Business Systems",
                place:
                  "KIT-Kalaignarkarunanithi Institute Of Technology, Coimbatore.",
              },
              {
                year: "2020 - 2022",
                title: "Higher Secondary Education",
                place:
                  "Sri Ayyan Vidyashram Higher Secondary School, Thiruvallur",
              },
              {
                year: "2019 - 2020",
                title: "Secondary Education",
                place:
                  "Sri Ayyan Vidyashram Higher Secondary School, Thiruvallur",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative border border-white/10 p-3 sm:p-4 lg:p-6 rounded-lg bg-white/5 transition-all duration-300 hover:bg-white/10"
              >
                <span className="absolute -left-[0.85rem] sm:-left-[1.05rem] top-4 sm:top-6">
                  <Circle className="text-orange-500 w-2 h-2 sm:w-3 sm:h-3 fill-current" />
                </span>
                <p className="text-xs sm:text-sm text-orange-500 font-bold">
                  {item.year}
                </p>
                <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mt-1 sm:mt-2">
                  {item.title}
                </h3>
                <span className="block text-xs sm:text-sm font-medium text-gray-300 mt-1">
                  {item.place}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Section - Horizontal Menu Style */}
        <div className="max-w-7xl mx-auto">
          <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-6 sm:mb-8 lg:mb-10 text-center">
            My <span className="text-orange-500">Skillset</span>
          </h2>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden mb-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between text-white"
            >
              <span className="flex items-center gap-3">
                <span className="text-orange-500 text-xl">
                  {skillCategories[activeSkillCategory].icon}
                </span>
                <span className="font-semibold">
                  {skillCategories[activeSkillCategory].title}
                </span>
              </span>
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {/* Mobile Dropdown Menu */}
            {isMobileMenuOpen && (
              <div className="mt-2 bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                {Object.entries(skillCategories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveSkillCategory(key);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-all duration-300 ${
                      activeSkillCategory === key
                        ? "bg-orange-500 text-white"
                        : "text-gray-400 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    <span className="text-lg">{category.icon}</span>
                    <span className="font-semibold">{category.title}</span>
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Desktop Category Navigation */}
          <div className="hidden md:flex flex-wrap justify-center gap-2 lg:gap-4 mb-8 lg:mb-12 bg-white/5 p-2 rounded-2xl border border-white/10">
            {Object.entries(skillCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveSkillCategory(key)}
                className={`flex items-center gap-2 px-3 lg:px-6 py-2 lg:py-3 rounded-xl transition-all duration-300 font-semibold text-sm lg:text-base ${
                  activeSkillCategory === key
                    ? "bg-orange-500 text-white shadow-lg"
                    : "text-gray-400 hover:text-white hover:bg-white/10"
                }`}
              >
                <span className="text-base lg:text-lg">{category.icon}</span>
                <span className="hidden lg:inline">{category.title}</span>
                <span className="lg:hidden">{category.shortTitle}</span>
              </button>
            ))}
          </div>

          {/* Skills Display */}
          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2 sm:gap-3">
                <span className="text-orange-500 text-xl sm:text-2xl lg:text-3xl">
                  {skillCategories[activeSkillCategory].icon}
                </span>
                <span className="text-base sm:text-lg lg:text-xl">
                  {skillCategories[activeSkillCategory].title}
                </span>
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
                {getSkillDescription(activeSkillCategory)}
              </p>
            </div>

            {/* Skills Grid */}
            <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-3 sm:gap-4 lg:gap-6">
              {skillCategories[activeSkillCategory].skills.map(
                (skill, index) => (
                  <div
                    key={index}
                    className="bg-black/20 border border-white/10 rounded-xl p-3 sm:p-4 lg:p-6 text-center hover:border-orange-500/50 hover:bg-orange-500/10 transition-all duration-300 group cursor-pointer min-h-[100px] sm:min-h-[120px] lg:min-h-[140px] flex flex-col justify-center"
                  >
                    <div className="text-2xl sm:text-3xl lg:text-4xl mb-2 sm:mb-3 lg:mb-4 text-orange-500 group-hover:scale-110 transition-transform duration-300 flex justify-center">
                      {skill.icon}
                    </div>
                    <h4 className="text-white font-semibold text-xs sm:text-sm lg:text-base group-hover:text-orange-300 transition-colors duration-300 leading-tight">
                      {skill.name}
                    </h4>
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
