import { createContext, useRef, useState } from "react";

const AudioContext = createContext();

export const AudioProvider = ({ children }) => {
  const [currentPlaying, setCurrentPlaying] = useState(null);
  const audioRef = useRef(null);
  const progressBarRef = useRef();
  const animationRef = useRef();

  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const calculateTime = (secs) => {
    const minutes = Math.floor(secs / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const seconds = Math.floor(secs % 60);
    const returnedSeconds = seconds < 10 ? `0${seconds}` : `${seconds}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  const handlePlay = () => {
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current.pause();
      cancelAnimationFrame(animationRef.current);
    }
  };

  const whilePlaying = () => {
    progressBarRef.current.value = audioRef.current.currentTime;
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  const changeRange = () => {
    audioRef.current.currentTime = progressBarRef.current.value;
    changePlayerCurrentTime();
  };

  const changePlayerCurrentTime = () => {
    progressBarRef.current.style.setProperty(
      "--seek-before-width",
      `${(progressBarRef.current.value / duration) * 100}%`
    );
    setCurrentTime(progressBarRef.current.value);
  };

  return (
    <AudioContext.Provider
      value={{
        handlePlay,
        audioRef,
        progressBarRef,
        currentTime,
        calculateTime,
        changeRange,
        duration,
        setDuration,
        setCurrentTime,
        isPlaying,
        currentPlaying,
        setCurrentPlaying,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
};

export default AudioContext;
