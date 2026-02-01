import { useRef, useEffect, useState } from "react";

import { motion } from "framer-motion";
import PlanetCard from "./PlanetCard";
import BotAvatar from "../../bot/BotAvatar";
import { useNavigate } from "react-router-dom";


const CARD = 140;
const GAP = 64;
const STEP = CARD + GAP;

export default function PlanetCarousel({ planets }) {
    const [index, setIndex] = useState(0);
    const activePlanetRef = useRef(null);
    const [botAnchor, setBotAnchor] = useState(null);

    const navigate = useNavigate();

    const handlePlanetSelect = (planet) => {
        if (planet?.route) {
            navigate(planet.route);
        }
    };
    useEffect(() => {
        if (!activePlanetRef.current) return;

        const rect = activePlanetRef.current.getBoundingClientRect();

        setBotAnchor({
            x: rect.right + 12, // offset so bot doesn't cover planet
            y: rect.top - 20,
        });
    }, [index]);



    // ---------- drag handlers ----------
    const onDragEnd = (_, info) => {
        const swipe = info.offset.x;
        const velocity = info.velocity.x;

        if (swipe < -60 || velocity < -500) {
            setIndex(i => Math.min(i + 1, planets.length - 1));
        }

        if (swipe > 60 || velocity > 500) {
            setIndex(i => Math.max(i - 1, 0));
        }
    };

    return (
        <div className="w-full h-screen flex items-center justify-center bg-black overflow-hidden">

            {/* 🤖 calm bot — speaks only on click */}
            <BotAvatar script={planets[index]?.script} />

            <div
                className="relative"
                style={{ width: CARD }}
            >
                <motion.div
                    className="flex gap-16"
                    animate={{ x: -index * STEP }}
                    transition={{ type: "spring", stiffness: 140, damping: 22 }}

                    drag="x"
                    dragElastic={0.15}
                    dragMomentum={false}
                    style={{ touchAction: "pan-y" }}

                    onDragEnd={onDragEnd}
                >
                    {planets.map((p, i) => (
                        <PlanetCard
                            key={p.id}
                            planet={p}
                            offset={i - index}
                            onSelect={handlePlanetSelect}
                            ref={i === index ? activePlanetRef : null}
                        />
                    ))}

                </motion.div>
            </div>
        </div>
    );
}
