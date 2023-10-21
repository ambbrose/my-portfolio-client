"use client";

import { Tech } from "@/types";

import TechBallCanvas from "./canvas/tech-ball-canvas";

interface TechProps {
    techs: Tech[];
};

const Tech: React.FC<TechProps> = ({ techs }) => {
    return (
        <div className="flex flex-row flex-wrap justify-center gap-10 py-10">
            {techs.map((tech) => (
                <div className="w-28 h-28" key={tech.title}>
                    <TechBallCanvas iconUrl={tech.iconUrl} />
                </div>
            ))}
        </div>
    );
};

export default Tech;