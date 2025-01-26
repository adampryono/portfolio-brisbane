"use client";

import Footer from "../../components/Footer";
import Header from "../../components/Header";
import AboutSection from "./AboutSection";
import EducationAndExperienceSection from "./EducationAndExperienceSection";
import ProfileIntroductionSection from "./ProfileIntroductionSection";
import ProjectsSection from "./ProjectsSection";
import React from "react";

export default function Home() {
  return (
    <div className="flex w-full flex-col gap-[72px] bg-black-900 md:gap-[54px] sm:gap-9">
      <Header />
      <div className="flex flex-col gap-36 md:gap-[108px] sm:gap-[72px]">
        {/* Profile Introduction Section */}
        <section id="profile">
          <ProfileIntroductionSection />
        </section>

        {/* About Section */}
        <section id="about">
          <AboutSection />
        </section>

        {/* Education and Experience Section */}
        <section id="educationandexperience">
          <EducationAndExperienceSection />
        </section>

        {/* Projects Section */}
        <section id="projects">
          <ProjectsSection />
        </section>
      </div>
      <Footer />
    </div>
  );
}
