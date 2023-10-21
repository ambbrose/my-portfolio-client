"use client";

import { motion } from "framer-motion";

import { fadeIn, textVariant } from "@/lib/utils";
import Heading from "@/components/ui/heading";
import SectionWrapper from "@/hoc/sectionWrapper";
import { Project } from "@/types";

import Link from "next/link";
import ProjectList from "./project-list";


interface WorkProps {
    projects: Project[];
};

const Work: React.FC<WorkProps> = ({ projects }) => {

    const data = projects.slice(0, 6);

    return (
        <SectionWrapper idName="work">
            {/* <motion.div variants={textVariant(1)}> */}
                <Heading
                    title="Projects"
                    description="My work"
                />
            {/* </motion.div> */}

            <div className="w-full flex">
                <motion.p
                    variants={fadeIn("", "", 0.1, 1)}
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[25px]"
                >
                    The following projects showcases my experience through real world examples of my work. Each project is briefly described with links to code repositories and live demo in it. To see more of my projects click <Link href={'/projects'} className="text-blue-600 underline underline-offset-4">see more</Link> to navigate th the projects page. 
                </motion.p>
            </div>

            <ProjectList data={data} />
        </SectionWrapper>
    );
};

export default Work;