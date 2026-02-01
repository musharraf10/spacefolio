import { motion } from "framer-motion";
import { forwardRef } from "react";

const PlanetCard = forwardRef(({ planet, offset, onSelect }, ref) => {
    if (!planet) return null;

    const distance = Math.abs(offset);

    const scale = distance === 0 ? 1.15 : distance === 1 ? 0.9 : 0.75;
    const y = distance === 0 ? 0 : distance === 1 ? 18 : 36;
    const opacity = distance === 0 ? 1 : distance === 1 ? 0.7 : 0.4;

    return (
        <motion.div
            ref={distance === 0 ? ref : null} // 👈 only active planet
            onClick={() => distance === 0 && onSelect?.(planet)}
            className="flex flex-col items-center cursor-pointer"
            animate={{ scale, y, opacity }}
            transition={{ duration: 0.35 }}
        >
            {/* globe */}
            <div className="relative w-28 h-28 rounded-full overflow-hidden shadow-2xl">
                <img
                    src={planet.textureUrl}
                    alt={planet.title}
                    className="w-full h-full object-cover"
                    draggable={false}
                />
            </div>

            <div className="text-white mt-3 text-sm font-medium">
                {planet.title}
            </div>
        </motion.div>
    );
});

export default PlanetCard;
