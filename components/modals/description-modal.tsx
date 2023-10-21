"use client";

import { useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import Gallery from "@/components/gallery";

import { Project } from "@/types";

interface DescriptionModalProps {
    isOpen: boolean;
    onClose: () => void;
    project: Project
};

export const DescriptionModal: React.FC<DescriptionModalProps> = ({ isOpen, onClose, project }) => {

    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted) {
        return null;
    };

    return (
        <div className="fixed inset-0 z-10 flex items-center justify-center overflow-x-hidden overflow-y-auto outline-none focus:outline-none">
            {/* Backdrop */}
            <div className="fixed inset-0 bg-black opacity-90" />

            <div className="relative w-auto h-[550px] sm:max-w-lg md:max-w-2xl lg:max-w-3xl">
                {/* Modal content */}
                <div className="relative flex flex-col w-full bg-neutral-900 border-0 rounded-lg shadow-lg outline-none focus:outline-none overflow-y-auto mt-5 text-gray-100">

                    {/* Header */}
                    <div className="px-6 py-4 mt-1 border-b border-solid border-gray-700">
                        <h3 className="text-2xl font-semibold">{project.title}</h3>
                    </div>

                    {/* Body */}
                    <div className="relative p-6 flex-auto">
                        <h3 className="text-2xl font-semibold">
                            Project Description
                        </h3>
                        <p className="mt-4">{project.description}</p>

                        <p className="my-4 text-lg border-t border-solid border-gray-700">
                            The images below are some screenshot from the actual project
                        </p>

                        <Gallery images={project.images} />
                    </div>

                    {/* Footer */}
                    <div className="flex items-center justify-end p-3 border-t border-solid border-gray-700 rounded-b">
                        <Button onClick={onClose}>
                            Close
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};