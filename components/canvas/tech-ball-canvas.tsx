"use client";

import { Suspense } from "react";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import CanvasLoader from "../loader";
import TechBall from "../tech-ball";

interface TechballCanvasProps {
    iconUrl: string;
};

const TechBallCanvas: React.FC<TechballCanvasProps> = ({ iconUrl }) => {
    return (
        <Canvas
            frameloop="demand"
            gl={{ preserveDrawingBuffer: true }}
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls enableZoom={false} />

                <TechBall url={iconUrl} />
            </Suspense>
        </Canvas>
    );
};

export default TechBallCanvas;