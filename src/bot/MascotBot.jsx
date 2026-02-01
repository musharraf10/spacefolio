import { motion, useAnimation } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { speak } from "./useSpeech";

const MascotBot = ({ target, planet, voiceEnabled }) => {
    const controls = useAnimation();
    const botRef = useRef(null);
    const [mood, setMood] = useState("idle");
    const [speaking, setSpeaking] = useState(false);

    // FOLLOW (already working)
    useEffect(() => {
        if (!target || !botRef.current) return;

        const botRect = botRef.current.getBoundingClientRect();

        controls.start({
            left: target.x - botRect.width / 2 + 60,
            top: target.y - botRect.height / 2 - 60,
            transition: { type: "spring", stiffness: 140, damping: 20 },
        });
    }, [target]);

    // SPEAK when planet changes
    useEffect(() => {
        if (!planet?.script) return;

        setMood("thinking");

        const t = setTimeout(() => {
            speak(
                planet.script,
                () => {
                    setMood("speaking");
                    setSpeaking(true);
                },
                () => {
                    setSpeaking(false);
                    setMood("idle");
                },
                voiceEnabled
            );
        }, 400); // thinking pause

        return () => clearTimeout(t);
    }, [planet]);

    useEffect(() => {
        if (!voiceEnabled) {
            window.speechSynthesis.cancel();
            setSpeaking(false);
            setMood("idle");
        }
    }, [voiceEnabled]);



    return (
        <motion.div
            ref={botRef}
            animate={controls}
            initial={{ left: 20, top: window.innerHeight - 140 }}
            className="fixed z-50"
            drag
            dragMomentum={false}
        >
            {/* BODY */}
            <motion.div
                className="relative w-10 h-10 md:w-14 md:h-14 rounded-full
                   bg-gradient-to-br from-secondary to-secondary-light
                   shadow-lg flex items-center justify-center"
            >
                {/* FACE */}
                <div className="relative w-7 h-7 md:w-8 md:h-8 rounded-full bg-accent/95">

                    {/* Eyes */}
                    {/* Eyes */}
                    <div className="absolute top-[38%] left-1/2 -translate-x-1/2 flex gap-1">
                        <motion.span
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                            animate={
                                mood === "speaking"
                                    ? { scaleY: 0.6 }
                                    : mood === "thinking"
                                        ? { y: [-1, 1, -1] }
                                        : { scaleY: [1, 0.1, 1] }
                            }
                            transition={
                                mood === "idle"
                                    ? { duration: 4, repeat: Infinity, repeatDelay: 3 }
                                    : { duration: 0.6, repeat: Infinity }
                            }
                        />
                        <motion.span
                            className="w-1.5 h-1.5 bg-primary rounded-full"
                            animate={
                                mood === "speaking"
                                    ? { scaleY: 0.6 }
                                    : mood === "thinking"
                                        ? { y: [1, -1, 1] }
                                        : { scaleY: [1, 0.1, 1] }
                            }
                            transition={
                                mood === "idle"
                                    ? { duration: 4, repeat: Infinity, repeatDelay: 3 }
                                    : { duration: 0.6, repeat: Infinity }
                            }
                        />
                    </div>


                    {/* Mouth */}
                    <motion.div
                        className="absolute top-[68%] left-1/3 -translate-x-1/2
             w-2.5 h-[2px] bg-primary/70 rounded-full
             origin-center"
                        animate={
                            mood === "speaking"
                                ? {
                                    scaleY: [1, 2.2, 0.9, 2, 1],
                                    scaleX: [1, 1.12, 0.96, 1.08, 1],
                                }
                                : mood === "thinking"
                                    ? { scaleX: 0.8 }
                                    : { scaleX: 1, scaleY: 1 }
                        }
                        transition={{
                            duration: 0.5,
                            repeat: mood === "speaking" ? Infinity : 0,
                            ease: "easeInOut",
                        }}
                    />


                </div>

                {/* Glow */}
                <div className="absolute -inset-3 rounded-full bg-secondary/25 blur-lg" />
            </motion.div>
        </motion.div>
    );
};

export default MascotBot;
