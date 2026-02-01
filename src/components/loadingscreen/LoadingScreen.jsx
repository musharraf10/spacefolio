import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import StarBackground from "../StarBackground";
import { Rocket } from "./Rocket";

export default function LoadingScreen({ onFinish }) {
    const [phase, setPhase] = useState("idle");
    const [count, setCount] = useState(3);

    useEffect(() => {
        const seen = localStorage.getItem("seen_intro");
        if (seen) {
            onFinish();
            return;
        }

        const run = async () => {
            await wait(500);
            setPhase("countdown");

            for (let i = 3; i >= 1; i--) {
                setCount(i);
                await wait(600);
            }

            setPhase("launch");
            await wait(800);

            setPhase("warp")
            await wait(600)

            // localStorage.setItem("seen_intro", "true");
            onFinish();
        };

        run();
    }, []);

    return (
        <div className="fixed inset-0 bg-black overflow-hidden flex items-center justify-center">
            <StarBackground />

            {/* Countdown */}
            <AnimatePresence>
                {phase === "countdown" && (
                    <motion.div
                        key={count}
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0 }}
                        className="text-white text-6xl font-bold"
                    >
                        {count}
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Rocket */}
            <Rocket phase={phase} />
        </div>
    );
}

function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}
