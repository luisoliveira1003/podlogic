import React from "react";
import styles from "../styles.module.scss";
import AboutPodcast from "./AboutPodcast";
import ListEpisodes from "./ListEpisodes";

export default function Podcast() {
  return (
    <div className={styles.infoPodcast}>
      <AboutPodcast />

      <ListEpisodes />
    </div>
  );
}
