import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Player } from "../../components/Player";
import { api } from "../../services/api";
import { IEpisodeProps } from "../../types";
import { handleReadMore } from "../../utils/handleReadMore";
import { formatArrayParticipants } from "../../utils/formatArrayParticipants";
import styles from "./episode.module.scss";

export default function Episode() {
  const [episode, setEpisode] = useState<IEpisodeProps>();

  const { query } = useRouter();

  useEffect(() => {
    if (query.id) {
      api.get("/episodes/" + query.id + "/details.json").then((data) => {
        setEpisode(data.data);
      });
    }
  }, [query.id]);

  let tam = 0;

  return (
    <>
      <Head>
        <title>
          Episódio {episode?.episodeNumber} - {episode?.name}
        </title>
      </Head>

      <div className={styles.contentEpisode}>
        <div className={styles.episode}>
          <div className={styles.imgClose}>
            <Link href={"/"}>
              <picture>
                <source
                  media="(max-width: 375px)"
                  srcSet="/images/icons/close-with-bg.svg"
                />
                <img src="/images/icons/close.svg" />
              </picture>
            </Link>
          </div>

          <div className={styles.imageCover}>
            <img src={episode?.cover} />
          </div>
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
              <p>
                Participantes: {formatArrayParticipants(episode?.participants)}
              </p>
            </div>
          </div>
        </div>

        <Player />
      </div>
    </>
  );
}
