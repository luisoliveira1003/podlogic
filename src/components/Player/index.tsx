import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Slider from "rc-slider";

import { api } from "../../services/api";

import styles from "./player.module.scss";
import "rc-slider/assets/index.css";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";

interface IEpisodeProps {
  name: string;
  description: string;
  duration: number;
  participants: string[];
  episodeNumber: number;
  cover: string;
  audio: string;
}

export function Player() {
  const { query } = useRouter();
  const audioRef = useRef<HTMLAudioElement>(null);

  const [episode, setEpisode] = useState<IEpisodeProps>();
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (query.id) {
      api.get("/episodes/" + query.id + "/details.json").then((data) => {
        setEpisode(data.data);
      });
    }
  }, [query.id]);

  useEffect(() => {
    if (!audioRef.current) {
      return;
    }

    if (isPlaying) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  function togglePlay() {
    setIsPlaying(!isPlaying);
  }

  function setPlayingState(state: boolean) {
    setIsPlaying(state);
  }

  function setupProgressListener() {
    audioRef.current.currentTime = 0;

    audioRef.current.addEventListener("timeupdate", () => {
      setProgress(Math.floor(audioRef.current?.currentTime));
    });
  }

  function handleSeek(amount: number) {
    audioRef.current.currentTime = amount;
    setProgress(amount);
  }

  return (
    <footer className={styles.contentContainer}>
      <div className={styles.progress}>
        <span>{convertDurationToTimeString(progress)}</span>
        <div className={styles.slider}>
          <Slider
            max={episode?.duration}
            value={progress}
            onChange={handleSeek}
            trackStyle={{ backgroundColor: "#2FA0D0" }}
            railStyle={{ opacity: "0.2" }}
            handleStyle={{ display: "none" }}
          />
          {/* <div className={styles.emptySlider} /> */}
        </div>
        <span>{convertDurationToTimeString(episode?.duration)}</span>
      </div>

      {episode && (
        <audio
          src={episode.audio}
          ref={audioRef}
          autoPlay
          onPlay={() => setPlayingState(true)}
          onPause={() => setPlayingState(false)}
          onLoadedMetadata={setupProgressListener}
        />
      )}

      <div className={styles.buttons}>
        <button type="button" disabled>
          <img src="/images/icons/previous.svg" alt="Tocar anterior" />
        </button>
        <button
          type="button"
          className={styles.playButton}
          onClick={togglePlay}
        >
          {isPlaying ? (
            <img src="/images/icons/pause.svg" alt="Pausar" />
          ) : (
            <img src="/images/icons/play.svg" alt="Tocar" />
          )}
        </button>
        <button type="button" disabled>
          <img src="/images/icons/next.svg" alt="Tocar próximo" />
        </button>
      </div>
    </footer>
  );
}
