import { motion } from "framer-motion";
import RocketSVG from "./RocketSVG";

export function Rocket({ phase }) {
    return (
        <motion.div
            className="absolute bottom-10"
            animate={
                phase === "launch"
                    ? { y: -1000, scale: 0.92 }
                    : { y: [0, -10, 0] }
            }
            transition={
                phase === "launch"
                    ? { duration: 1.1, ease: "easeIn" }
                    : { duration: 2.2, repeat: Infinity }
            }
        >
            <RocketSVG phase={phase} />
        </motion.div>
    );
}
