import React from "react";
import { FaArrowDown } from "react-icons/fa";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

function Home() {
  return (
    <section
      id="home"
      className="relative flex justify-center items-center min-h-[90vh] px-[10%] py-12 bg-gradient-to-br from-[#0f0f0f] via-[#1a1a1a] to-[#0f0f0f] text-white overflow-hidden"
    >
      {/* Background Glow Effects Fixed */}
      <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-[#ff7e5f20] rounded-full blur-[180px]"></div>
      <div className="absolute top-40 left-[35%] w-[250px] h-[250px] bg-[#feb47b20] rounded-full blur-[160px]"></div>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1200px] w-full relative z-10">
        {/* Left Text Section */}
        <motion.div
          className="max-w-[100%] md:max-w-[55%] text-center md:text-left"
          initial={{ opacity: 0, x: -60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-[#ff7e5f] to-[#feb47b] bg-clip-text text-transparent">
              Vanshita Gawande
            </span>
          </h1>
          <h2 className="text-xl md:text-2xl font-medium text-gray-300">
            Full-Stack | MERN Developer | Blockchain Enthusiast
          </h2>
          {/* Buttons */}
          <div className="flex flex-col sm:flex-row sm:justify-start justify-center items-center gap-4 mt-6">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-transparent border border-[#ed552f] text-[#ff7e5f] font-medium rounded-md hover:bg-[#ff7e5f] hover:text-white transition duration-300"
            >
              View My Work <FaArrowDown className="text-sm" />
            </a>
            <a
              href="/resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f44c22] text-white font-medium rounded-md hover:bg-[#ff916f] transition duration-300"
            >
              <FontAwesomeIcon icon={faDownload} className="text-sm" />
              Resume
            </a>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="flex justify-center items-center md:max-w-[40%] mt-10 md:mt-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative w-[380px] h-[430px] rounded-2xl overflow-hidden shadow-lg border border-[#ffffff1a] bg-[#2a2a2a33] backdrop-blur-md hover:scale-[1.02] transition duration-300">
            <img
              src="/images/Profile.jpg"
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Home;
