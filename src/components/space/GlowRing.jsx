import * as THREE from "three";

export default function OrbitRing({ radius, color }) {
    return (
        <mesh>
            <ringGeometry args={[radius - 0.02, radius + 0.02, 128]} />
            <meshBasicMaterial
                color={color}
                transparent
                opacity={0.35}
                side={THREE.DoubleSide}
            />
        </mesh>
    );
}
