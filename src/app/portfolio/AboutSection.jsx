import React from "react";
import { motion } from "framer-motion";
import { Heading, Img, Button } from "../../components";

export default function AboutSection() {
  return (
    <>
      {/* About Section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[34px] md:px-5">
          <div className="flex flex-col items-center gap-[72px] md:gap-[54px] sm:gap-9">
            <motion.div
              className="flex flex-col items-center w-full"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Heading
                size="headings"
                as="h5"
                className="text-[24px] font-bold !text-white-a700_99 md:text-[22px]"
              >
                about
              </Heading>
              <div className="flex flex-wrap gap-3">
                <Heading
                  size="headinglg"
                  as="h6"
                  className="text-[48px] font-bold md:text-[44px] sm:text-[23px]"
                >
                  Know More About
                </Heading>
                <Heading
                  size="headinglg"
                  as="h1"
                  className="bg-gradient bg-clip-text text-[48px] font-bold !text-transparent md:text-[44px] sm:text-[23px]"
                >
                  Arya
                </Heading>
              </div>
            </motion.div>
            <motion.div
              className="flex gap-[38px] md:flex-col"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="w-[28%] rounded-[12px] bg-gray-900_01 md:w-full">
                <Img
                  src="img_image_16.png"
                  width={274}
                  height={304}
                  alt="Imagesixteen"
                  className="h-[304px] w-full rounded-[12px] object-cover md:h-auto"
                />
              </div>
              <div className="flex flex-1 flex-col items-start gap-7 md:self-stretch">
                <Heading
                  as="h5"
                  className="w-full text-[20px] font-semibold leading-[140%]"
                >
                  I am a junior at Rice University pursuing two bachelor's
                  degrees, in computer science and statistics, with a minor
                  in data science. I love to work with data and find new
                  solutions to any problem. I am experienced in SQL,
                  python, java, javascript, R, C, and Go, along with the
                  GUI tools of streamlit (python) and Retool.
                  <br />
                  <br />
                  Looking for an opportunity to develop new ways to
                  understand data and find solutions to modern day
                  problems!
                </Heading>
                <Button
                  size="xs"
                  variant="gradient"
                  shape="round"
                  className="min-w-[150px] gap-3 rounded-[12px] px-5 font-bold"
                  style={{
                    background:
                      "linear-gradient(90deg, #62BDAE 0%, #45BBBD 30%, #3BA2C3 44%, #2B2B67 100%)",
                    color: "#FFFFFF",
                  }}
                  rightIcon={
                    <Img
                      src="img_arrowleft.svg"
                      width={20}
                      height={20}
                      alt="Arrow Left"
                      className="my-1 h-[20px] w-[20px] object-contain"
                    />
                  }
                >
                  Resume
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
