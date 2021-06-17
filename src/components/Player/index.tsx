import styles from "./styles.module.scss";

export function Player() {
  return (
    <footer>
      <div className={styles.progress}>

      </div>

      <div className={styles.buttons}>
        <button type="button">
          <img src="/images/icons/previous.svg" />
        </button>
        <button type="button">
          <img src="/images/icons/play.svg" />
        </button>
        <button type="button">
          <img src="/images/icons/next.svg" />
        </button>
      </div>
    </footer>
  )
}