import { motion } from "framer-motion";

export default function TransitionOverlay({ active }) {
    return (
        <motion.div
            className="absolute inset-0 pointer-events-none"
            initial={{ opacity: 0 }}
            animate={
                active
                    ? { opacity: 1 }
                    : { opacity: 0 }
            }
            transition={{ duration: 0.5 }}
            style={{
                background:
                    "radial-gradient(circle, rgba(255,255,255,0.25), rgba(255,255,255,0))",
                backdropFilter: active ? "blur(6px)" : "blur(0px)"
            }}
        />
    );
}
