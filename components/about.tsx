"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/lib/utils";
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
            <motion.div variants={fadeIn('', '', 0.2, 1)}>
                <Heading title="Overview" description="Introduction" />
            </motion.div>

            <motion.p
                variants={fadeIn("", "", 0.4, 1)}
                className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
            >
                I&apos;m a web developer with experience in Typescript and Javascript and expertise in <br />
                Frameworks like React.js, Next.js. I&apos;m a quick learner and collaborate closely with <br />
                clients to create efficient, scalable and user friendly solutions that solve <br />
                real world problems. Lets work together to bring your idea to life.
            </motion.p>
            
            <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 text-white">
                {services?.map((service, index) => (
                    <ServiceCard key={service.title} index={index} {...service} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default About