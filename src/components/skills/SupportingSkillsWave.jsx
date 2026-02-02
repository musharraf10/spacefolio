import React, { useState } from 'react';

const SupportingSkill = ({ skills, onSelect }) => {
    const [hoveredSkill, setHoveredSkill] = useState(null);

    const planetSize = 50; // Fixed smaller size for supporting skills

    // Generate lighter wave path
    const generateSupportWavePath = (width, height, rowIndex = 0) => {
        const amplitude = 25;
        const frequency = 2;
        const offset = rowIndex * 20; // Offset for second row
        const points = [];

        for (let i = 0; i <= 100; i++) {
            const x = (i / 100) * width;
            const y = height / 2 + offset + Math.sin((i / 100) * Math.PI * frequency) * amplitude;
            points.push(`${x},${y}`);
        }

        return `M ${points.join(' L ')}`;
    };

    // Calculate positions for skills
    const getSkillPositions = (skillsList, width, height, rowIndex = 0) => {
        const positions = [];
        const amplitude = 25;
        const frequency = 2;
        const offset = rowIndex * 20;

        for (let i = 0; i < skillsList.length; i++) {
            const progress = (i + 1) / (skillsList.length + 1);
            const x = progress * width;
            const y = height / 2 + offset + Math.sin(progress * Math.PI * frequency) * amplitude;
            positions.push({ x, y });
        }

        return positions;
    };

    // Split skills into rows if needed (max 7 per row for better spacing)
    const maxPerRow = 7;
    const row1 = skills.slice(0, maxPerRow);
    const row2 = skills.slice(maxPerRow);

    const handleInteraction = (skillName) => {
        setHoveredSkill(skillName);
        if (onSelect) onSelect(skillName);
    };

    return (
        <div className="w-full py-8 px-4">
            <div className="max-w-6xl mx-auto">
                {/* Desktop/Tablet View */}
                <div className="hidden md:block">
                    <svg
                        viewBox={`0 0 1000 ${row2.length > 0 ? 250 : 150}`}
                        className="w-full h-auto"
                    >
                        <defs>
                            {/* Lighter gradient for supporting wave */}
                            <linearGradient id="supportWaveGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#64748b" stopOpacity="0.2" />
                                <stop offset="50%" stopColor="#94a3b8" stopOpacity="0.4" />
                                <stop offset="100%" stopColor="#64748b" stopOpacity="0.2" />
                            </linearGradient>

                            {/* Subtle glow for supporting skills */}
                            <filter id="supportGlow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>

                            <radialGradient id="supportPlanetGradient">
                                <stop offset="0%" stopColor="#334155" />
                                <stop offset="100%" stopColor="#1e293b" />
                            </radialGradient>
                        </defs>

                        {/* First row wave path */}
                        <path
                            d={generateSupportWavePath(1000, row2.length > 0 ? 120 : 150, 0)}
                            fill="none"
                            stroke="url(#supportWaveGradient)"
                            strokeWidth="1.5"
                            opacity={hoveredSkill ? "0.6" : "0.3"}
                            className="transition-opacity duration-300"
                        />

                        {/* First row planets */}
                        {getSkillPositions(row1, 1000, row2.length > 0 ? 120 : 150, 0).map((pos, index) => {
                            const skill = row1[index];
                            const isHovered = hoveredSkill === skill;

                            return (
                                <g
                                    key={`row1-${skill}`}
                                    transform={`translate(${pos.x}, ${pos.y})`}
                                    onMouseEnter={() => handleInteraction(skill)}
                                    onMouseLeave={() => setHoveredSkill(null)}
                                    className="cursor-pointer transition-transform duration-200"
                                >
                                    {/* Planet glow */}
                                    <circle
                                        r={planetSize / 2}
                                        fill="#64748b"
                                        opacity={isHovered ? "0.3" : "0.15"}
                                        filter="url(#supportGlow)"
                                    />

                                    {/* Planet body */}
                                    <circle
                                        r={planetSize / 2 - 3}
                                        fill="url(#supportPlanetGradient)"
                                        stroke={isHovered ? '#94a3b8' : '#475569'}
                                        strokeWidth={isHovered ? '2' : '1.5'}
                                        className="transition-all duration-200"
                                    />

                                    {/* Skill abbreviation */}
                                    <text
                                        textAnchor="middle"
                                        dy=".3em"
                                        fill={isHovered ? '#e2e8f0' : '#cbd5e1'}
                                        fontSize="12"
                                        fontWeight="600"
                                        className="select-none transition-colors duration-200"
                                    >
                                        {skill.length > 6 ? skill.slice(0, 4) : skill}
                                    </text>

                                    {/* Skill name below (appears on hover) */}
                                    {isHovered && (
                                        <text
                                            textAnchor="middle"
                                            y={planetSize / 2 + 18}
                                            fill="#cbd5e1"
                                            fontSize="11"
                                            fontWeight="500"
                                            className="select-none"
                                        >
                                            {skill}
                                        </text>
                                    )}
                                </g>
                            );
                        })}

                        {/* Second row (if needed) */}
                        {row2.length > 0 && (
                            <>
                                <path
                                    d={generateSupportWavePath(1000, 120, 1)}
                                    fill="none"
                                    stroke="url(#supportWaveGradient)"
                                    strokeWidth="1.5"
                                    opacity={hoveredSkill ? "0.6" : "0.3"}
                                    className="transition-opacity duration-300"
                                />

                                {getSkillPositions(row2, 1000, 120, 1).map((pos, index) => {
                                    const skill = row2[index];
                                    const isHovered = hoveredSkill === skill;

                                    return (
                                        <g
                                            key={`row2-${skill}`}
                                            transform={`translate(${pos.x}, ${pos.y + 100})`}
                                            onMouseEnter={() => handleInteraction(skill)}
                                            onMouseLeave={() => setHoveredSkill(null)}
                                            className="cursor-pointer transition-transform duration-200"
                                        >
                                            <circle
                                                r={planetSize / 2}
                                                fill="#64748b"
                                                opacity={isHovered ? "0.3" : "0.15"}
                                                filter="url(#supportGlow)"
                                            />

                                            <circle
                                                r={planetSize / 2 - 3}
                                                fill="url(#supportPlanetGradient)"
                                                stroke={isHovered ? '#94a3b8' : '#475569'}
                                                strokeWidth={isHovered ? '2' : '1.5'}
                                                className="transition-all duration-200"
                                            />

                                            <text
                                                textAnchor="middle"
                                                dy=".3em"
                                                fill={isHovered ? '#e2e8f0' : '#cbd5e1'}
                                                fontSize="12"
                                                fontWeight="600"
                                                className="select-none transition-colors duration-200"
                                            >
                                                {skill.length > 6 ? skill.slice(0, 4) : skill}
                                            </text>

                                            {isHovered && (
                                                <text
                                                    textAnchor="middle"
                                                    y={planetSize / 2 + 18}
                                                    fill="#cbd5e1"
                                                    fontSize="11"
                                                    fontWeight="500"
                                                    className="select-none"
                                                >
                                                    {skill}
                                                </text>
                                            )}
                                        </g>
                                    );
                                })}
                            </>
                        )}
                    </svg>
                </div>

                {/* Mobile View - Compact grid with subtle waves */}
                <div className="md:hidden">
                    <div className="grid grid-cols-3 gap-4 px-2">
                        {skills.map((skill, index) => {
                            const isHovered = hoveredSkill === skill;

                            return (
                                <div
                                    key={skill}
                                    className="flex flex-col items-center"
                                    onClick={() => handleInteraction(skill)}
                                    style={{
                                        marginTop: index % 2 === 0 ? '0' : '12px'
                                    }}
                                >
                                    <svg viewBox="0 0 80 80" className="w-16 h-16">
                                        <defs>
                                            <radialGradient id={`mobilePlanet-${index}`}>
                                                <stop offset="0%" stopColor="#334155" />
                                                <stop offset="100%" stopColor="#1e293b" />
                                            </radialGradient>
                                        </defs>

                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="28"
                                            fill="#64748b"
                                            opacity="0.2"
                                        />
                                        <circle
                                            cx="40"
                                            cy="40"
                                            r="25"
                                            fill={`url(#mobilePlanet-${index})`}
                                            stroke={isHovered ? '#94a3b8' : '#475569'}
                                            strokeWidth="1.5"
                                        />
                                        <text
                                            x="40"
                                            y="40"
                                            textAnchor="middle"
                                            dy=".3em"
                                            fill="#cbd5e1"
                                            fontSize="10"
                                            fontWeight="600"
                                        >
                                            {skill.length > 6 ? skill.slice(0, 4) : skill}
                                        </text>
                                    </svg>

                                    <p className="text-xs text-slate-400 mt-1 text-center">
                                        {skill}
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SupportingSkill;