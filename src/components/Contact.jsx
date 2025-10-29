import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope , faLocationDot} from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

function Contact() {
  return (
    <>
      {/* ===== CONTACT SECTION ===== */}
      <section
        id="contact"
        className="px-[10%] py-14 bg-[#1a1a1a] text-white border-t border-gray-800"
      >
        {/* Title */}
        <h2 className="text-3xl font-bold mb-8 border-l-4 border-[#ed552f] pl-4">
          Contact <span className="text-[#ed552f]">Me</span>
        </h2>

        {/* Contact Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* ===== Left Contact Info ===== */}
          <div>
            <p className="text-lg text-gray-300 mb-4">
              Feel free to <span className="text-[#ed552f]">reach out</span> for
              collaborations, freelance work, or just to connect!
            </p>

            <div className="space-y-4">
              <p className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                <FontAwesomeIcon icon={faEnvelope} className="text-[#ed552f]" />
                vanshitapatil01@gmail.com
              </p>
              <p className="flex items-center gap-3 text-gray-300 hover:text-white transition">
                <FontAwesomeIcon
                  icon={faLocationDot}
                  className="text-[#ed552f]"
                />
                Amravati, Maharashtra
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-5 mt-6">
              <a
                href="https://www.linkedin.com/in/vanshita-gawande-055690246/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-[#ed552f] transition"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
              <a
                href="https://github.com/vanshita-gawande"
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl text-gray-400 hover:text-[#ed552f] transition"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </div>
          </div>

          {/* ===== Right Contact Form ===== */}
          <form
            action="https://formsubmit.co/vanshitapatil01@gmail.com"
            method="POST"
            className="space-y-4"
          >
            {/* FormSubmit Settings */}
            <input type="hidden" name="_captcha" value="false" />
            <input type="hidden" name="_template" value="table" />
            <input
              type="hidden"
              name="_next"
              value="https://vanshita-portfolio-zeta.vercel.app/#contact"
            />

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-[#242424] text-white rounded-md border border-gray-700 focus:border-[#ed552f] outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 bg-[#242424] text-white rounded-md border border-gray-700 focus:border-[#ed552f] outline-none"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              required
              rows="4"
              className="w-full p-3 bg-[#242424] text-white rounded-md border border-gray-700 focus:border-[#ed552f] outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-1/2 mx-auto block bg-[#ed552f] hover:bg-[#ff8a6f] transition text-white font-medium py-3 rounded-md"
            >
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* ===== FOOTER SECTION ===== */}
      <footer className="bg-[#111] text-center py-4 text-gray-400 text-sm border-t border-gray-800">
        © {new Date().getFullYear()} Vanshita Gawande — All Rights Reserved.
      </footer>
    </>
  );
}

export default Contact;
