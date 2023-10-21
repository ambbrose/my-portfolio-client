import getProjects from "@/actions/get-projects";
import ProjectsClient from "@/components/ui/projects-client";

const ProjectsPage = async (
    { searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }
) => {

    const PER_PAGE = 6;
    const take = PER_PAGE || 6;
    const currentPage = Math.max(Number(searchParams['page'] || 1), 1);
    const skip = (currentPage - 1) * PER_PAGE;

    const [projectCount, projects] = await Promise.all([
        getProjects({ active: true, skip: 0 }),
        getProjects({ active: true, take: take, skip: skip })
    ])

    const totalPages = Math.ceil(projectCount.length / PER_PAGE);
    const prevPage = Math.max(currentPage - 1, 0);
    const nextPage = Math.min(currentPage + 1, totalPages);
    
    return (
        <div className="h-full w-full sm:py-16 max-w-7xl mx-auto mt-10 sm:mt-0 relative">
            <ProjectsClient 
                projects={projects}
                totalPages={totalPages}
                prevPage={prevPage}
                nextPage={nextPage}
                per_page={PER_PAGE}
                count={projectCount.length}
                currentPage={currentPage} 
            />
        </div>
    );
};

export default ProjectsPage;