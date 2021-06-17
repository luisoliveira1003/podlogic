import { useEffect, useState } from "react";
import { api } from "../../services/api";
import styles from "./podcast.module.scss";
import { EpisodeItem } from "./EpisodeItem";

export function EpisodeList() {
  const [eps, setEps] = useState([]);

  useEffect(() => {
    async function getEpisodes() {
      await api.get("/details.json").then((response) => {
        setEps(response.data.episodes);
      });
    }

    getEpisodes();
  }, []);

  return (
    <section className={styles.contentEpisodes}>
      <span>LISTA DE EPISÓDIOS</span>
      <div className={styles.contentList}>
        <ul className={styles.listEpisodes}>
          {eps.map((episode) => {
            return <EpisodeItem key={episode.name} episodes={episode} />;
          })}
        </ul>
      </div>
    </section>
  );
}
