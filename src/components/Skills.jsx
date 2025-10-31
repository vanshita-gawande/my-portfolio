import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaJsSquare,
  FaHtml5,
  FaCss3,
  FaPython,
  FaJava,
  FaGitAlt,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiMysql,
  SiBlockchaindotcom,
  SiRedux,
  SiExpress,
  SiFirebase,
  SiTailwindcss,
} from "react-icons/si";

const Skills = () => {
const skills = [
  { name: "React", icon: <FaReact />, color: "#61DBFB" },
  { name: "Node.js", icon: <FaNodeJs />, color: "#3C873A" },
  { name: "Express.js", icon: <SiExpress />, color: "#FFFFFF" },
  { name: "MongoDB", icon: <SiMongodb />, color: "#4DB33D" },
  { name: "MySQL", icon: <SiMysql />, color: "#00618A" },
  { name: "SQL", icon: <FaDatabase />, color: "#336791" }, // ✅ Correct for SQL
  { name: "JavaScript", icon: <FaJsSquare />, color: "#F7DF1E" },
  { name: "Python", icon: <FaPython />, color: "#3776AB" },
  { name: "Java", icon: <FaJava />, color: "#f89820" },
  { name: "Redux", icon: <SiRedux />, color: "#764ABC" },
  { name: "Git", icon: <FaGitAlt />, color: "#F1502F" },
  { name: "Firebase", icon: <SiFirebase />, color: "#FFCB2B" },
  { name: "Blockchain", icon: <SiBlockchaindotcom />, color: "#FF7E5F" },
  { name: "REST API", icon: <FaNodeJs />, color: "#00B894" },
  { name: "Tailwind CSS", icon: <SiTailwindcss />, color: "#38BDF8" },
  { name: "HTML", icon: <FaHtml5 />, color: "#E44D26" },
  { name: "CSS", icon: <FaCss3 />, color: "#1572B6" },
];
  return (
    <section id="skills" className="px-[10%] py-16 bg-[#1a1a1a] text-white">
      <h2 className="text-3xl font-bold mb-10 border-l-4 border-[#ed552f] pl-4">
        My <span className="text-[#ed552f]">Skills</span>
      </h2>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-7 gap-6">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center gap-2 animate-float hover:scale-110 transition duration-300"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <span style={{ color: skill.color }} className="text-4xl">
              {skill.icon}
            </span>
            <p className="text-sm text-gray-300">{skill.name}</p>
          </div>
        ))}
      </div>

      {/* Floating Animation Style */}
      <style>
        {`
          @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-8px); }
            100% { transform: translateY(0px); }
          }
          .animate-float {
            animation: float 3s ease-in-out infinite;
          }
        `}
      </style>
    </section>
  );
};

export default Skills;
