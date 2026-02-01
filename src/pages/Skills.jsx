import { skillsContent } from "../data/skillsContent";
import { speak } from "../bot/useBotSpeech";

export default function Skills() {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <h1 className="text-3xl font-bold mb-6">
                {skillsContent.title}
            </h1>

            {skillsContent.sections.map(section => (
                <div
                    key={section.id}
                    className="mb-6 p-4 border border-white/10 rounded cursor-pointer"
                    onClick={() => speak(section.botScript)}
                >
                    <h2 className="text-xl font-semibold mb-2">
                        {section.heading}
                    </h2>

                    <ul className="list-disc ml-6 opacity-80">
                        {section.items.map(i => (
                            <li key={i}>{i}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
}
