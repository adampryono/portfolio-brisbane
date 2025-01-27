"use client";
import { Button, Img, ChipView, Heading } from "./..";
import React from "react";

export default function ProjectDetails({
  mainHeading = "Player Passing and Decision Making Analysis",
  subHeading = "An analysis on decision making using the xG (expected)",
  descriptionText = `\tUsing event data, created different pass types and found the xG for each pass type.\nUsed this to analyze individual players' decision making skills.`,
  ...props
}) {
  const [chipOptions2, setChipOptions2] = React.useState(() => [
    { value: 1, label: "Python" },
    { value: 2, label: "Numpy" },
    { value: 3, label: "Pandas" },
  ]);

  const [selectedChipOptions2, setSelectedChipOptions2] = React.useState([]);

  return (
    <div
      {...props}
      className={`{props.className} flex md:flex-col sm:flex-col items-center self-stretch gap-6 p-7 sm:p-4 flex-1 rounded-[20px] bg-[#1B1F24]`}
    >
      <div className="w-[30%] rounded-[12px] bg-[#1B1F24] md:w-full sm:w-full">
        <Img
          src="img_image_16_314x274.png"
          width={274}
          height={314}
          alt=""
          className="h-[314px] w-full rounded-[12px] object-cover md:h-auto sm:h-auto"
        />
      </div>
      <div className="flex flex-1 flex-col gap-10 md:self-stretch sm:self-stretch sm:gap-6 md:items-center sm:items-center">
        <div className="flex flex-col items-start gap-2 sm:gap-1 md:items-center sm:items-center">
          <Heading
            size="headingmd"
            as="h2"
            className="w-full text-[32px] font-bold leading-[40px] sm:text-[24px] sm:leading-[30px] md:text-center sm:text-center"
          >
            {mainHeading}
          </Heading>
          <Heading
            as="h5"
            className="text-[20px] font-semibold text-white-a700_99 sm:text-[16px] md:text-center sm:text-center"
          >
            {subHeading}
          </Heading>
          <Heading
            as="h5"
            className="w-full text-[20px] font-semibold leading-[140%] text-white-a700_99 sm:text-[15px] md:text-center sm:text-center"
          >
            {descriptionText}
          </Heading>
        </div>
        <div className="flex items-center justify-center flex-wrap gap-4">
          <ChipView
            options={chipOptions2}
            setOptions={setChipOptions2}
            values={selectedChipOptions2}
            setValues={setSelectedChipOptions2}
            className="flex flex-1 flex-wrap gap-4 sm:gap-3"
          >
            {(option) => (
              <React.Fragment key={option.index}>
                {option.isSelected ? (
                  <div
                    onClick={option.toggle}
                    className="flex h-[52px] cursor-pointer flex-row items-center whitespace-pre-wrap rounded-[12px] border border-solid border-white-a700_99 bg-[rgba(0,0,0,0.2)] px-5 text-[20px] font-bold text-primary_colors-white_1 sm:h-[42px] sm:text-[16px]"
                  >
                    <span>{option.label}</span>
                  </div>
                ) : (
                  <div
                    onClick={option.toggle}
                    className="flex h-[52px] cursor-pointer flex-row items-center rounded-[12px] bg-[rgba(0,0,0,0.2)] px-5 text-[20px] font-bold text-primary_colors-white_1 sm:h-[42px] sm:text-[16px]"
                  >
                    <span>{option.label}</span>
                  </div>
                )}
              </React.Fragment>
            )}
          </ChipView>
          <Button
            size="sm"
            variants="gradient"
            shape="round"
            className="flex items-center justify-center gap-2 rounded-[12px] px-4 py-2 sm:px-2 sm:py-1 md:w-full sm:w-full"
            style={{
              background:
                "linear-gradient(90deg, #62BDAE 0%, #45BBBD 30%, #3BA2C3 44%, #2B2B67 100%)",
              border: "none",
            }}
          >
            <Img
              src="mdi_github.svg"
              width={24}
              height={24}
              className="sm:w-[20px] sm:h-[20px]"
            />
            <span className="hidden sm:inline md:inline text-[16px] font-bold sm:text-[14px] text-primary_colors-white_1">View Details</span>
          </Button>
        </div>
      </div>
    </div>
  );
}
