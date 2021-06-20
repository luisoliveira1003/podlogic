import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { IEpisodeProps } from "../../types";
import { EpisodeItem } from "./EpisodeItem";
import styles from "./podcast.module.scss";

export function EpisodeList() {
  const [episodes, setEpisodes] = useState<IEpisodeProps[]>([]);

  useEffect(() => {
    async function getEpisodes() {
      await api.get("/details.json").then((response) => {
        setEpisodes(response.data.episodes);
      });
    }

    getEpisodes();
  }, []);

  return (
    <section className={styles.contentEpisodes}>
      <h1>LISTA DE EPISÓDIOS</h1>
      <div className={styles.contentList}>
        
        <ul className={styles.listEpisodes}>
          {episodes.map((episode) => {
            return (
              <EpisodeItem
                key={episode.id}
                id={episode.id}
                name={episode.name}
                duration={episode.duration}
                episodeNumber={episode.episodeNumber}
                cover={episode.cover}
              />
            );
          })}
        </ul>
      </div>
    </section>
  );
}
