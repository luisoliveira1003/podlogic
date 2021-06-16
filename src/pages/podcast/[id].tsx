import { useRouter } from "next/router";

import styles from "../home.module.scss";

export default function Podcast() {
  const { query } = useRouter();

  return (
    <div className={styles.contentContainer}>
      <div className={styles.contentPodcast}>

        

      </div>
    </div>
  );
}
