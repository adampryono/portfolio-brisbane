import { Heading } from "./..";
import React from "react";

export default function UserProfileDetails({
  companyName = "Nama perusahaannya",
  jobDescription = "&lt;&gt;jobdesc&lt;br /&gt;kerjanya&lt;br /&gt;ngapain&lt;br /&gt;aja&lt;/&gt;",
  employmentPeriod = "2020 - 2024",
  ...props
}) {
  return (
    <div
      {...props}
      className={`${props.className} flex md:flex-col justify-center items-start self-stretch p-7 sm:p-5`}
      style={{
        backgroundColor: "#1B1F24",
        borderRadius: "20px",
      }}
    >
      <div className="flex flex-1 flex-col items-start self-center md:self-stretch">
        <Heading as="h5" className="text-[20px] font-bold sm:text-[17px]">
          {companyName}
        </Heading>
        <Heading
          as="h5"
          className="text-[20px] font-semibold leading-[140%] !text-white_a700_99 sm:text-[17px]"
          style={{
            opacity: 0.6, // Set opacity to 60%
          }}
        >
          {jobDescription}
        </Heading>
      </div>
      <Heading as="h5" className="text-[20px] font-bold sm:text-[17px]">
        {employmentPeriod}
      </Heading>
    </div>
  );
}
