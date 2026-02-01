import React, { useState } from 'react';
import { motion } from 'framer-motion';
import OrbitCoreSkills from "../components/skills/OrbitCoreSkills"
import { skillsData } from "../data/skillsContent";

// Enhanced Starfield with depth
const EnhancedStarField = () => {
    const stars = React.useMemo(
        () =>
            Array.from({ length: 150 }, (_, i) => ({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2 + 0.3,
                opacity: Math.random() * 0.7 + 0.3,
                duration: Math.random() * 4 + 3,
            })),
        []
    );


    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {stars.map((star) => (
                <motion.div
                    key={star.id}
                    className="absolute bg-white rounded-full"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: star.opacity,
                    }}
                    animate={{
                        opacity: [star.opacity * 0.3, star.opacity, star.opacity * 0.3],
                        scale: [1, 1.3, 1],
                    }}
                    transition={{
                        duration: star.duration,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}
        </div>
    );
};

// Skill Icon Component
const SkillIcon = ({ icon, size = "large" }) => {
    const iconMap = {
        react: (
            <svg className={size === "large" ? "w-16 h-16" : "w-8 h-8"} viewBox="0 0 24 24" fill="none">
                <path d="M12 10.11c1.03 0 1.87.84 1.87 1.89 0 1-.84 1.85-1.87 1.85S10.13 13 10.13 12c0-1.05.84-1.89 1.87-1.89M7.37 20c.63.38 2.01-.2 3.6-1.7-.52-.59-1.03-1.23-1.51-1.9a22.7 22.7 0 0 1-2.4-.36c-.51 2.14-.32 3.61.31 3.96m.71-5.74l-.29-.51c-.11.29-.22.58-.29.86.27.06.57.11.88.16l-.3-.51m6.54-.76l.81-1.5-.81-1.5c-.3-.53-.62-1-.91-1.47C13.17 9 12.6 9 12 9c-.6 0-1.17 0-1.71.03-.29.47-.61.94-.91 1.47L8.57 12l.81 1.5c.3.53.62 1 .91 1.47.54.03 1.11.03 1.71.03.6 0 1.17 0 1.71-.03.29-.47.61-.94.91-1.47M12 6.78c-.19.22-.39.45-.59.72h1.18c-.2-.27-.4-.5-.59-.72m0 10.44c.19-.22.39-.45.59-.72h-1.18c.2.27.4.5.59.72M16.62 4c-.62-.38-2 .2-3.59 1.7.52.59 1.03 1.23 1.51 1.9.82.08 1.63.2 2.4.36.51-2.14.32-3.61-.32-3.96m-.7 5.74l.29.51c.11-.29.22-.58.29-.86-.27-.06-.57-.11-.88-.16l.3.51m1.45-7.05c1.47.84 1.63 3.05 1.01 5.63 2.54.75 4.37 1.99 4.37 3.68s-1.83 2.93-4.37 3.68c.62 2.58.46 4.79-1.01 5.63-1.46.84-3.45-.12-5.37-1.95-1.92 1.83-3.91 2.79-5.38 1.95-1.46-.84-1.62-3.05-1-5.63-2.54-.75-4.37-1.99-4.37-3.68s1.83-2.93 4.37-3.68c-.62-2.58-.46-4.79 1-5.63 1.47-.84 3.46.12 5.38 1.95 1.92-1.83 3.91-2.79 5.37-1.95M17.08 12c.34.75.64 1.5.89 2.26 2.1-.63 3.28-1.53 3.28-2.26 0-.73-1.18-1.63-3.28-2.26-.25.76-.55 1.51-.89 2.26M6.92 12c-.34-.75-.64-1.5-.89-2.26-2.1.63-3.28 1.53-3.28 2.26 0 .73 1.18 1.63 3.28 2.26.25-.76.55-1.51.89-2.26m9.45 0c.5 1.13.81 2.27.91 3.36.9-.15 1.71-.32 2.4-.54-.7-1.16-1.45-2.38-2.23-3.64-.34.55-.68 1.1-1.08 1.82m-10.74 0c-.5-1.13-.81-2.27-.91-3.36-.9.15-1.71.32-2.4.54.7 1.16 1.45 2.38 2.23 3.64.34-.55.68-1.1 1.08-1.82" fill="currentColor" />
            </svg>
        ),
        js: (
            <svg className={size === "large" ? "w-16 h-16" : "w-8 h-8"} viewBox="0 0 24 24" fill="none">
                <path d="M3 3h18v18H3V3m4.73 15.04c.4.85 1.19 1.55 2.54 1.55 1.5 0 2.53-.8 2.53-2.55v-5.78h-1.7V17c0 .86-.35 1.08-.9 1.08-.58 0-.82-.4-1.09-.87l-1.38.83m5.98-.18c.5.98 1.51 1.73 3.09 1.73 1.6 0 2.8-.83 2.8-2.36 0-1.41-.81-2.04-2.25-2.66l-.42-.18c-.73-.31-1.04-.52-1.04-1.02 0-.41.31-.73.81-.73.48 0 .8.21 1.09.73l1.31-.87c-.55-.97-1.33-1.33-2.4-1.33-1.51 0-2.48.96-2.48 2.23 0 1.38.81 2.03 2.03 2.55l.42.18c.78.34 1.24.55 1.24 1.13 0 .48-.45.83-1.15.83-.83 0-1.31-.43-1.67-1.03l-1.38.8z" fill="currentColor" />
            </svg>
        ),
        node: (
            <svg className={size === "large" ? "w-16 h-16" : "w-8 h-8"} viewBox="0 0 24 24" fill="none">
                <path d="M12 1.85c-.27 0-.55.07-.78.2l-7.44 4.3c-.48.28-.78.8-.78 1.36v8.58c0 .56.3 1.08.78 1.36l1.95 1.12c.95.46 1.27.47 1.71.47 1.4 0 2.21-.85 2.21-2.33V8.44c0-.12-.1-.22-.22-.22H8.5c-.13 0-.23.1-.23.22v8.47c0 .66-.68 1.31-1.77.76L4.45 16.5a.26.26 0 0 1-.11-.21V7.71c0-.09.04-.17.11-.21l7.44-4.29c.06-.04.16-.04.22 0l7.44 4.29c.07.04.11.12.11.21v8.58c0 .08-.04.16-.11.21l-7.44 4.29c-.06.04-.16.04-.22 0L10 19.65c-.08-.03-.16-.04-.21-.01-.53.3-.63.36-1.12.51-.12.04-.31.11.07.32l2.48 1.47c.24.14.5.21.77.21s.53-.07.77-.21l7.44-4.29c.48-.28.78-.8.78-1.36V7.71c0-.56-.3-1.08-.78-1.36l-7.44-4.3c-.23-.13-.5-.2-.77-.2M14 8c-2.12 0-3.39.89-3.39 2.39 0 1.61 1.26 2.08 3.3 2.28 2.43.24 2.62.6 2.62 1.08 0 .83-.67 1.18-2.23 1.18-1.98 0-2.4-.49-2.55-1.47a.226.226 0 0 0-.22-.18h-.96c-.12 0-.21.09-.21.22 0 1.24.68 2.74 3.94 2.74 2.35 0 3.7-.93 3.7-2.55 0-1.61-1.08-2.03-3.37-2.34-2.31-.3-2.54-.46-2.54-1 0-.45.2-1.05 1.91-1.05 1.5 0 2.09.33 2.32 1.36.02.1.11.17.21.17h.97c.05 0 .11-.02.15-.07.04-.04.07-.1.05-.16C17.56 8.82 16.38 8 14 8z" fill="currentColor" />
            </svg>
        ),
        html: (
            <svg className={size === "large" ? "w-16 h-16" : "w-8 h-8"} viewBox="0 0 24 24" fill="none">
                <path d="M12 17.56l-4.27-1.45-.3-3.37h2.09l.15 1.69 2.33.63 2.33-.63.24-2.7H9.53l-.18-2.03h5.1l.14-2.08H6.41l.53 6.03L12 17.56m6.21-11.48L17.3 18.3 12 19.9l-5.3-1.6-.91-12.22h12.42z" fill="currentColor" />
            </svg>
        ),
        css: (
            <svg className={size === "large" ? "w-16 h-16" : "w-8 h-8"} viewBox="0 0 24 24" fill="none">
                <path d="M5 3l-.65 3.34h13.59L17.5 8.5H3.92l-.66 3.33h13.59l-.76 3.81-5.48 1.81-4.75-1.81.33-1.64H2.85l-.79 4 7.85 3 9.05-3 1.2-6.03.24-1.21L21.94 3H5z" fill="currentColor" />
            </svg>
        ),
        java: (
            <svg className={size === "large" ? "w-16 h-16" : "w-8 h-8"} viewBox="0 0 24 24" fill="none">
                <path d="M8.851 18.56s-.917.534.653.714c1.902.218 2.874.187 4.969-.211 0 0 .552.346 1.321.646-4.699 2.013-10.633-.118-6.943-1.149M8.276 15.933s-1.028.761.542.924c2.032.209 3.636.227 6.413-.308 0 0 .384.389.987.602-5.679 1.661-12.007.13-7.942-1.218M13.116 11.475c1.158 1.333-.304 2.533-.304 2.533s2.939-1.518 1.589-3.418c-1.261-1.772-2.228-2.652 3.007-5.688 0-.001-8.216 2.051-4.292 6.573M19.33 20.504s.679.559-.747.991c-2.712.822-11.288 1.069-13.669.033-.856-.373.75-.89 1.254-.998.527-.114.828-.093.828-.093-.953-.671-6.156 1.317-2.643 1.887 9.58 1.553 17.462-.7 14.977-1.82M9.292 13.21s-4.362 1.036-1.544 1.412c1.189.159 3.561.123 5.77-.062 1.806-.152 3.618-.477 3.618-.477s-.637.272-1.098.587c-4.429 1.165-12.986.623-10.522-.568 2.082-1.006 3.776-.892 3.776-.892M17.116 17.584c4.503-2.34 2.421-4.589.968-4.285-.355.074-.515.138-.515.138s.132-.207.385-.297c2.875-1.011 5.086 2.981-.928 4.562 0-.001.07-.062.09-.118M14.401 0s2.494 2.494-2.365 6.33c-3.896 3.077-.888 4.832-.001 6.836-2.274-2.053-3.943-3.858-2.824-5.539 1.644-2.469 6.197-3.665 5.19-7.627M9.734 23.924c4.322.277 10.959-.153 11.116-2.198 0 0-.302.775-3.572 1.391-3.688.694-8.239.613-10.937.168 0-.001.553.457 3.393.639" fill="currentColor" />
            </svg>
        ),
        python: (
            <svg className={size === "large" ? "w-16 h-16" : "w-8 h-8"} viewBox="0 0 24 24" fill="none">
                <path d="M9.585 11.692h4.328s2.432.039 2.432-2.35V5.391S16.714 3 11.936 3C7.362 3 7.647 3 7.647 3L7.608 5.8h4.399v.638H5.54s-2.788-.318-2.788 4.657 0 4.27 0 4.27h1.669v-2.354s-.089-2.319 2.283-2.319M19.5 11.705h-1.668v2.354s.09 2.32-2.283 2.32H10.88s-2.432-.04-2.432 2.35v3.951s-.369 2.39 4.409 2.39c4.573 0 4.288 0 4.288 0l.039-2.8h-4.4v-.637h6.787s2.788.318 2.788-4.657c.001-4.976.001-4.271.001-4.271M12.5 19.438c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2M11.5 4.562c.662 0 1.2.538 1.2 1.2 0 .662-.538 1.2-1.2 1.2-.662 0-1.2-.538-1.2-1.2 0-.662.538-1.2 1.2-1.2" fill="currentColor" />
            </svg>
        ),
    };

    return (
        <div className="text-cyan-400">
            {iconMap[icon] || iconMap.js}
        </div>
    );
};

// Glass Panel Skill Card Component
const GlassPanelSkill = ({ skill, index, delay = 0 }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className="relative group"
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: delay + index * 0.1, duration: 0.6 }}
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
        >
            {/* Glass panel with border */}
            <motion.div
                className="relative bg-slate-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 overflow-hidden"
                whileHover={{
                    borderColor: "rgba(34, 211, 238, 0.6)",
                    boxShadow: "0 0 30px rgba(34, 211, 238, 0.2)",
                }}
                transition={{ duration: 0.3 }}
            >
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 via-transparent to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-cyan-500/20 to-transparent rounded-bl-full blur-2xl" />

                {/* Content */}
                <div className="relative z-10">
                    {/* Icon */}
                    <motion.div
                        className="mb-4 flex justify-center"
                        animate={isHovered ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        <SkillIcon icon={skill.icon} />
                    </motion.div>

                    {/* Skill Name */}
                    <h3 className="text-2xl font-bold text-white mb-2 text-center">
                        {skill.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm text-center mb-4 leading-relaxed">
                        {skill.oneLiner}
                    </p>

                    {/* Certification Badge */}
                    <div className="flex justify-center">
                        <span className="inline-block bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs px-3 py-1 rounded-full">
                            {skill.source}
                        </span>
                    </div>

                    {/* Supporting skills badges */}
                    {skill.supporting && skill.supporting.length > 0 && (
                        <motion.div
                            className="mt-4 flex flex-wrap gap-2 justify-center"
                            initial={{ opacity: 0, height: 0 }}
                            animate={isHovered ? { opacity: 1, height: 'auto' } : { opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {skill.supporting.map((item, idx) => (
                                <span
                                    key={idx}
                                    className="bg-purple-500/10 border border-purple-500/30 text-purple-300 text-xs px-2 py-1 rounded-full"
                                >
                                    {item}
                                </span>
                            ))}
                        </motion.div>
                    )}
                </div>

                {/* Subtle waveform at bottom */}
                <div className="absolute bottom-0 left-0 right-0 h-12 opacity-20">
                    <svg viewBox="0 0 200 20" className="w-full h-full">
                        <motion.path
                            d="M0 10 Q 25 5, 50 10 T 100 10 T 150 10 T 200 10"
                            stroke="currentColor"
                            strokeWidth="0.5"
                            fill="none"
                            className="text-cyan-400"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, ease: "easeInOut" }}
                        />
                    </svg>
                </div>
            </motion.div>
        </motion.div>
    );
};

