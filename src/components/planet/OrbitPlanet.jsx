import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import Planet3D from "./Planet3D";

export default function OrbitPlanet({
    radius = 2,
    speed = 0.3,
    startAngle = 0,
    ...planetProps
}) {
    const group = useRef();
    const angle = useRef(startAngle);

    useFrame((_, delta) => {
        angle.current += speed * delta;

        const x = Math.cos(angle.current) * radius;
        const y = Math.sin(angle.current) * radius;

        group.current.position.set(x, y, 0); // ✅ XY plane
    });

    return (
        <group ref={group}>
            <Planet3D {...planetProps} />
        </group>
    );
}
