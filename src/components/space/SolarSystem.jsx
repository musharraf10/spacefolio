import React, { useRef, useState, useLayoutEffect } from "react";
import {
    motion,
    useMotionValue,
    useTransform,
} from "framer-motion";
import Planet from "../planet/Planet";
import { planets, profileData } from "../../data/mockData";

const SolarSystem = ({ onPlanetFocus }) => {
    const containerRef = useRef(null);
    const trackRef = useRef(null);

    const [isDragging, setIsDragging] = useState(false);
    const [activePlanetId, setActivePlanetId] = useState(null);
    const [bounds, setBounds] = useState({ left: 0, right: 0 });
    const [activePlanetPos, setActivePlanetPos] = useState(null);


    const dragX = useMotionValue(0);

    const refocusActivePlanet = () => {
        if (!activePlanetId) return;

        const el = document.querySelector(
            `[data-planet-id="${activePlanetId}"]`
        );

        if (!el) return;

        const rect = el.getBoundingClientRect();

        onPlanetFocus?.(
            planets.find(p => p.id === activePlanetId),
            {
                x: rect.left + rect.width / 2,
                y: rect.top + rect.height / 2,
            }
        );
    };


    /* ---------- SUN SCALE ---------- */
    const sunScale = useTransform(dragX, [-400, 0], [0.85, 1]);

    /* ---------- CALCULATE DRAG LIMITS ---------- */
    useLayoutEffect(() => {
        if (!containerRef.current || !trackRef.current) return;

        const containerWidth = containerRef.current.offsetWidth;
        const trackWidth = trackRef.current.scrollWidth;

        // Prevent dragging beyond last planet
        const leftLimit = Math.min(containerWidth - trackWidth, 0);

        setBounds({
            left: leftLimit,
            right: 0,
        });
    }, []);

    /* ---------- PLANET CLICK ---------- */
    const handlePlanetClick = (planet, pos) => {
        setActivePlanetId(planet.id);
        onPlanetFocus?.(planet, pos);
    };



    return (
        <div className="relative w-full">


            {/* ---------- SOLAR SYSTEM ---------- */}
            <div
                ref={containerRef}
                className="relative h-[600px] md:h-[700px] overflow-hidden top-2"
            >
                <motion.div
                    ref={trackRef}
                    drag="x"
                    dragConstraints={bounds}
                    dragElastic={0.08}
                    dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
                    style={{ x: dragX }}
                    onDragEnd={() => {
                        setIsDragging(false);
                        refocusActivePlanet(); // 🔑 AUTO FOLLOW
                    }}
                    onDragStart={() => setIsDragging(true)}
                    className="absolute left-0 top-0 h-full flex items-center gap-32 md:gap-48 px-8 md:px-16 cursor-grab active:cursor-grabbing"
                >
                    {/* ---------- SUN ---------- */}
                    <motion.div
                        style={{ scale: sunScale }}
                        className="relative flex-shrink-0 flex flex-col items-center"
                    >
                        <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8">
                            <motion.div
                                animate={{ rotate: 360 }}
                                transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                                className="absolute inset-0 rounded-full bg-gradient-to-br from-yellow-300 via-orange-500 to-red-600 planet-glow"
                            />
                        </div>

                        <div className="text-center bg-primary-light/80 backdrop-blur-sm rounded-lg p-6 border border-secondary max-w-xs">
                            <h3 className="text-2xl font-heading font-bold text-accent">
                                {profileData.name}
                            </h3>
                            <p className="text-secondary-light text-sm">
                                {profileData.title}
                            </p>
                        </div>
                    </motion.div>

                    {/* ---------- PLANETS ---------- */}
                    {planets.map((planet, index) => (
                        <Planet
                            key={planet.id}
                            planet={planet}
                            index={index}
                            isDragging={isDragging}
                            isActive={activePlanetId === planet.id}
                            onClick={handlePlanetClick}

                        />
                    ))}
                </motion.div>
            </div>
        </div>
    );
};

export default SolarSystem;
