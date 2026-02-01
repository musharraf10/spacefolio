import { motion } from "framer-motion";

export default function RocketSVG({ phase }) {
    const ignition = phase === "ignition" || phase === "launch";

    return (
        <svg width="80" height="140" viewBox="0 0 80 140">

            {/* Glow */}
            <motion.ellipse
                cx="40"
                cy="110"
                rx="10"
                ry="6"
                fill="#FDBA74"
                opacity={ignition ? 0.9 : 0}
                animate={{
                    scale: ignition ? [1, 1.6, 1.2] : 1
                }}
                transition={{
                    duration: 0.4
                }}
            />

            {/* Body */}
            <rect x="25" y="30" width="30" height="70" rx="15"
                fill="#E5E7EB" />

            {/* Nose */}
            <polygon points="40,5 55,30 25,30"
                fill="#F9FAFB" />

            {/* Window */}
            <circle cx="40" cy="55" r="6"
                fill="#38BDF8" />

            {/* Fins */}
            <polygon points="25,85 10,105 25,100" fill="#9CA3AF" />
            <polygon points="55,85 70,105 55,100" fill="#9CA3AF" />

            {/* Flame */}
            <motion.polygon
                points="40,100 32,125 48,125"
                fill="#F97316"
                animate={{
                    scaleY: ignition ? [1, 1.8, 1.2] : 1
                }}
                transition={{
                    duration: 0.25,
                    repeat: ignition ? Infinity : 0
                }}
            />
        </svg>
    );
}
