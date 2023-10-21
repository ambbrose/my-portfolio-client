"use client";

import Image from "next/image";

import { Tab } from '@headlessui/react';
import { cn } from "@/lib/utils";

interface GalleryTabProps {
    image: {
        id: string;
        url: string;
    }
};

const GalleryTab: React.FC<GalleryTabProps> = ({ image }) => {
    return (
        <Tab className="relative flex aspect-square items-center border-none justify-center rounded-md cursor-pointer">
            {({ selected }) => (
                <div>
                    <span className="absolute h-full w-full aspect-square border-none inset-0 rounded-md overflow-hidden">
                        <Image
                            fill
                            src={image.url}
                            alt="image"
                            className="object-cover object-center"
                        />
                    </span>

                    <span className={cn(
                        "absolute inset-0 rounded-md",
                        selected ? "ring-blue-900 ring-2 ring-offset-0" : "ring-transparent"
                    )} />
                </div>
            )}
        </Tab>
    );
};

export default GalleryTab;