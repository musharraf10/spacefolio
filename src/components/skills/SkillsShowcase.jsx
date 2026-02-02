import React, { useState } from 'react';
import SupportingSkillsWave from './SupportingSkillsWave.jsx';
import CoreskillsWave from "./OrbitCoreSkills.jsx";
import { skillsData } from "../../data/skillsContent.js"


const SkillsShowcase = () => {
    const [selectedCoreSkill, setSelectedCoreSkill] = useState(null);
    const [selectedSupportSkill, setSelectedSupportSkill] = useState(null);

    return (
        <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
            {/* Header */}
            <div className="container mx-auto px-4 pt-12 pb-6">
                <h1 className="text-4xl md:text-5xl font-bold text-center mb-3 bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Skills Galaxy
                </h1>
                <p className="text-center text-slate-400 text-lg max-w-2xl mx-auto">
                    Navigate through my technical universe — each planet represents a skill in my constellation
                </p>
            </div>

            {/* Core Skills Section */}
            <section className="container mx-auto px-4 py-8">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-blue-300 mb-2">
                        Core Capabilities
                    </h2>
                    <p className="text-slate-400">
                        The foundation of my technical expertise
                    </p>
                </div>

                <CoreskillsWave
                    skills={skillsData.coreCapabilities}
                    onSelect={setSelectedCoreSkill}
                />

                {/* Core Skill Detail Panel */}
                {selectedCoreSkill && (
                    <div className="max-w-3xl mx-auto mt-8 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700">
                        <div className="flex items-start justify-between mb-4">
                            <div>
                                <h3 className="text-2xl font-bold text-blue-300 mb-1">
                                    {selectedCoreSkill.name}
                                </h3>
                                <p className="text-slate-400 italic">{selectedCoreSkill.role}</p>
                            </div>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${selectedCoreSkill.confidence === 'high'
                                ? 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                : 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                }`}>
                                {selectedCoreSkill.confidence === 'high' ? 'High Confidence' : 'Medium Confidence'}
                            </span>
                        </div>

                        <p className="text-slate-300 mb-4">{selectedCoreSkill.summary}</p>

                        <div className="grid md:grid-cols-2 gap-4">
                            <div>
                                <h4 className="text-sm font-semibold text-slate-400 mb-2">Usage Areas</h4>
                                <ul className="space-y-1">
                                    {selectedCoreSkill.usage.map((use, i) => (
                                        <li key={i} className="text-slate-300 text-sm flex items-center">
                                            <span className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-2"></span>
                                            {use}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {selectedCoreSkill.ecosystem.length > 0 && (
                                <div>
                                    <h4 className="text-sm font-semibold text-slate-400 mb-2">Ecosystem</h4>
                                    <ul className="space-y-1">
                                        {selectedCoreSkill.ecosystem.map((eco, i) => (
                                            <li key={i} className="text-slate-300 text-sm flex items-center">
                                                <span className="w-1.5 h-1.5 bg-purple-400 rounded-full mr-2"></span>
                                                {eco}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </section>

            {/* Divider */}
            <div className="container mx-auto px-4 py-8">
                <div className="h-px bg-gradient-to-r from-transparent via-slate-600 to-transparent"></div>
            </div>

            {/* Supporting Skills Section */}
            <section className="container mx-auto px-4 py-8 pb-16">
                <div className="text-center mb-6">
                    <h2 className="text-2xl md:text-3xl font-semibold text-purple-300 mb-2">
                        Supporting Stack
                    </h2>
                    <p className="text-slate-400">
                        Tools and technologies that complement my workflow
                    </p>
                </div>

                <SupportingSkillsWave
                    skills={skillsData.supportingStack}
                    onSelect={setSelectedSupportSkill}
                />

                {/* Supporting Skill Display */}
                {selectedSupportSkill && (
                    <div className="max-w-xl mx-auto mt-8 p-4 bg-slate-800/50 backdrop-blur-sm rounded-lg border border-slate-700 text-center">
                        <h3 className="text-xl font-bold text-purple-300 mb-1">
                            {selectedSupportSkill}
                        </h3>
                        <p className="text-slate-400 text-sm">
                            Supporting technology in my development toolkit
                        </p>
                    </div>
                )}
            </section>

            {/* Learning Journey Footer */}
            <section className="container mx-auto px-4 py-8 border-t border-slate-800">
                <div className="max-w-4xl mx-auto">
                    <h3 className="text-xl font-semibold text-center mb-6 text-slate-300">
                        Currently Learning
                    </h3>

                    <div className="grid md:grid-cols-2 gap-6">
                        {/* Learning Trajectory */}
                        <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-700">
                            <h4 className="text-lg font-semibold text-green-400 mb-3">
                                In Progress
                            </h4>
                            {skillsData.learningTrajectory.map((item, i) => (
                                <div key={i} className="mb-3">
                                    <p className="font-medium text-slate-200">{item.name}</p>
                                    <p className="text-sm text-slate-400">{item.focus}</p>
                                    <p className="text-xs text-slate-500 mt-1">via {item.source}</p>
                                </div>
                            ))}
                        </div>

                        {/* Education Sources */}
                        <div className="bg-slate-800/30 rounded-lg p-5 border border-slate-700">
                            <h4 className="text-lg font-semibold text-blue-400 mb-3">
                                Education Sources
                            </h4>
                            <ul className="space-y-2">
                                {skillsData.educationSources.map((source, i) => (
                                    <li key={i} className="text-sm text-slate-300">
                                        <span className="font-medium">{source.name}</span>
                                        <span className="text-slate-500"> — {source.provider}</span>
                                    </li>
                                ))}
                            </ul>

                            <a
                                href={skillsData.certificates.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 px-4 py-2 bg-blue-500/20 hover:bg-blue-500/30 text-blue-300 rounded-lg text-sm font-medium transition-colors border border-blue-500/30"
                            >
                                {skillsData.certificates.label} →
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default SkillsShowcase;