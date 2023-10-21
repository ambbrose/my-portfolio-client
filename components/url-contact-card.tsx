"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";

interface URLContactCardProps {
    index: number;
    title: string;
    contact: string;
    iconUrl: string;
    active: boolean;
    urlType: boolean;
};

const URLContactCard: React.FC<URLContactCardProps> = ({ index, title, iconUrl, active, urlType, contact }) => {

    return (
        <Link href={contact} target="_blank">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full p-[1px] rounded-[20px] shadow-card cursor-pointer"
            >
                <div className="bg-neutral-900 rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <Image
                        src={iconUrl}
                        alt={title}
                        height={70}
                        width={70}
                        className="object-contain aspect-square"
                    />

                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Link>
    );
};

export default URLContactCard;