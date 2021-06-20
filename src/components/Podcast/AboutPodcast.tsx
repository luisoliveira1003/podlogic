import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { IPodcastProps } from "../../types";
import { handleReadMore } from "../../utils/handleReadMore";
import styles from "./podcast.module.scss";

export default function AboutPodcast() {
  const [podcasts, setPodcasts] = useState<IPodcastProps>();

  useEffect(() => {
    async function getEpisodes() {
      await api.get("/details.json").then((response) => {
        setPodcasts(response.data);
      });
    }

    getEpisodes();
  }, []);

  return (
    <div className={styles.aboutPodcast}>
      <span>SOBRE O PODCAST</span>
      <div
        id="preview"
        className={`${styles.readMore1} ${styles.previewPodcast}`}
      >
        <p>{podcasts?.description}</p>
      </div>
      <div id="complete" className={styles.readMore2}>
        <p>{podcasts?.description}</p>
      </div>

      <div>
        <a id="read" onClick={handleReadMore} className={styles.btnReadMore}>
          Ler mais <img src="/images/icons/arrow-bottom.svg" />
        </a>
      </div>
    </div>
  );
}
