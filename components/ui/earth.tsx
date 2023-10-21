"use client";

import { useGLTF } from "@react-three/drei";

const Earth = () => {

    const earth = useGLTF('./earth/scene.gltf');

    return (
        <mesh>
            <hemisphereLight intensity={0.6} />
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
                object={earth.scene}
                scale={10}
                position-y={0}
                rotation-y={0}
            />
        </mesh>
    );
};

export default Earth;