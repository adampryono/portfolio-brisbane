import { Heading } from "./..";
import React from "react";

export default function EducationDetails({
  universityName = "Universitas Indonesia",
  degreeName = "Bachelor in Computer Science",
  studyPeriod = "2020 - 2024",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${
        props.className
      } flex sm:flex-col justify-center items-center w-[50%] md:w-full p-7 sm:p-5 rounded-[20px]`}
      style={{
        backgroundColor: "#1B1F24",
        borderRadius: "20px",
      }}
    >
      <div className="flex flex-1 flex-col items-start sm:self-stretch">
        <Heading
          size="headings5"
          as="h5"
          className="text-[20px] font-bold !text-primary_colors-white_1"
        >
          {universityName}
        </Heading>
        <Heading
          size="headings5"
          as="h5"
          className="text-[20px] font-semibold !text-white_a700_99"
          style={{
            opacity: 0.6, // Set opacity to 60%
          }}
        >
          {degreeName}
        </Heading>
      </div>
      <Heading
        size="headings5"
        as="h5"
        className="text-[20px] self-end font-bold !text-primary_colors-white_1"
      >
        {studyPeriod}
      </Heading>
    </div>
  );
}
