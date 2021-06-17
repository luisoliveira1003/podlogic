import React from "react";
import styles from "./podcast.module.scss";
import AboutPodcast from "./AboutPodcast";
import { EpisodeList } from "./EpisodeList";

export default function Podcast() {
  return (
    <div className={styles.infoPodcast}>
      <AboutPodcast />

      <EpisodeList />
    </div>
  );
}
