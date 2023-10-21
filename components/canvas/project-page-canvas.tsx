"use client"

import { useState, useEffect, Suspense } from 'react';

import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";

import CanvasLoader from '../loader';

interface ObjectProps {
    isMobile: boolean;
    isTablet: boolean;
}

const Object: React.FC<ObjectProps> = ({ isMobile, isTablet }) => {

    const object = useGLTF('/old_cpt/scene.gltf');

    return (
        <mesh>
            <hemisphereLight intensity={2.15} groundColor="white" />
            <pointLight intensity={5} />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={1}
                castShadow
                shadow-mapSize={1024}
            />

            <primitive
                object={object.scene}
                scale={isMobile ? 4 : 5}
                position={[0, -1, 0]}
            />
        </mesh>
    );
};

const ProjectPageCanvas = () => {

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        const tabletQuery = window.matchMedia("(max-width: 1023px) and (min-width: 426px)");

        setIsMobile(mediaQuery.matches);
        setIsTablet(tabletQuery.matches);

        const handleMediaQueryChange = (event: any) => {
            setIsMobile(event.matches);
            setIsTablet(event.matches);
        };

        mediaQuery.addEventListener('change', handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener('change', handleMediaQueryChange);
        };
    }, []);

    return (
        <Canvas>
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    autoRotate
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />

                <Object isMobile={isMobile} isTablet={isTablet} />
            </Suspense>
        </Canvas>
    );
};

export default ProjectPageCanvas;