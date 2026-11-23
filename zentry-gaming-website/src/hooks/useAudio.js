import { useEffect, useRef, useState } from "react";

const useAudio = () => {
  const audioRef = useRef(null);
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);

  const toggleAudio = () => {
    setIsAudioPlaying((prev) => !prev);
  };

  useEffect(() => {
    const audio = audioRef.current;

    if (!audio) return;

    if (isAudioPlaying) {
      audio.play().catch(() => {
        setIsAudioPlaying(false);
      });
    } else {
      audio.pause();
    }
  }, [isAudioPlaying]);

  return {
    audioRef,
    isAudioPlaying,
    toggleAudio,
  };
};

export default useAudio;