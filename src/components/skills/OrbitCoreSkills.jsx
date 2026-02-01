import { motion, useAnimation } from "framer-motion";
import { useEffect, useState } from "react";
import SkillNode from "./SkillNode";

export default function OrbitCoreSkills({ skills }) {
    const controls = useAnimation();
    const [paused, setPaused] = useState(false);
    const [orbitSize, setOrbitSize] = useState({ radius: 220, container: 500 });

    // Responsive orbit sizing
    useEffect(() => {
        const updateSize = () => {
            const width = window.innerWidth;
            if (width < 640) {
                setOrbitSize({ radius: 140, container: 380 });
            } else if (width < 1024) {
                setOrbitSize({ radius: 200, container: 500 });
            } else {
                setOrbitSize({ radius: 240, container: 600 });
            }
        };

        updateSize();
        window.addEventListener("resize", updateSize);
        return () => window.removeEventListener("resize", updateSize);
    }, []);

    useEffect(() => {
        if (!paused) {
            controls.start({
                rotate: 360,
                transition: {
                    duration: 80,
                    ease: "linear",
                    repeat: Infinity,
                },
            });
        } else {
            controls.stop();
        }
    }, [paused, controls]);

    const orbitDiameter = orbitSize.radius * 2;

    return (
        <div
            className="relative w-full flex items-center justify-center my-12 sm:my-16 lg:my-24 px-4"
            style={{ height: `${orbitSize.container}px` }}
        >
            {/* Centered orbit container */}
            <div className="relative" style={{ width: `${orbitDiameter}px`, height: `${orbitDiameter}px` }}>

                {/* Central glow effect */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 sm:w-28 sm:h-28 lg:w-36 lg:h-36">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500/20 to-blue-500/20 blur-2xl animate-pulse" />
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-xl" />
                </div>

                {/* Center core */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-14 h-14 sm:w-18 sm:h-18 lg:w-20 lg:h-20 rounded-full bg-gradient-to-br from-cyan-500 to-blue-600 shadow-lg shadow-cyan-500/50 flex items-center justify-center">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center">
                        <div className="w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-white animate-pulse" />
                    </div>
                </div>

                {/* Main orbit ring */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-400/30"
                    style={{
                        width: `${orbitDiameter}px`,
                        height: `${orbitDiameter}px`
                    }}
                >
                    <div className="absolute inset-0 rounded-full border border-cyan-400/20 blur-sm" />
                </div>

                {/* Secondary orbit ring */}
                <div
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-blue-400/15"
                    style={{
                        width: `${orbitDiameter + 40}px`,
                        height: `${orbitDiameter + 40}px`
                    }}
                />

                {/* Rotating skill nodes */}
                <motion.div
                    animate={controls}
                    className="absolute top-0 left-0 w-full h-full"
                >
                    {skills.map((skill, index) => {
                        const angle = (360 / skills.length) * index;
                        return (
                            <SkillNode
                                key={skill.name}
                                skill={skill}
                                angle={angle}
                                radius={orbitSize.radius}
                                onHoverChange={setPaused}
                                isPaused={paused}
                            />
                        );
                    })}
                </motion.div>

                {/* Orbital trail effect */}
                <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                        duration: 120,
                        ease: "linear",
                        repeat: Infinity,
                    }}
                    className="absolute top-0 left-0 w-full h-full"
                >
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-cyan-400/60 blur-sm" />
                </motion.div>
            </div>
        </div>
    );
}