import { Canvas } from "@react-three/fiber";
import { Stars } from "@react-three/drei";
import OrbitPlanet from "../planet/OrbitPlanet";
// import CenterHub from "./CenterHub";
import OrbitRing from "./OrbitRing";


export default function GalaxyScene() {
    const size = Math.min(window.innerWidth, window.innerHeight);
    const base = size / 200; // scale factor

    return (
        <div className="h-screen w-full bg-black relative z-0">

            <Canvas camera={{ position: [0, 0, 8] }}>
                {/* lights */}
                <ambientLight intensity={0.35} />
                <pointLight position={[8, 8, 8]} intensity={1.6} />

                {/* ⭐ stars */}
                <Stars
                    radius={120}
                    depth={5}
                    count={9000}
                    factor={4}
                    fade
                    speed={0.8}
                />

            </Canvas>

            {/* nebula overlay */}
            <div className="pointer-events-none absolute inset-0
        bg-gradient-to-t from-purple-900/20 via-transparent to-transparent" />

        </div>
    );
}
