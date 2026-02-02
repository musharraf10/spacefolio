import React from 'react';
import { motion } from 'framer-motion';

const JourneyCurve = ({ phases, scrollProgress }) => {
    const generateCurvePath = () => {
        const width = 1200;
        const height = phases.length * 400;
        const centerX = width / 2;
        const amplitude = 300;

        let path = `M ${centerX} 0`;

        phases.forEach((phase, index) => {
            const y = (index + 1) * 400;
            const direction = index % 2 === 0 ? 1 : -1;
            const x = centerX + (amplitude * direction);

            const controlY1 = y - 200;
            const controlY2 = y - 100;
            const controlX1 = centerX + (amplitude * direction * 0.3);
            const controlX2 = centerX + (amplitude * direction * 0.7);

            path += ` C ${controlX1} ${controlY1}, ${controlX2} ${controlY2}, ${x} ${y}`;
        });

        return path;
    };

    const calculatePhasePositions = () => {
        const positions = [];
        const centerX = 600;
        const amplitude = 300;

        phases.forEach((phase, index) => {
            const y = (index + 1) * 400;
            const direction = index % 2 === 0 ? 1 : -1;
            const x = centerX + (amplitude * direction);

            positions.push({ x, y, phase });
        });

        return positions;
    };

    const pathLength = phases.length * 400;
    const progressLength = (scrollProgress / 100) * pathLength;

    return (
        <svg
            className="w-full h-full"
            viewBox={`0 0 1200 ${phases.length * 400}`}
            preserveAspectRatio="xMidYMid meet"
        >
            <defs>
                <linearGradient id="pathGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#001D3D" stopOpacity="0.3" />
                    <stop offset="50%" stopColor="#1A1A2E" stopOpacity="0.5" />
                    <stop offset="100%" stopColor="#415A77" stopOpacity="0.3" />
                </linearGradient>

                <filter id="glow">
                    <feGaussianBlur stdDeviation="4" result="coloredBlur" />
                    <feMerge>
                        <feMergeNode in="coloredBlur" />
                        <feMergeNode in="SourceGraphic" />
                    </feMerge>
                </filter>
            </defs>

            {/* Background Path */}
            <motion.path
                d={generateCurvePath()}
                fill="none"
                stroke="url(#pathGradient)"
                strokeWidth="3"
                strokeLinecap="round"
                strokeDasharray="10 10"
                opacity="0.3"
            />

            {/* Animated Progress Path */}
            <motion.path
                d={generateCurvePath()}
                fill="none"
                stroke="#415A77"
                strokeWidth="4"
                strokeLinecap="round"
                filter="url(#glow)"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: scrollProgress / 100 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                style={{
                    pathLength: scrollProgress / 100,
                }}
            />

            {/* Phase Connection Points */}
            {calculatePhasePositions().map((pos, index) => {
                const isReached = (index + 1) * (100 / phases.length) <= scrollProgress;

                return (
                    <g key={pos.phase.id}>
                        {/* Outer Ring */}
                        <motion.circle
                            cx={pos.x}
                            cy={pos.y}
                            r="20"
                            fill="none"
                            stroke={isReached ? "#415A77" : "rgba(224,225,221,0.2)"}
                            strokeWidth="2"
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ delay: index * 0.2, duration: 0.5 }}
                        />

                        {/* Inner Circle */}
                        <motion.circle
                            cx={pos.x}
                            cy={pos.y}
                            r="12"
                            fill={isReached ? "#415A77" : "rgba(224,225,221,0.1)"}
                            initial={{ scale: 0 }}
                            animate={{ scale: isReached ? [1, 1.2, 1] : 1 }}
                            transition={{
                                delay: index * 0.2,
                                duration: 0.5,
                                repeat: isReached ? Infinity : 0,
                                repeatDelay: 1,
                            }}
                            filter={isReached ? "url(#glow)" : "none"}
                        />

                        {/* Phase Number */}
                        <text
                            x={pos.x}
                            y={pos.y + 5}
                            textAnchor="middle"
                            fill="#E0E1DD"
                            fontSize="12"
                            fontWeight="bold"
                            opacity={isReached ? 1 : 0.5}
                        >
                            {pos.phase.order}
                        </text>
                    </g>
                );
            })}

            {/* Animated Particles Along Path */}
            {[...Array(8)].map((_, i) => {
                const positions = calculatePhasePositions();
                const targetIndex = Math.floor((i / 8) * positions.length);
                const targetPos = positions[Math.min(targetIndex, positions.length - 1)];

                return (
                    <motion.circle
                        key={i}
                        cx={targetPos.x}
                        cy={targetPos.y}
                        r="3"
                        fill="#E0E1DD"
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0, 1, 0],
                            scale: [0.5, 1.5, 0.5],
                        }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            delay: i * 0.4,
                        }}
                    />
                );
            })}
        </svg>
    );
};

export default JourneyCurve;