"use client";

import { Github, Info } from "lucide-react";

import SearchForm from "@/components/ui/search-form";
import ProjectList from "@/components/project-list";
import ProjectPageCanvas from "@/components/canvas/project-page-canvas";
import PaginationControls from "@/components/ui/pagination-controls";
import { Project } from "@/types";

interface ProjectsClientProps {
    projects: Project[];
    count: number;
    per_page: number;
    totalPages: number;
    prevPage: number;
    nextPage: number;
    currentPage:  number;
};

const ProjectsClient: React.FC<ProjectsClientProps> = ({
    projects, count, per_page, prevPage, nextPage,totalPages, currentPage
}) => {
    
    return (
        <div>
            <div className="items-center justify-center flex p-10">
                <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-blue-500 font-bold">
                    A Catalog of Endeavors: My Projects
                </h1>
            </div>

            <div className="h-[500px] w-full">
                <ProjectPageCanvas />
            </div>

            <div className="w-full h-auto flex flex-col px-10">
                <p className="flex flex-wrap">
                    Thank you for visiting, this portfolio is a humble showcase of my journey through web development. I have had the privilege of working on a few web projects, each teaching me something valuable. Browse through my collection, and get a glimpse of my experiences, and the projects that have shaped my journey. Each project is a testament to my dedication to quality and my drive to constantly learn and improve.
                </p>

                <h1 className="mt-6 mb-2 text-2xl text-blue-500 font-bold">Project Card Guide</h1>

                <p className="">
                    Each project card has an &nbsp; <Info className="text-blue-600 inline-block" /> &nbsp; icon button, when clicked will open an interactive modal that contains a brief description of the project, the technologies, screenshots of the actual project and other useful informations. Next to that is the &nbsp; <Github className="text-blue-600 inline-block" /> &nbsp; icon Button which will take you to the github repository of that project.
                    <br />
                    The project will also have a <span className="text-blue-500">Live</span> button or a <span className="text-blue-500">Demo</span> button. If the <span className="text-blue-500">Live</span> button is available then the project is already in use by a client and that button will take you to a that website, but the <span className="text-blue-500">Demo</span> button is available it will take you to sample of the project that am running a server.
                </p>
            </div>

            <div className="w-full p-10">
                <SearchForm />
            </div>

            <div className="px-10 pb-10 pt-0">
                <h1 className="mt-5 mb-1 text-2xl text-blue-500 font-bold">Project List</h1>

                <ProjectList data={projects} />

                <div className="h-auto w-full flex items-center justify-center my-10">
                    {totalPages > 1 && <PaginationControls
                        hasPrevPage={currentPage > 1}
                        hasNextPage={currentPage < totalPages}
                        count={count}
                        per_page={per_page}
                        totalPages={totalPages}
                        prevPage={prevPage}
                        nextPage={nextPage}
                    />}
                </div>
            </div>
        </div>
    );
};

export default ProjectsClient;