"use client";
import { Button, Img, ChipView, Heading } from "./..";
import React from "react";

export default function ProjectDetails({
  mainHeading = "Player Passing and Decision Making Analysis",
  subHeading = "An analysis on decision making using the xG (expected)",
  descriptionText = `&#9;Using event data, created different pass types and found the xG for each pass type.&#10;Used this to analyze individual players&#39; decision making skills.`,
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
      className={`{props.className} flex md:flex-col items-center self-stretch gap-6 p-7 sm:p-5 flex-1 rounded-[20px] container-xs`}
    >
      <div className="w-[30%] rounded-[12px] bg-gray_900_01">
        <img
          src="img_image_16_314x274.png"
          width={274}
          height={314}
          alt=""
          className="h-[314px] w-full rounded-[12px] object-cover sm:h-auto"
        />
      </div>
      <div className="flex flex-1 flex-col gap-10 md:self-stretch sm:gap-10">
        <div className="flex flex-col items-start gap-2 sm:gap-2">
          <Heading
            size="headingmd"
            as="h2"
            className="w-full text-[32px] font-bold leading-[40px] sm:w-full sm:text-[27px]"
          >
            {mainHeading}
          </Heading>
          <Heading
            as="h5"
            className="text-[20px] font-semibold text-white-a700_99 sm:text-[17px]"
          >
            {subHeading}
          </Heading>
          <Heading
            as="h5"
            className="w-full text-[20px] font-semibold leading-[140%] text-white-a700_99 sm:w-full sm:text-[17px]"
          >
            {descriptionText}
          </Heading>
        </div>
        <div className="flex items-center justify-center">
          <ChipView
            options={chipOptions2}
            setOptions={setChipOptions2}
            values={selectedChipOptions2}
            setValues={setSelectedChipOptions2}
            className="flex flex-1 flex-wrap gap-4"
          >
            {(option) => (
              <React.Fragment key={option.index}>
                {option.isSelected ? (
                  <div
                    onClick={option.toggle}
                    className="flex h-[52px] cursor pointer flex-row items-center whitespace-pre-wrap rounded-[12px] border border-solid border-white-a700_99 bg-black-900_33 px-5 text-[20px] font-bold text-primary_colors-white_1"
                  >
                    <span>{option.label}</span>
                  </div>
                ) : (
                  <div
                    onClick={option.toggle}
                    className="flex h-[52px] cursor-pointer flex-row items-center rounded-[12px] bg-black-900_33 px5 text-[20px] font-bold text-primary_colors-white_1"
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
            color="linear_1_indigo_900"
            className="w-[56px] rounded-[12px] px-3"
          >
            <Img src="img_mdi_github.svg" width={32} height={32} />
          </Button>
        </div>
      </div>
    </div>
  );
}
