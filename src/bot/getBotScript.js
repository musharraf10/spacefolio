import { planets } from "../data/planets";
import { skillsContent } from "../data/skillsContent";
import { projectsContent } from "../data/projectsContent";

export function getBotScript(pathname) {
  // planet-level scripts
  const planetMatch = planets.find((p) => p.route === pathname);
  if (planetMatch?.script) return planetMatch.script;

  // page-level scripts
  if (pathname === "/skills") return skillsContent.botScript;
  if (pathname === "/projects") return projectsContent.botScript;

  return null;
}
