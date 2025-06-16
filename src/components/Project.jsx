import React, { useState, useEffect } from "react";
import { FiExternalLink } from "react-icons/fi";
import {
  Monitor,
  Database,
  Palette,
  Cpu,
  Menu,
  X,
  Github,
  Layers3,
} from "lucide-react";

const Project = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProjectCategory, setActiveProjectCategory] = useState("all");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  const getImagePath = (image) =>
    `${import.meta.env.BASE_URL}${image.replace(/^\//, "")}`;

  const projectCategories = {
    all: {
      title: "All Projects",
      shortTitle: "All",
      icon: <Layers3 />,
      projects: [],
    },
    frontend: {
      title: "Frontend Applications",
      shortTitle: "Frontend",
      icon: <Monitor />,
      projects: [
        {
          title: "Chat-Bot",
          image: "/chatbot.png",
          description:
            "Build a chatbot project with React.js, Tailwind CSS, and APIs to deliver interactive conversations and real-time responses.",
          link: "https://github.com/LOGESH-D/Chat-Bot",
          github: "https://github.com/LOGESH-D/Chat-Bot",
          technologies: ["React js", "Tailwind CSS"],
        },
        {
          title: "Dream spot ECommerce",
          image: "/dreamspot.png",
          description:
            "A responsive food ordering interface built with modern frontend technologies",
          link: "https://github.com/LOGESH-D/DREAM-SPOT-EC",
          github: "https://github.com/LOGESH-D/DREAM-SPOT-EC",
          technologies: ["React js", "Tailwind CSS"],
        },
        {
          title: "Drawing Web App",
          image: "/drawing-app.png",
          description:
            "Interactive drawing application with various tools and features",
          link: "https://logesh-d.github.io/Drawing-web/",
          github: "https://github.com/LOGESH-D/Drawing-web",
          technologies: ["HTML5 Canvas", "JavaScript", "CSS"],
        },
      ],
    },
    fullstack: {
      title: "Full Stack Applications",
      shortTitle: "Full Stack",
      icon: <Database />,
      projects: [
        {
          title: "Food Ordering System",
          image: "/food-logo.png",
          description: "A responsive food and table booking application",
          link: "https://logesh-d.github.io/food-ordering/",
          github: "https://github.com/LOGESH-D/food-ordering",
          technologies: ["React", "CSS", "JavaScript", "SQL", "PHP"],
        },
      ],
    },
    uiux: {
      title: "UI/UX Design",
      shortTitle: "UI/UX",
      icon: <Palette />,
      projects: [
        {
          title: "ECommerce Interface in Figma",
          image: "/ec-figma.png",
          description:
            "Analytics dashboard with clean and user-friendly interface design",
          link: "https://www.figma.com/community/file/1511787994265323577/dream-spotsweets-snacks",
          github:
            "https://www.figma.com/community/file/1511787994265323577/dream-spotsweets-snacks",
          technologies: [
            "Figma",
            "User Research",
            "Wireframing",
            "Prototyping",
          ],
        },
      ],
    },
    iot: {
      title: "IoT Projects",
      shortTitle: "IoT",
      icon: <Cpu />,
      projects: [
        {
          title: "Smart Waste Management System",
          image: "/SWMS.png",
          description:
            "IoT-enabled waste management solution with real-time monitoring",
          link: "https://github.com/LOGESH-D/Smart-Waste-Management-System",
          github: "https://github.com/LOGESH-D/Smart-Waste-Management-System",
          technologies: ["Arduino", "Sensors", "IoT", "Web Dashboard"],
        },
      ],
    },
  };

  projectCategories.all.projects = Object.values(projectCategories)
    .filter((cat) => cat.projects?.length)
    .flatMap((cat) => cat.projects);

  const getProjectDescription = (category) => {
    const descriptions = {
      all: "A complete collection of all my projects across frontend, full stack, UI/UX, and IoT development.",
      frontend:
        "Interactive and responsive web applications built with modern frontend technologies and frameworks.",
      fullstack:
        "Complete web applications with both frontend and backend development, including databases and APIs.",
      uiux: "User interface and experience design projects focusing on usability, aesthetics, and user satisfaction.",
      iot: "Internet of Things projects combining hardware, sensors, and software for smart solutions.",
    };
    return descriptions[category];
  };

  return (
    <section className="bg-black text-white min-h-screen overflow-hidden relative">
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:50px_50px] opacity-30"></div>

      <div className="container mx-auto relative z-10 px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <div
          className={`text-center mb-12 sm:mb-16 lg:mb-20 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold mb-4 sm:mb-6">
            Let's see what I <span className="text-orange-500">Create</span>
          </h2>
          <p className="text-sm sm:text-base lg:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Explore my diverse portfolio of projects spanning frontend
            development, full-stack applications, UI/UX design, and IoT
            innovations.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="md:hidden mb-6">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="w-full bg-white/5 border border-white/10 rounded-xl p-4 flex items-center justify-between text-white"
            >
              <span className="flex items-center gap-3">
                <span className="text-orange-500 text-xl">
                  {projectCategories[activeProjectCategory].icon}
                </span>
                <span className="font-semibold">
                  {projectCategories[activeProjectCategory].title}
                </span>
              </span>
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>

            {isMobileMenuOpen && (
              <div className="mt-2 bg-white/5 border border-white/10 rounded-xl overflow-hidden">
                {Object.entries(projectCategories).map(([key, category]) => (
                  <button
                    key={key}
                    onClick={() => {
                      setActiveProjectCategory(key);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`w-full text-left px-4 py-3 flex items-center gap-3 transition-all duration-300 ${
                      activeProjectCategory === key
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

          <div className="hidden md:flex flex-wrap justify-center gap-2 lg:gap-4 mb-8 lg:mb-12 bg-white/5 p-2 rounded-2xl border border-white/10">
            {Object.entries(projectCategories).map(([key, category]) => (
              <button
                key={key}
                onClick={() => setActiveProjectCategory(key)}
                className={`flex items-center gap-2 px-3 lg:px-6 py-2 lg:py-3 rounded-xl transition-all duration-300 font-semibold text-sm lg:text-base ${
                  activeProjectCategory === key
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

          <div className="bg-gradient-to-br from-white/5 to-white/10 rounded-2xl p-4 sm:p-6 lg:p-8 border border-white/10">
            <div className="text-center mb-6 sm:mb-8">
              <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-white mb-2 flex items-center justify-center gap-2 sm:gap-3">
                <span className="text-orange-500 text-xl sm:text-2xl lg:text-3xl">
                  {projectCategories[activeProjectCategory].icon}
                </span>
                <span className="text-base sm:text-lg lg:text-xl">
                  {projectCategories[activeProjectCategory].title}
                </span>
              </h3>
              <p className="text-xs sm:text-sm lg:text-base text-gray-400 max-w-3xl mx-auto leading-relaxed px-2">
                {getProjectDescription(activeProjectCategory)}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
              {projectCategories[activeProjectCategory].projects.map(
                (project, index) => (
                  <div
                    key={index}
                    className="bg-black/20 border border-white/10 rounded-xl overflow-hidden hover:border-orange-500/50 hover:bg-orange-500/5 transition-all duration-300 group cursor-pointer"
                  >
                    <div className="relative h-48 sm:h-56 lg:h-64 overflow-hidden">
                      <img
                        src={getImagePath(project.image)}
                        alt={project.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 md:block hidden" />
                      <div
                        className="absolute inset-0 flex items-center justify-center gap-4
                      opacity-100 md:opacity-0 md:group-hover:opacity-100
                      transition-all duration-300"
                      >
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-orange-500 hover:bg-orange-600 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110"
                        >
                          <FiExternalLink size={20} />
                        </a>
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-all duration-300 transform hover:scale-110 backdrop-blur-sm"
                        >
                          <Github size={20} />
                        </a>
                      </div>
                    </div>
                    <div className="p-4 sm:p-6">
                      <h4 className="text-lg sm:text-xl font-bold text-white mb-2 group-hover:text-orange-300 transition-colors duration-300">
                        {project.title}
                      </h4>
                      <p className="text-sm sm:text-base text-gray-400 mb-4 leading-relaxed">
                        {project.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, techIndex) => (
                          <span
                            key={techIndex}
                            className="px-2 py-1 bg-orange-500/10 text-orange-400 text-xs rounded-full border border-orange-500/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
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

export default Project;
