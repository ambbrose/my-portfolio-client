"use client";

import { Project } from "@/types";
import ProjectCard from "@/components/project-card";
import NoResult from "@/components/ui/no-result";

interface ProjectListProps {
    data: Project[];
    
};

const ProjectList: React.FC<ProjectListProps> = ({ data }) => {

    return (
        <>
            {data.length < 1 && <NoResult />}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-4 gap-y-10 mt-5">
                {data.map((project, index) => (
                    <ProjectCard
                        key={`project-${project.id}`}
                        project={project}
                        index={index}
                    />
                ))}
            </div>
        </>
    );
};

export default ProjectList;