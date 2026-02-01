import { useNavigate, useLocation } from "react-router-dom";
import { contextCommands } from "./contextCommands";
import { speak } from "./useSpeech";

export default function BotPanel({ onClose }) {
    const navigate = useNavigate();
    const location = useLocation();

    const commands =
        contextCommands[location.pathname] ||
        contextCommands["/"] ||
        [];

    return (
        <div
            className="fixed bottom-28 right-6 z-50
      w-64 bg-black/80 backdrop-blur
      border border-cyan-400/30
      rounded-xl p-4 text-white"
        >
            <div className="mb-3 font-semibold">
                I can help you navigate
            </div>

            <div className="flex flex-col gap-2">
                {commands.map((cmd) => (
                    <button
                        key={cmd.label}
                        onClick={() => {
                            speak(cmd.speak);
                            navigate(cmd.route);
                            onClose();
                        }}
                        className="text-left px-3 py-2 rounded
              bg-white/10 hover:bg-white/20 transition"
                    >
                        {cmd.label}
                    </button>
                ))}
            </div>
        </div>
    );
}
