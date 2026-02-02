import { MascotProvider, useMascot } from "./context/MascotContext";
import AppRoutes from "./AppRoutes";
import { useState, useEffect } from "react";
import MascotBot from "./bot/MascotBot";
import VoiceToggle from "./bot/VoiceToggle";
import LoadingScreen from "./components/loadingscreen/LoadingScreen"

function MascotLayer() {
  const {
    activePlanetPos,
    voiceEnabled,
    toggleVoice,
    speech
  } = useMascot();



  return (
    <>
      <MascotBot
        speech={speech}
        target={activePlanetPos}
        voiceEnabled={voiceEnabled}
      />
      <VoiceToggle
        enabled={voiceEnabled}
        onToggle={toggleVoice}
      />
    </>
  );
}

function App() {

  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 3200);
    return () => clearTimeout(t);
  }, []);


  return (
    <MascotProvider>
      {!loaded ? <LoadingScreen /> : <AppRoutes />}
      <MascotLayer />
    </MascotProvider>
  );
}

export default App;
