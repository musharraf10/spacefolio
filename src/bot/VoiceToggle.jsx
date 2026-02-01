import { motion } from "framer-motion";
import { FiVolume2, FiVolumeX } from "react-icons/fi";

const VoiceToggle = ({ enabled, onToggle }) => {
    return (
        <motion.button
            onClick={onToggle}
            whileTap={{ scale: 0.9 }}
            whileHover={{ scale: 1.05 }}
            className="fixed bottom-6 left-6 z-50
                 w-11 h-11 rounded-full
                 bg-primary-light/80 backdrop-blur-md
                 border border-secondary
                 flex items-center justify-center
                 text-accent shadow-lg"
            aria-label="Toggle voice"
        >
            {enabled ? <FiVolume2 size={18} /> : <FiVolumeX size={18} />}
        </motion.button>
    );
};

export default VoiceToggle;