// Orbital Skill Component (for supporting skills around main planet)
const OrbitalSkill = ({ name, angle, radius }) => {
    return (
        <motion.div
            className="absolute"
            style={{
                left: '50%',
                top: '50%',
            }}
            animate={{
                rotate: 360,
            }}
            transition={{
                duration: 20 + angle,
                repeat: Infinity,
                ease: "circInOut",
            }}
        >
            <div
                className="absolute bg-slate-800/80 backdrop-blur-sm border border-cyan-500/40 rounded-full px-3 py-1.5 whitespace-nowrap"
                style={{
                    left: `${radius * Math.cos((angle * Math.PI) / 180)}px`,
                    top: `${radius * Math.sin((angle * Math.PI) / 180)}px`,
                    transform: 'translate(-50%, -50%)',
                }}
            >
                <span className="text-cyan-300 text-sm font-medium">{name}</span>
            </div>
        </motion.div>
    );
};

// Central Planet with orbiting skills
const CentralPlanet = ({ supportingSkills }) => {
    return (
        <div className="relative w-full max-w-2xl mx-auto h-96 flex items-center justify-center mb-16">
            {/* Central planet */}
            <motion.div
                className="relative w-48 h-48 rounded-full bg-gradient-to-br from-cyan-600/40 via-blue-600/30 to-purple-600/40 backdrop-blur-xl border-2 border-cyan-400/50 flex items-center justify-center shadow-2xl"
                animate={{
                    boxShadow: [
                        "0 0 40px rgba(34, 211, 238, 0.4)",
                        "0 0 60px rgba(34, 211, 238, 0.6)",
                        "0 0 40px rgba(34, 211, 238, 0.4)",
                    ],
                }}
                transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            >
                {/* Inner glow */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-400/20 to-blue-600/20 blur-xl" />

                {/* Planet rings */}
                <motion.div
                    className="absolute inset-0 rounded-full border-2 border-cyan-400/20"
                    style={{ transform: 'scale(1.3)' }}
                    animate={{ rotate: 360 }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    <div className="absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent" />
                </motion.div>

                <div className="relative z-10 text-center">
                    <h3 className="text-white text-2xl font-bold mb-1">Languages & Frame Works</h3>
                    <p className="text-cyan-300 text-sm">Tools</p>
                </div>
            </motion.div>

            {/* Orbiting skills */}
            {supportingSkills.map((skill, index) => (
                <OrbitalSkill
                    key={skill.name}
                    name={skill.name}
                    angle={(360 / supportingSkills.length) * index}
                    radius={180}
                />
            ))}
        </div>

    );
};

// Current Mission Panel (like in reference)
const CurrentMissionPanel = ({ learning }) => {
    return (
        <motion.div
            className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-2xl p-6 mb-12"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
        >
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-cyan-400 text-xl font-bold">Current Mission</h3>
                <div className="w-12 h-12 rounded-full border-4 border-cyan-500/30 relative">
                    <motion.div
                        className="absolute inset-0 rounded-full border-4 border-cyan-500"
                        style={{
                            borderRightColor: 'transparent',
                            borderBottomColor: 'transparent',
                        }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center text-cyan-400 text-xs font-bold">
                        {learning.progress}%
                    </div>
                </div>
            </div>

            <div className="mb-3">
                <h4 className="text-white text-lg font-semibold mb-2">
                    Exploring {learning.name}
                </h4>
                <p className="text-cyan-300 text-sm mb-3">{learning.progress}% Completed</p>

                {/* Progress bar */}
                <div className="relative w-full h-2 bg-slate-700/50 rounded-full overflow-hidden">
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${learning.progress}%` }}
                        transition={{ duration: 1.5, ease: "easeOut", delay: 0.8 }}
                    />
                    <motion.div
                        className="absolute inset-y-0 left-0 bg-gradient-to-r from-transparent via-white/30 to-transparent w-1/4"
                        animate={{ x: ['0%', '400%'] }}
                        transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />
                </div>
            </div>

            {/* Mini chart visualization */}
            <div className="h-16 flex items-end gap-1 opacity-50">
                {Array.from({ length: 20 }).map((_, i) => (
                    <motion.div
                        key={i}
                        className="flex-1 bg-gradient-to-t from-cyan-500 to-blue-500 rounded-t"
                        initial={{ height: 0 }}
                        animate={{ height: `${Math.random() * 100}%` }}
                        transition={{
                            duration: 0.5,
                            delay: i * 0.05,
                            repeat: Infinity,
                            repeatType: "reverse",
                            repeatDelay: 1,
                        }}
                    />
                ))}
            </div>
        </motion.div>
    );
};

// Course Card Component
const CourseCard = ({ course, index }) => {
    return (
        <motion.div
            className="bg-slate-900/40 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-5 hover:border-cyan-400/60 transition-all group"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1, duration: 0.4 }}
            whileHover={{
                y: -5,
                boxShadow: "0 10px 30px rgba(34, 211, 238, 0.2)",
            }}
        >
            <div className="relative">
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-transparent rounded-bl-3xl" />
                <h4 className="text-white font-semibold text-lg mb-2">{course.name}</h4>
                <p className="text-cyan-400 text-sm">{course.provider}</p>

                {/* Completion checkmark */}
                <div className="mt-3 flex items-center gap-2 text-green-400 text-sm">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Completed</span>
                </div>
            </div>
        </motion.div>
    );
};

// Main Component
const SpacefolioSkills = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white overflow-hidden">
            <EnhancedStarField />

            <div className="relative z-10 px-4 py-16 max-w-7xl mx-auto">
                {/* Header */}

                {/* Core Skills Grid */}
                <motion.div
                    className="text-center mb-20"
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <motion.h1
                        className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent"
                        animate={{
                            backgroundPosition: ['0%', '100%', '0%'],
                        }}
                        transition={{
                            duration: 5,
                            repeat: Infinity,
                            ease: "linear",
                        }}
                    >
                        SKILLS UNIVERSE
                    </motion.h1>
                    <p className="text-gray-400 text-lg">Exploring the cosmos of technology</p>
                </motion.div>

                <motion.div
                    className="mb-20"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">
                        Core Technologies
                    </h2>

                    <OrbitCoreSkills skills={skillsData.coreSkills} />
                </motion.div>

                {/* Central Planet with Supporting Skills */}


                {/* Current Mission */}
                {skillsData.currentlyLearning.map((learning, idx) => (
                    <CurrentMissionPanel key={idx} learning={learning} />
                ))}

                <CentralPlanet supportingSkills={skillsData.supportingSkills} />


                {/* Courses Completed */}
                <motion.div
                    className="mb-16"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.7 }}
                >
                    <h2 className="text-4xl font-bold mb-8 text-center text-cyan-400">
                        Completed Courses
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {skillsData.courses.map((course, idx) => (
                            <CourseCard key={idx} course={course} index={idx} />
                        ))}
                    </div>
                </motion.div>

                {/* Certificates CTA */}
                <motion.div
                    className="text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9 }}
                >
                    <motion.a
                        href={skillsData.certificates.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block relative group"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl blur-xl opacity-50 group-hover:opacity-75 transition-opacity" />
                        <div className="relative bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-bold py-4 px-10 rounded-xl border-2 border-cyan-400 shadow-2xl">
                            <span className="text-xl flex items-center gap-3">
                                <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                                </svg>
                                {skillsData.certificates.label}
                            </span>
                        </div>
                    </motion.a>
                </motion.div>
            </div>
        </div>
    );
};

export default SpacefolioSkills;