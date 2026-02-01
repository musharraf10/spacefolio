import { projectsContent } from "../data/projectsContent";

export default function Projects() {
    return (
        <div className="min-h-screen bg-black text-white p-8">
            <h1 className="text-3xl font-bold mb-4">
                {projectsContent.title}
            </h1>

            <p className="mb-6 opacity-80">
                {projectsContent.intro}
            </p>

            {projectsContent.projects.map(p => (
                <div
                    key={p.name}
                    className="mb-4 p-4 border border-white/10 rounded"
                >
                    <h3 className="font-semibold">{p.name}</h3>
                    <p className="opacity-80">{p.description}</p>
                </div>
            ))}
        </div>
    );
}
