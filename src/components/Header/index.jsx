"use client";

import { Heading, Img } from "./..";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { useMediaQuery } from "react-responsive";

export default function Header({ ...props }) {
  const [isMenuOpen, setMenuOpen] = useState(false);
  const isMobileOrTablet = useMediaQuery({ maxWidth: 1024 });

  const scrollToSection = (id) => {
    const section = document.querySelector(id);
    if (section) {
      const offset = 80;
      const top = section.getBoundingClientRect().top + window.pageYOffset - offset;

      window.scrollTo({
        top,
        behavior: "smooth",
      });

      setMenuOpen(false);
    }
  };

  return (
    <header
      {...props}
      className={`${props.className} flex justify-between items-center px-10 py-5 mx-28 rounded-[40px] mt-5`}
      style={{ backgroundColor: "rgba(108, 108, 108, 0.3)" }}
    >
      <Img
        src="img_header_logo.png"
        width={152}
        height={80}
        alt="headerlogo"
        className="h-[80px] w-[152px] object-contain"
      />

      {isMobileOrTablet ? (
        <div className="relative">
          {/* Tombol Hamburger */}
          <motion.button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
            initial={{ rotate: 0 }}
            animate={{ rotate: isMenuOpen ? 90 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <Img
              src={isMenuOpen ? "close-icon.svg" : "hamburger_icon.svg"}
              alt={isMenuOpen ? "Close Menu" : "Open Menu"}
              width={24}
              height={24}
              className="h-6 w-6"
            />
          </motion.button>

          {/* Menu Dropdown */}
          {isMenuOpen && (
            <motion.div
              className="absolute right-0 top-12 w-48 bg-gray-700 text-white p-5 rounded-lg shadow-xl"
              
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {[
                { label: "About", href: "#about" },
                { label: "Experience", href: "#educationandexperience" },
                { label: "Projects", href: "#projects" },
                { label: "Education", href: "#educationandexperience" },
                { label: "Contact", href: "#contact" },
                { label: "Resume", href: "#resume" },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mb-4 last:mb-0"
                >
                  <button
                    onClick={() => scrollToSection(item.href)}
                    className="text-left focus:outline-none w-full"
                  >
                    <Heading
                      size="body_b2"
                      as="h6"
                      className="!font-inter text-[16px] font-bold text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      {item.label}
                    </Heading>
                  </button>
                </motion.div>
              ))}
            </motion.div>
          )}
        </div>
      ) : (
        <motion.ul
          className="flex gap-12 items-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {[
            { label: "About", href: "#about" },
            { label: "Experience", href: "#educationandexperience" },
            { label: "Projects", href: "#projects" },
            { label: "Education", href: "#educationandexperience" },
            { label: "Contact", href: "#contact" },
            { label: "Resume", href: "#resume" },
          ].map((item, index) => (
            <motion.li
              key={index}
              whileHover={{ scale: 1.1, opacity: 1 }}
              whileTap={{ scale: 0.95 }}
            >
              <button
                onClick={() => scrollToSection(item.href)}
                className="focus:outline-none"
              >
                <Heading
                  size="body_b2"
                  as="h6"
                  className="!font-inter text-[16px] font-bold text-white opacity-50 hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                >
                  {item.label}
                </Heading>
              </button>
            </motion.li>
          ))}
        </motion.ul>
      )}
    </header>
  );
}
