import React from "react";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  return (
    <section id="education" className="px-[10%] py-16 bg-[#1f1f1f] text-white">
      <h2 className="text-3xl font-bold mb-10 border-l-4 pl-3 border-[#ed552f]">
        Education
      </h2>

      <div className="space-y-6">
        {[
          {
            degree: "B.E. in Computer Engineering",
            college: "Sant Gadge Baba Amravati University",
            year: "2021 – 2025",
            grade: "CGPA: 8.91",
          },
          {
            degree: "Higher Secondary Education (HSC)",
            college: "Govt. Vidarbha Institute, Amravati",
            year: "2019 – 2021",
            grade: "Percentage: 84.20%",
          },
          {
            degree: "Secondary School Certificate (SSC)",
            college: "Elegant I.F. English School",
            year: "2019",
            grade: "Percentage: 89.40%",
          },
        ].map((edu, index) => (
          <div
            key={index}
            className="bg-[#252525] p-5 rounded-lg border border-gray-700 hover:border-[#ed552f] transition duration-300"
          >
            <h3 className="text-xl font-semibold flex items-center gap-2">
              <FaGraduationCap className="text-[#ed552f]" /> {edu.degree}
            </h3>
            <p className="text-sm text-gray-400">{edu.college}</p>
            <p className="text-gray-300">{edu.year}</p>
            <p className="text-[#ed552f] mt-1 font-medium">{edu.grade}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;
