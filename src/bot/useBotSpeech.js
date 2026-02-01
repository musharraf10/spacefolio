let speakingListener = null;

export function speak(text) {
  if (!text || !window.speechSynthesis) return;

  const synth = window.speechSynthesis;
  synth.cancel();

  const utterance = new SpeechSynthesisUtterance(text);

  utterance.onstart = () => {
    speakingListener && speakingListener(true);
  };

  utterance.onend = () => {
    speakingListener && speakingListener(false);
  };

  synth.speak(utterance);
}

export function onBotSpeakingChange(fn) {
  speakingListener = fn;
}
