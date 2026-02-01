import { motion } from "framer-motion";
import { useState } from "react";

export default function SupportingSkill({ name, angle, radius }) {
    const [showName, setShowName] = useState(false);

    const angleRad = (angle * Math.PI) / 180;
    const x = radius * Math.cos(angleRad);
    const y = radius * Math.sin(angleRad);

    return (
        <motion.div
            className="absolute top-1/2 left-1/2 pointer-events-auto"
            style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
        >
            <motion.div
                style={{ rotate: -angle }} // Counter-rotate to keep upright
                className="relative"
                onMouseEnter={() => setShowName(true)}
                onMouseLeave={() => setShowName(false)}
            >
                {/* Small moon orb */}
                <motion.div
                    whileHover={{ scale: 1.3 }}
                    className="w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-gradient-to-br from-blue-400/40 to-purple-400/40 border border-blue-300/60 backdrop-blur-sm shadow-[0_0_15px_rgba(96,165,250,0.4)] flex items-center justify-center cursor-pointer"
                >
                    {/* Inner glow */}
                    <div className="w-3 h-3 rounded-full bg-blue-300/50 blur-[2px]" />
                </motion.div>

                {/* Tooltip on hover */}
                {showName && (
                    <motion.div
                        initial={{ opacity: 0, y: 5 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="absolute top-full mt-1 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900/95 border border-blue-400/30 rounded text-[10px] text-blue-200 whitespace-nowrap shadow-lg z-50"
                    >
                        {name}
                    </motion.div>
                )}
            </motion.div>
        </motion.div>
    );
}