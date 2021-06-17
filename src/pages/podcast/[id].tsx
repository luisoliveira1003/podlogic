import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { api } from "../../services/api";

import styles from "../home.module.scss";

interface IEpisodeProps {
  name: string;
  description: string;
  duration: number;
  participants: string[];
  episodeNumber: number;
  cover: string;
  audio: string;
}

export default function Podcast() {
  const { query } = useRouter();

  const [episode, setEpisode] = useState<IEpisodeProps>();

  useEffect(() => {
    if (query.id) {
      api.get("/episodes/" + query.id + "/details.json").then((data) => {
        setEpisode(data.data);
      });
    }
  }, [query.id]);

  function handleReadMore() {
    let preview = document.getElementById("preview");
    let complete = document.getElementById("complete");
    let read = document.getElementById("read");

    if (preview.style.display !== "none") {
      preview.style.display = "none";
      complete.style.display = "inline";
      read.style.display = "none";
    }
  }

  console.log(episode);

  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentPodcast}>
        <div className={styles.imgClose}>
          <Link href={"/"}>
            <img src="/images/icons/close.svg" />
          </Link>
        </div>
        <section className={styles.detailsPodcast}>
          <img src={episode?.cover} />

          <div className={styles.aboutEpisode}>
            <h1>
              Episódio
              {` ${episode?.episodeNumber} - ${episode?.name}`}
            </h1>

            <div
              id="preview"
              className={`${styles.readMore1} ${styles.previewEpisode}`}
            >
              <p>{episode?.description}</p>
            </div>

            <div id="complete" className={styles.readMore2}>
              <p>{episode?.description}</p>
            </div>
            <div className={styles.btnReadMore}>
              <a id="read" onClick={handleReadMore}>
                Ler mais <img src="/images/icons/arrow-bottom.svg" />
              </a>
            </div>

            <div className={styles.participants}>
              <p>Participantes: {episode?.participants.join(", ")}</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
