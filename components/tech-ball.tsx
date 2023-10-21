"use client";

import { Decal, Float, useTexture } from "@react-three/drei";

interface TechballProps {
    url: string;
}

const TechBall: React.FC<TechballProps> = ({ url }) => {

    const decal = useTexture(url);

    return (
        <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
            <ambientLight intensity={0.25} />
            <directionalLight position={[0, 0, 0.05]} />

            <mesh castShadow receiveShadow scale={2.75}>
                <icosahedronGeometry args={[1, 1]} />
                <meshStandardMaterial
                    color="#424757"
                    polygonOffset
                    polygonOffsetFactor={-5}
                    flatShading
                />
                <Decal 
                    map={decal} 
                    position={[0, 0, 1]}
                    rotation={[2 * Math.PI, 0, 6.25]}
                />
            </mesh>
        </Float>
    );
};

export default TechBall;