"use client";

import { useState } from 'react';

import { motion } from "framer-motion";
import { EyeIcon, Info, LinkIcon, GithubIcon } from "lucide-react";
import { Project } from "@/types";
import { fadeIn } from "@/lib/utils";
import Image from "next/image";
import Link from 'next/link';

import ColoredWords from "@/components/ui/tech-stack";
import { DescriptionModal } from "@/components/modals/description-modal";


interface ProjectCardProps {
    index: number;
    project: Project;
};

const ProjectCard: React.FC<ProjectCardProps> = ({ index, project }) => {

    const image = project.images?.[0]?.url;

    const [showModal, setShowModal] = useState<boolean>(false);

    const linkText = project.live ? 'Live' : 'Demo';

    const openModal = () => {
        setShowModal(true);
    };

    const closeModal = () => {
        setShowModal(false);
    };

    const showInfoIcon = project.description && (
        <div
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            onClick={() => setShowModal(true)}
        >
            <Info size={20} />
        </div>
    );

    const showGithubIcon = project.source_code_link && (
        <Link
            className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            href={project.source_code_link}
            target="_blank"
        >
            <GithubIcon size={20} />
        </Link>
    );

    return (
        <>
            {showModal && (
                <DescriptionModal
                    project={project}
                    isOpen={showModal}
                    onClose={closeModal}
                />
            )}

            <motion.div
                variants={fadeIn("up", "spring", index * 0.5, 0.75)}
                className="bg-neutral-900 border rounded-xl group p-3 space-y-4"
            >
                <div className="aspect-square bg-gray-100 rounded-xl relative">
                    <Image
                        fill
                        src={image}
                        alt={project.title}
                        className="object-cover aspect-square rounded-md py-10"
                    />

                    <div className="absolute inset-0 flex flex-row justify-end m-3 gap-2">
                        {showInfoIcon}
                        {showGithubIcon}
                    </div>
                </div>

                <h3 className="text-white font-bold text-[24px] truncate">
                    {project.title}
                </h3>

                <ColoredWords text={project.technologies} />

                <div className="flex flex-row mb-0 items-center gap-1 text-gray-900 mr-1">
                    <Link
                        href={project.live ? project.live_url : project.demo_url}
                        target="_blank"
                        className="bg-neutral-100 hover:bg-neutral-300 text-gray-900 gap-0.5 flex flex-row rounded-sm py-2 px-3 items-center"
                    >
                        <LinkIcon size={20} />
                        {linkText}
                    </Link>
                </div>
            </motion.div>
        </>
    );
};

export default ProjectCard;