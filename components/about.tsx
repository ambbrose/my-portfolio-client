"use client";

import SectionWrapper from "@/hoc/sectionWrapper";
import ServiceCard from "./service-card";
import { Service } from "@/types";
import Heading from "./ui/heading";

interface AboutProps {
    services: Service[]
};

const About: React.FC<AboutProps> = ({ services }) => {
    return (
        <SectionWrapper idName="about">
            <div>
                <Heading title="Overview" description="Introduction" />
            </div>

            <p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]">
                I&apos;m a web developer with experience in Typescript and Javascript and expertise in <br />
                Frameworks like React.js, Next.js. I&apos;m a quick learner and collaborate closely with <br />
                clients to create efficient, scalable and user friendly solutions that solve <br />
                real world problems. Lets work together to bring your idea to life.
            </p>

            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-white">
                {services?.map((service) => (
                    <ServiceCard key={service.title} {...service} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default About