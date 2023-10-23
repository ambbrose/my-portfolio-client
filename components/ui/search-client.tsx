"use client";

import { Project } from "@/types";

import ProjectList from "../project-list";
import Link from "next/link";
import { ArrowBigLeftIcon } from "lucide-react";

interface SearchClientProps {
    searchResult: Project[];
    searchParam: string
};

const SearchClient: React.FC<SearchClientProps> = ({ searchResult, searchParam }) => {

    return (
        <div className="px-10 pb-10 pt-0">
            <h1 className="p-10 text-2xl text-blue-500 font-bold w-full items-center justify-center flex">
                Search Result For: "{searchParam}"
            </h1>

            <div className="flex flex-row">
                <ArrowBigLeftIcon className="text-blue-500" />
                <p>
                    Go back to &nbsp;
                    <Link href={'/projects'} className="text-blue-500 underline underline-offset-2">
                        Projects Page
                    </Link>
                </p>
                
            </div>

            <ProjectList data={searchResult} />

            {/* <div className="h-auto w-full flex items-center justify-center my-10">
                    {totalPages > 1 && <PaginationControls
                        hasPrevPage={currentPage > 1}
                        hasNextPage={currentPage < totalPages}
                        count={projectCount.length}
                        per_page={PER_PAGE}
                        totalPages={totalPages}
                        prevPage={prevPage}
                        nextPage={nextPage}
                    />}
                </div> */}
        </div>
    )
}

export default SearchClient;