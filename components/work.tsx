"use client";

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

            <Heading
                title="Projects"
                description="My work"
            />

            <div className="w-full flex">
                <p
                    className="mt-3 text-secondary text-[17px] max-w-3xl leading-[25px]"
                >
                    The following projects showcases my experience through real world examples of my work. Each project is briefly described with links to code repositories and live demo in it. To see more of my projects click <Link href={'/projects'} className="text-blue-600 underline underline-offset-4">see more</Link> to navigate th the projects page.
                </p>
            </div>

            <ProjectList data={data} />
        </SectionWrapper>
    );
};

export default Work;