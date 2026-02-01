import * as THREE from "three";

export default function OrbitRing({
    radius = 5,
    color = "#60A5FA",
    tilt = 0.9
}) {
    return (
        <group rotation={[-tilt, 0, 0]}>

            {/* main line */}
            <mesh>
                <ringGeometry args={[radius - 0.03, radius + 0.03, 128]} />
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.45}
                    side={THREE.DoubleSide}
                />
            </mesh>

            {/* glow halo */}
            <mesh>
                <ringGeometry args={[radius - 0.18, radius + 0.18, 128]} />
                <meshBasicMaterial
                    color={color}
                    transparent
                    opacity={0.08}
                    side={THREE.DoubleSide}
                />
            </mesh>

        </group>
    );
}
