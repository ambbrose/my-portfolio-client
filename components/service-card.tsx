"use client";

import { Tilt } from "react-tilt";

import Image from "next/image";

interface ServiceCardProps {
    title: string;
    iconUrl: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({ title, iconUrl }) => {
    return (
        <Tilt className="sm:w-full xs:w-[250px]">
            <div
                className="w-full p-[1px] rounded-[20px] shadow-card"
            >
                <div
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

                    <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
                </div>
            </div>
        </Tilt>
    );
};

export default ServiceCard;