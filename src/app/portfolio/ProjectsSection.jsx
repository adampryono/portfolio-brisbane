import { Heading } from "../../components";
import ProjectDetails from "../../components/ProjectDetails";
import React from "react";

export default function ProjectsSection() {
  return (
    /* projects analytics section */
    <div className="flex flex-col items-center">
      <div className="container-xs flex flex-col gap-[72px] md:gap-[54px] md:px-5 sm:gap-9">
        <div className="mx-[26px] flex flex-col items-center md:mx-0">
          <Heading
            size="headings"
            as="h4"
            className="text-[24px] font-bold !text-white-a700_99 md:text-[22px]"
          >
            Projects
          </Heading>
          <div className="flex flex-wrap justify-center gap-3 self-stretch">
            <Heading
              size="headings"
              as="h1"
              className="text-[48px] font-bold md:text-[44px] sm:text-[30px] sm:text-center"
            >
              Discover My
            </Heading>
            <Heading
              size="headings"
              as="h1"
              className="bg-gradient bg-clip-text text-[48px] font-bold text-transparent md:text-[44px] sm:text-[30px] sm:text-center"
            >
              Analytics
            </Heading>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <ProjectDetails className="bg-gray-900" />
          <ProjectDetails
            mainHeading="Player Passing and Decision Making Analysis"
            subHeading="An analysis on decision making vs the xG (expected)"
            descriptionText={
              <>
                Using event data, created different pass types and found the xG for each pass type.
                <br />
                Used this to analyze individual players' decision making skills.
              </>
            }
            className="bg-gray-900"
          />
        </div>
      </div>
    </div>
  );
}
