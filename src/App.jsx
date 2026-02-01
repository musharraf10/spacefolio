import { Routes, Route } from 'react-router-dom'
import { useState, useEffect } from "react";
import Home from "./pages/Home";
import SpacefolioSkills from "./pages/Skills";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Connect from "./pages/Connect";
import MascotBot from "./bot/MascotBot";
// import StarsBackground from "./components/StarBackground"
import VoiceToggle from "./bot/VoiceToggle";

function App() {
  const [activePlanet, setActivePlanet] = useState(null);
  const [activePlanetPos, setActivePlanetPos] = useState(null);
  const [voiceEnabled, setVoiceEnabled] = useState(() => {
    return localStorage.getItem("voiceEnabled") !== "false";
  });

  const toggleVoice = () => {
    setVoiceEnabled(prev => {
      localStorage.setItem("voiceEnabled", !prev);
      return !prev;
    });
  };



  useEffect(() => {
    window.speechSynthesis.onvoiceschanged = () => {
      window.speechSynthesis.getVoices();
    };
  }, []);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     setScrollY(window.scrollY)
  //   }

  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])


  return (
    <div className="bg-space-dark">

      <Routes>
        <Route path="/" element={<Home
          onPlanetFocus={(planet, pos) => {
            setActivePlanet(planet);
            setActivePlanetPos(pos);
          }}
        />} />
        <Route path="/skills" element={<SpacefolioSkills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/about" element={<About />} />
        <Route path="/connect" element={<Connect />} />
      </Routes>

      {/* <StarsBackground scrollY={scrollY} /> */}

      <MascotBot
        planet={activePlanet}
        target={activePlanetPos}
        voiceEnabled={voiceEnabled}
      />


      <VoiceToggle enabled={voiceEnabled}
        onToggle={toggleVoice}
      />

    </div>
  );
}

export default App;
