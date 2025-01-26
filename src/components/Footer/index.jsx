import { Img, Heading } from "./..";
import React from "react";

export default function Footer({ ...props }) {
    return (
        <footer
            {...props}
            className={`${props.className} flex justify-center items-center py-8 sm:py-5 bg-gray-600_4c`}
            style={{ backgroundColor: "rgba(108, 108, 108, 0.3)" }}
        >
            <div className="container-xs flex items-center justify-between gap-5 px-12 md:flex-col md:px-5">
                <Img
                    src="img_footer_logo.png"
                    width={152}
                    height={50}
                    alt="Footerlogo"
                    className="h-[80px] w-[152px] object-contain"
                />
                <div className="flex w-[60%] items-start justify-between gap-5 md:w-full sm:flex-col sm:items-center">
                    <div className="flex w-[42%] flex-col items-start justify-center gap-2 self-center sm:items-center">
                        <Heading
                            size="headings"
                            as="h4"
                            className="bg-gradient bg-clip-text !font-inter text-[24px] font-bold !text-transparent md:text-[22px] sm:text-center"
                        >
                            CONTACT ME
                        </Heading>
                        <div className="flex flex-col items-start justify-center gap-2 self-stretch sm:items-center">
                            <Heading
                                as="h5"
                                className="!font-inter text-[20px] font-semibold sm:text-center"
                                style={{
                                    color: "rgba(255, 255, 255, 0.5)", // White color with 50% opacity
                                }}
                            >
                                akowkcakwo@gmail.com
                            </Heading>
                            <div className="flex sm:justify-center">
                                <Heading
                                    size="textxs"
                                    as="p"
                                    className="!font-inter text-[20px] font-medium sm:text-center"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.5)", // White color with 50% opacity
                                    }}
                                >
                                    +62 8888888888
                                </Heading>
                            </div>
                            <div className="flex sm:justify-center">
                                <Heading
                                    as="h5"
                                    className="self-end !font-inter text-[20px] font-semibold sm:text-center"
                                    style={{
                                        color: "rgba(255, 255, 255, 0.5)", // White color with 50% opacity
                                    }}
                                >
                                    Bogor, Indonesia
                                </Heading>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-start justify-center gap-3 sm:items-center sm:mt-5">
                        <Heading
                            size="headings"
                            as="h4"
                            className="bg-gradient bg-clip-text !font-inter text-[24px] font-bold !text-transparent md:text-[22px] sm:text-center"
                        >
                            FOLLOW ME
                        </Heading>
                        <div className="flex gap-5 sm:justify-center">
                            <Img
                                src="mdi_github.svg"
                                width={32}
                                height={32}
                                alt="mdiGithub"
                                className="h-[32px]"
                            />
                            <Img
                                src="mdi_instagram.svg"
                                width={32}
                                height={32}
                                alt="mdiInstagram"
                                className="h-[32px]"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
