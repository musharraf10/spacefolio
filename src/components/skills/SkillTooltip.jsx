import { motion } from "framer-motion";

export default function SkillTooltip({ skill }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute -top-24 left-1/2 -translate-x-1/2 w-56 bg-slate-900/80 backdrop-blur-xl border border-cyan-500/30 rounded-xl p-4 text-center z-50"
        >
            <h4 className="text-white font-semibold">{skill.name}</h4>
            <p className="text-cyan-300 text-xs mt-1">{skill.oneLiner}</p>
            <span className="inline-block mt-2 text-[10px] px-2 py-1 rounded-full bg-cyan-500/10 border border-cyan-400/30 text-cyan-400">
                {skill.source}
            </span>
        </motion.div>
    );
}
