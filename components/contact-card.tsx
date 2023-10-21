"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface ContactCardProps {
    index: number;
    title: string;
    contact: string;
    iconUrl: string;
    active: boolean;
    urlType: boolean;
};

const ContactCard: React.FC<ContactCardProps> = ({ index, title, iconUrl, active, urlType, contact }) => {

    const router = useRouter();

    const href = () => {
        if (title === 'Whatsapp') {
            router.push(`whatsapp://send?phone=${contact}`);
        } else if (title === 'Telegram') {
            router.push(`tg://resolve?domain=${contact}`);
        }else{
            return null;
        }
    };

    return (
        <div onClick={href}>
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
                    <p className="text-white text-[20px] font-bold text-center">{contact}</p>
                </div>
            </motion.div>
        </div>
    );
};

export default ContactCard;