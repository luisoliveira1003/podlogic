import styles from "../styles.module.scss";

export default function Banner() {
  return (
    <div className={styles.bgPodcast}>
      <img src="/images/img-bg.svg" alt="Headphone" />
      <div className={styles.bgBorder}>
        <h1>Podlogic</h1>
        <p>6 episódios</p>
      </div>
    </div>
  );
}
