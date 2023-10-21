"use client";

import Image from "next/image";

import { Tab } from "@headlessui/react";

import GalleryTab from "@/components/gallery/gallery-tab";

interface GalleryProps {
    images: {
        id: string;
        url: string;
    }[]
};

const Gallery: React.FC<GalleryProps> = ({ images }) => {
    return (
        <Tab.Group as="div" className="flex flex-col-reverse">
            <div className="mx-auto mt-6 w-full max-w-2xl sm:block lg:max-w-none">
                <Tab.List className="grid grid-cols-4 gap-2">
                    {images.map((image) => (
                        <GalleryTab key={image.id} image={image} />
                    ))}
                </Tab.List>
            </div>

            <Tab.Panels className="aspect-square h-2/5 w-1/2">
                {images.map((image) => (
                    <Tab.Panel key={image.id}>
                        <div className="aspect-square relative h-full w-full sm:rounded-lg overflow-hidden">
                            <Image
                                fill
                                src={image.url}
                                alt="image"
                                className="object-cover object-center"
                            />
                        </div>
                    </Tab.Panel>
                ))}
            </Tab.Panels>
        </Tab.Group>
    );
};

export default Gallery;