import Head from "next/head";
import React from "react";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Podlogic</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.contentPodcast}>
          <div className={styles.bgPodcast}>
            <img src="/images/img-bg.svg" alt="Headphone" />
            <div className={styles.bgBorder}>
              <h1>Podlogic</h1>
              <p>6 episódios</p>
            </div>
          </div>

          <div className={styles.infoPodcast}></div>
        </section>
      </main>
    </>
  );
}
