"use client";

import { Tilt } from "react-tilt";
import { motion } from "framer-motion";

import { fadeIn } from "@/lib/utils";
import Image from "next/image";

interface ServiceCardProps {
    index: number;
    title: string;
    iconUrl: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, iconUrl }) => {
    return (
        <Tilt className="sm:w-full xs:w-[250px]">
            <motion.div
                variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
                className="w-full p-[1px] rounded-[20px] shadow-card"
            >
                <div
                    // options={{ max: 45, scale: 1, speed: 450 }}
                    className="bg-neutral-900 rounded-[20px] py-5 px-12 
                    min-h-[280px] flex justify-evenly items-center flex-col"
                >
                    <Image
                        src={iconUrl}
                        alt={title}
                        height={70}
                        width={70}
                        className="object-contain aspect-square"
                    />
                    {/* <img src={iconUrl} alt={title}
                        className="w-20 h-20 object-contain"
                    /> */}

                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </motion.div>
        </Tilt>
    );
};

export default ServiceCard;