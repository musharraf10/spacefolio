import { motion } from "framer-motion";
import { useState } from "react";
import SkillTooltip from "./SkillTooltip";
import { SkillIcon } from "./SkillIcon";
import SupportingSkill from "./SupportingSkillsWave";

export default function SkillNode({ skill, angle, radius, onHoverChange, isPaused }) {
    const [showTooltip, setShowTooltip] = useState(false);



    // Calculate position correctly
    const angleRad = (angle * Math.PI) / 180;
    const x = radius * Math.cos(angleRad);
    const y = radius * Math.sin(angleRad);

    const hasSupporting = skill.supporting && skill.supporting.length > 0;

    return (
        <motion.div
            className="absolute top-1/2 left-1/2"
            style={{
                transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`,
            }}
        >
            <motion.div
                className="relative flex flex-col items-center"
                onMouseEnter={() => {
                    setShowTooltip(true);
                    onHoverChange(true);
                }}
                onMouseLeave={() => {
                    setShowTooltip(false);
                    onHoverChange(false);
                }}
            >
                {/* Supporting skills orbit container */}
                {hasSupporting && (
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        {/* Mini orbit ring */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40 rounded-full border border-cyan-400/20" />

                        {/* Rotating supporting skills */}
                        <motion.div
                            animate={!isPaused ? { rotate: 360 } : {}}
                            transition={{
                                duration: 20,
                                ease: "linear",
                                repeat: Infinity,
                            }}
                            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 sm:w-36 sm:h-36 lg:w-40 lg:h-40"
                        >
                            {skill.supporting.map((supportSkill, idx) => {
                                const supportAngle = (360 / skill.supporting.length) * idx;
                                return (
                                    <SupportingSkill
                                        key={supportSkill}
                                        name={supportSkill}
                                        angle={supportAngle}
                                        radius={16} // Small orbit radius
                                    />
                                );
                            })}
                        </motion.div>
                    </div>
                )}

                {/* Energy Orb - Core Skill */}
                <motion.div
                    whileHover={{ scale: 1.15 }}
                    className="relative z-10 w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-gradient-to-br from-cyan-500/30 to-blue-500/30 border-2 border-cyan-400/50 flex items-center justify-center backdrop-blur-md shadow-[0_0_25px_rgba(34,211,238,0.5)]"
                >
                    {/* Inner glow */}
                    <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-md" />

                    {/* Supporting skills indicator */}
                    {hasSupporting && (
                        <div className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-blue-500 border-2 border-white text-[10px] flex items-center justify-center font-bold text-white">
                            {skill.supporting.length}
                        </div>
                    )}

                    {/* Icon */}
                    <div className="relative z-10">
                        <SkillIcon icon={skill.icon} />
                    </div>
                </motion.div>

                {/* Name */}
                <div className="relative z-10 mt-2 text-xs sm:text-sm text-cyan-300 font-medium text-center whitespace-nowrap">
                    {skill.name}
                </div>

                {showTooltip && <SkillTooltip skill={skill} />}
            </motion.div>
        </motion.div>
    );
}