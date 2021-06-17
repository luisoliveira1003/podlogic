import styles from "./podcast.module.scss";

export default function AboutPodcast() {
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

  return (
    <div className={styles.aboutPodcast}>
      <span>SOBRE O PODCAST</span>
      <div
        id="preview"
        className={`${styles.readMore1} ${styles.previewPodcast}`}
      >
        <p>
          Somos um grupo de amigos que gosta de se reunir e trocar ideias sobre
          como o mundo está transitando entre o antigo e o novo e tudo o que
          está mudando. Falamos sobre tecnologia, trabalho, lazer e nerdices.
        </p>
      </div>
      <div id="complete" className={styles.readMore2}>
        <p>
          Somos um grupo de amigos que gosta de se reunir e trocar ideias sobre
          como o mundo está transitando entre o antigo e o novo e tudo o que
          está mudando. Falamos sobre tecnologia, trabalho, lazer e nerdices.
        </p>
      </div>

      <div>
        <a id="read" onClick={handleReadMore} className={styles.btnReadMore}>
          Ler mais <img src="/images/icons/arrow-bottom.svg" />
        </a>
      </div>
    </div>
  );
}
