import { useState, useRef, useEffect } from 'react';
import { personalInfo } from '../constants';
import { FaPlay, FaPause } from 'react-icons/fa';

export const SongPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateProgress = () => {
      setProgress(audio.currentTime / audio.duration);
    };

    audio.addEventListener('timeupdate', updateProgress);
    return () => audio.removeEventListener('timeupdate', updateProgress);
  }, []);

  if (!personalInfo.song?.url) return null;

  // Calcular ángulo para conic-gradient
  const angle = progress * 360;

  return (
    <div className="flex items-center gap-3 mt-4">
      <div
        className="rounded-full p-1 relative"
        style={{
          background: `conic-gradient(#00ADEE ${angle}deg, #444 ${angle}deg)`,
        }}
      >
        <button
          onClick={togglePlay}
          className="w-8 h-8 flex items-center justify-center rounded-full bg-black text-white shadow-lg hover:bg-gray-500 transition relative z-10"
        >
          {isPlaying ? <FaPause /> : <FaPlay />}
        </button>
      </div>

      <div>
        <p className="text-gray-700 font-medium text-sm sm:text-base">
          {personalInfo.song.title} - {personalInfo.song.artist}
        </p>
      </div>

      <audio
        ref={audioRef}
        src={personalInfo.song.url}
        onEnded={() => setIsPlaying(false)}
      />
    </div>
  );
};
