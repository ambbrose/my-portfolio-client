"use client";

import { useRef } from 'react';

import { random } from 'maath';
import { useFrame } from '@react-three/fiber';

import { Points, PointMaterial, Preload } from "@react-three/drei";

const Stars = (props: any) => {

    const ref: React.RefObject<THREE.Mesh> = useRef<THREE.Mesh>(null);

    const sphere = random.inSphere(new Float32Array(5000), { radius: 1.2 });

<<<<<<< HEAD
    useFrame((state, delta) => {
        if (ref?.current?.rotation && ref.current.rotation) {
            ref.current.rotation.x -= delta / 10;
            ref.current.rotation.y -= delta / 15;
        }
    });
=======
    // useFrame((state, delta) => {
    //     if (ref.current) {
    //         ref.current.rotation.x -= delta / 10;
    //         ref.current.rotation.y -= delta / 15;
    //     }
    // });
>>>>>>> 42a0bc6fd7f57ef3fd2aae472eb5e28c23069bc0

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
                <PointMaterial
                    transparent
                    color='#f272c8'
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

export default Stars;
