import React from "react";
import { motion } from "framer-motion";
import { Heading, Button, Img } from "../../components";

export default function ProfileIntroductionSection() {
  return (
    <>
      {/* Profile Introduction Section */}
      <div className="flex flex-col items-center">
        <div className="container-xs flex flex-col gap-[34px] md:px-5">
          <div className="flex flex-col items-center gap-[72px] md:gap-[54px] sm:gap-9">
            <motion.div
              className="flex flex-col items-center w-full"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0 }}
            >
              <Heading
                size="headinglg"
                as="h1"
                className="text-[48px] font-bold md:text-[44px] sm:text-[38px]"
              >
                Hi, I’m Arya
              </Heading>
              <motion.div
                className="flex items-center gap-4 justify-center w-full whitespace-nowrap"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1.0, delay: 0.2 }}
              >
                <Heading
                  size="headinglg"
                  as="h2"
                  className="text-[48px] font-bold md:text-[44px] sm:text-[38px]"
                >
                  a
                </Heading>
                <Heading
                  size="headinglg"
                  as="h3"
                  className="bg-gradient bg-clip-text text-[48px] font-bold !text-transparent md:text-[44px] sm:text-[38px]"
                >
                  Data Scientist
                </Heading>
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.0, delay: 0.4 }}
            >
              <Heading
                as="h4"
                className="self-stretch text-center text-[20px] font-semibold leading-[140%]"
              >
                Lorem ipsum dolor sit amet consectetur. Et non morbi lorem
                pellentesque venenatis nunc cras. Dolor blandit amet tincidunt
                vulputate integer penatibus. Neque eget sit bibendum integer.
                Imperdiet cras nisl nam neque lorem sed.
              </Heading>
            </motion.div>
            <motion.div
              className="flex w-[34%] justify-between gap-5 md:w-full"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <Button
                shape="round"
                className="w-[64px] rounded-[12px] px-3"
              >
                <Img
                  src="basil_document-solid.png"
                  width={40}
                  height={40}
                />
              </Button>
              <Button
                shape="round"
                className="w-[64px] rounded-[12px] px-3"
              >
                <Img src="tabler_mail-filled.png" width={40} height={40} />
              </Button>
              <Button
                shape="round"
                className="w-[64px] rounded-[12px] px-3"
              >
                <Img
                  src="lineicons_linkedin.png"
                  width={40}
                  height={40}
                />
              </Button>
              <Button
                shape="round"
                className="w-[64px] rounded-[12px] px-3"
              >
                <Img src="mdi_github.svg" width={40} height={40} />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
