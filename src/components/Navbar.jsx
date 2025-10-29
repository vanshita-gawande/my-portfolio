import { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";
import {
  TbHome,
  TbUser,
  TbBolt,
  TbLayoutGrid,
  TbMessage,
  TbBook,
  TbBriefcase,
} from "react-icons/tb";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "home", icon: <TbHome size={15} /> },
    { name: "about", icon: <TbUser size={15} /> },
    { name: "skills", icon: <TbBolt size={15} /> },
    { name: "education", icon: <TbBook size={15} /> }, // ✅ Added
    { name: "experience", icon: <TbBriefcase size={15} /> }, // ✅ Added
    { name: "projects", icon: <TbLayoutGrid size={15} /> },
    { name: "contact", icon: <TbMessage size={15} /> },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#1b1b1bd9] backdrop-blur-md text-white shadow-[0_4px_10px_rgba(0,0,0,0.4)] z-50 px-12 py-4 flex items-center justify-start border-b border-white/10">
      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-10 font-semibold tracking-wide ml-16">
        {navItems.map((item) => (
          <li
            key={item.name}
            className="flex items-center gap-2 hover:scale-105 transition"
          >
            <span className="text-[#ff7e5f]">{item.icon}</span>
            <Link
              to={`#${item.name}`}
              smooth
              className="text-white text-[17px] capitalize transition-all duration-300 hover:text-[#ff7e5f] hover:tracking-[1px] hover:border-b-2 border-[#ff7e5f]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile Menu Toggle */}
      <div
        className="md:hidden ml-auto flex flex-col gap-1.5 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={`block h-[3px] w-7 bg-gray-300 transition ${
            isOpen ? "rotate-45 translate-y-[6px]" : ""
          }`}
        />
        <span
          className={`block h-[3px] w-7 bg-gray-300 transition ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block h-[3px] w-7 bg-gray-300 transition ${
            isOpen ? "-rotate-45 -translate-y-[6px]" : ""
          }`}
        />
      </div>

      {/* Mobile Dropdown Menu */}
      <ul
        className={`absolute top-[70px] right-8 bg-[#232323] backdrop-blur-lg border border-white/10 rounded-lg p-5 flex flex-col gap-4 shadow-lg transition-all duration-300 md:hidden ${
          isOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        {navItems.map((item) => (
          <li key={item.name} className="flex items-center gap-2">
            <span className="text-[#ff7e5f]">{item.icon}</span>
            <Link
              to={`#${item.name}`}
              smooth
              onClick={() => setIsOpen(false)}
              className="text-white text-[17px] capitalize transition duration-300 hover:text-[#ff7e5f]"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
