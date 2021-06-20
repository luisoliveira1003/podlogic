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

      <div className={styles.contentContainer}>
        <div className={styles.contentBanner}>
          <Banner />
        </div>

        <div className={styles.contentPodcast}>
          <Podcast />
        </div>
      </div>
    </>
  );
}
