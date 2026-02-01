import PlanetCarousel from "../components/planet/PlanetCarousel";
import { planets } from "../data/planets"
export default function Home() {
    return <><PlanetCarousel planets={planets} /></>;
}
