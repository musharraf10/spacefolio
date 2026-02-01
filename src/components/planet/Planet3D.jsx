import { useRef, useState } from "react";
import { useFrame, useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";
import { Html } from "@react-three/drei";

export default function Planet3D({
    textureUrl,
    radius = 1.2,
    label,
    onSelect
}) {
    const ref = useRef();
    const [hovered, setHovered] = useState(false);

    const texture = useLoader(TextureLoader, textureUrl);

    useFrame((_, delta) => {
        if (ref.current) {
            ref.current.rotation.y += delta * 0.4;
        }
    });

    return (
        <mesh
            ref={ref}
            onPointerOver={() => setHovered(true)}
            onPointerOut={() => setHovered(false)}
            onClick={onSelect}
        >
            <sphereGeometry args={[radius, 48, 48]} />

            <meshStandardMaterial
                map={texture}
                emissive={hovered ? "#ffffff" : "#111111"}
                emissiveIntensity={hovered ? 0.5 : 0.15}
                roughness={0.7}
                metalness={0.2}
            />

            <Html distanceFactor={8}>
                <div className="text-white text-sm mt-2 text-center">
                    {label}
                </div>
            </Html>
        </mesh>
    );
}
