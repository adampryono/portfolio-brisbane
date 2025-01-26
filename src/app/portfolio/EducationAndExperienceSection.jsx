import { Heading } from "../../components/Heading";
import EducationDetails from "../../components/EducationDetails";
import UserProfileDetails from "../../components/UserProfileDetails";
import React, { Suspense } from "react";

const workExperienceList = [
    {
        companyName: "Nama perusahaannya",
        jobDescription: (
            <>
                jobdesc
                <br />
                kerjanya
                <br />
                ngapain
                <br />
                aja
            </>
        ),
        employmentPeriod: "2020 - 2024",
    },
    {
        companyName: "Nama perusahaannya",
        jobDescription: (
            <>
                jobdesc
                <br />
                kerjanya
                <br />
                ngapain
                <br />
                aja
            </>
        ),
        employmentPeriod: "2020 - 2024",
    },
    {
        companyName: "Nama perusahaannya",
        jobDescription: (
            <>
                jobdesc
                <br />
                kerjanya
                <br />
                ngapain
                <br />
                aja
            </>
        ),
        employmentPeriod: "2020 - 2024",
    },
];

export default function EducationAndExperienceSection() {
    return (
        /* education and experience section */
        <div className="flex flex-col items-center">
            <div className="container-xs flex flex-col items-center gap-[10px] md:px-5">
                <div className="flex flex-col items-center gap-[72px] md:gap-[54px] sm:gap-9">
                    <Heading size="headings" as="h4" className="text-[24px] font-bold !text-white-a700_99 md:text-[22px]">
                        education & experience
                    </Heading>
                </div>
                <div className="flex flex-wrap justify-center gap-2 self-stretch mb-10"> {/* Tambahkan margin-bottom */}
                    <Heading size="headinglg" as="h1" className="text-[48px] font-bold md:text-[44px] sm:text-[38px]">
                        Dive Into My
                    </Heading>
                    <Heading
                        size="headinglg"
                        as="h1"
                        className="bg-gradient bg-clip-text text-[48px] font-bold !text-transparent md:text-[44px] sm:text-[38px]"
                    >
                        Journey
                    </Heading>
                </div>
                <div className="flex flex-col gap-8 self-stretch"> {/* Tambahkan gap lebih besar */}
                    <div className="flex gap-5 md:flex-col">
                        <EducationDetails />
                        <EducationDetails
                            universityName="Universitas Indonesia"
                            degreeName="Bachelor in Computer Science"
                            studyPeriod="2020 - 2024"
                            className="gap-6"
                        />
                    </div>
                    <div className="flex flex-col gap-5">
                        <Suspense fallback={<div>Loading feed...</div>}>
                            {workExperienceList.map((d, index) => (
                                <UserProfileDetails {...d} key={"listnama" + index} />
                            ))}
                        </Suspense>
                    </div>
                </div>
            </div>
        </div>
    );
}
