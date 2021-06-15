import Head from "next/head";
import React from "react";
import Banner from "../components/Banner";
import Podcast from "../components/Podcast";

import styles from "./home.module.scss";

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Podlogic</title>
      </Head>

      <main className={styles.contentContainer}>
        <section className={styles.contentPodcast}>
          <Banner />

          <Podcast />
        </section>
      </main>
    </>
  );
}
