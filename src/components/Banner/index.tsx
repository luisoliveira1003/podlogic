// import styles from "../Podcast/podcast.module.scss";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import styles from "./banner.module.scss";

interface IPodcastProps {
  name: string;
  cover: string;
  description: string;
  episodes: string[];
}

export default function Banner() {
  const [podcast, setPodcast] = useState<IPodcastProps>();

  useEffect(() => {
    async function getEpisodes() {
      await api.get("/details.json").then((response) => {
        setPodcast(response.data);
      });
    }

    getEpisodes();
  }, []);

  

  return (
    <div className={styles.bgPodcast}>
      <img src={podcast?.cover} alt="Headphone" />
      <div className={styles.bgBorder}>
        <h1>{podcast?.name}</h1>
        <p>{podcast?.episodes.length} episódios</p>
      </div>
    </div>
  );
}
