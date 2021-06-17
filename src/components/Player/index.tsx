import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import Slider from "rc-slider";

import { api } from "../../services/api";

import styles from "./player.module.scss";
import "rc-slider/assets/index.css";

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

  return (
    <footer className={styles.contentContainer}>
      <div className={styles.progress}>
        <span>00:00</span>
        <div className={styles.slider}>
          <Slider
            trackStyle={{
              backgroundColor: "#2FA0D0",
            }}
            railStyle={{ opacity: "0.2" }}
            handleStyle={{ display: "none" }}
          />
          {/* <div className={styles.emptySlider} /> */}
        </div>
        <span>00:00</span>
      </div>

      {episode && (
        <audio
          src={episode.audio}
          ref={audioRef}
          autoPlay
          onPlay={() => setPlayingState(true)}
          onPause={() => setPlayingState(false)}
        />
      )}

      <div className={styles.buttons}>
        <button type="button">
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
        <button type="button">
          <img src="/images/icons/next.svg" alt="Tocar próximo" />
        </button>
      </div>
    </footer>
  );
}
