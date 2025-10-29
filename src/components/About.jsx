import React from "react";
import { FaCode, FaRocket, FaBolt, FaPuzzlePiece } from "react-icons/fa";

function About() {
  return (
    <section
      id="about"
      className="relative px-[10%] py-20 bg-[#1a1a1a] text-white overflow-hidden"
    >
      {/* Background Glow Decoration */}
      <div className="absolute top-0 right-0 w-[350px] h-[350px] bg-[#ff7e5f1c] rounded-full blur-[180px]"></div>
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-[#feb47b1f] rounded-full blur-[180px]"></div>

      {/* Title */}
      <h2 className="text-3xl font-bold mb-6 border-l-4 border-[#ed552f] pl-4 relative z-10">
        About <span className="text-[#ed552f]">Me</span>
      </h2>

      {/* Content Area */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-14 relative z-10">
        {/* Left Description */}
        <div className="max-w-[600px]">
          <p className="text-lg leading-relaxed text-gray-300 mb-4">
            I'm a passionate{" "}
            <span className="text-[#ed552f] font-semibold">
              Full-Stack Developer
            </span>{" "}
            who builds responsive, scalable web applications. I specialize in
            the <span className="text-[#ed552f] font-semibold">MERN stack</span>{" "}
            and also have strong knowledge of{" "}
            <span className="text-[#ed552f] font-semibold">
              Java, Python, and SQL
            </span>
            .
          </p>
          <p className="text-lg leading-relaxed text-gray-300 mb-4">
            I’ve also explored{" "}
            <span className="text-[#ed552f] font-semibold">
              smart contracts & blockchain
            </span>{" "}
            to build secure, modern decentralized solutions.
          </p>

          <p className="text-lg leading-relaxed text-gray-300">
            I love solving real-world problems through code and continuously
            improving my development skills.
          </p>
        </div>

        {/* Card Highlights */}
        <div className="grid grid-cols-2 sm:grid-cols-2 gap-5 w-full lg:w-[40%] mx-auto lg:mx-0">
          {[
            {
              icon: <FaCode />,
              title: "Projects",
              desc: "Built & Deployed",
            },
            {
              icon: <FaRocket />,
              title: "Internships",
              desc: "Industry Experience",
            },
            {
              icon: <FaBolt />,
              title: "Tech Stack",
              desc: "MERN | Java | Python | SQL",
            },
            {
              icon: <FaPuzzlePiece />,
              title: "Problem Solver",
              desc: "Logic & Clean Code",
            },
          ].map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-5 bg-[#242424] rounded-xl border border-gray-700 shadow-md hover:shadow-lg hover:-translate-y-1 transition duration-300"
            >
              <div className="text-[#ed552f] text-2xl mb-2">{item.icon}</div>
              <h4 className="text-lg font-semibold text-white">{item.title}</h4>
              <p className="text-sm text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
