import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { speak, onBotSpeakingChange } from "./useBotSpeech";

export default function BotAvatar({ script, onToggle, anchor }) {
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [blink, setBlink] = useState(false);
    const [isMoving, setIsMoving] = useState(false);
    const prevAnchor = useRef(null);

    useEffect(() => {
        onBotSpeakingChange(setIsSpeaking);
    }, []);

    useEffect(() => {
        if (!anchor) return;

        if (
            prevAnchor.current &&
            (prevAnchor.current.x !== anchor.x ||
                prevAnchor.current.y !== anchor.y)
        ) {
            setIsMoving(true);
            setTimeout(() => setIsMoving(false), 600);
        }

        prevAnchor.current = anchor;
    }, [anchor]);


    useEffect(() => {
        const i = setInterval(() => {
            setBlink(true);
            setTimeout(() => setBlink(false), 150);
        }, 4000);
        return () => clearInterval(i);
    }, []);

    return (
        <motion.div
            className="fixed z-50 pointer-events-auto"
            initial={false}
            animate={{
                x: anchor?.x ?? window.innerWidth - 96,
                y: anchor?.y ?? window.innerHeight - 96,
            }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 18,
            }}
        >


            <button
                onClick={() => {
                    onToggle?.();
                    script && speak(script);
                }}
                className="w-20 h-20 rounded-full bg-cyan-400
        flex items-center justify-center shadow-xl"
            >
                {/* face */}
                <div className="flex flex-col items-center">
                    <div className="flex gap-2 mb-1">
                        <div className={`w-3 bg-black rounded-full ${blink ? "h-1" : "h-3"}`} />
                        <div className={`w-3 bg-black rounded-full ${blink ? "h-1" : "h-3"}`} />
                    </div>

                    <motion.div
                        animate={{ height: isSpeaking ? [4, 10, 4] : 4 }}
                        transition={{ duration: 0.25, repeat: isSpeaking ? Infinity : 0 }}
                        className="w-6 bg-black rounded"
                    />
                </div>
            </button>
        </motion.div>
    );
}
