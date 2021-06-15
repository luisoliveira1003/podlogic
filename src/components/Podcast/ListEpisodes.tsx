import styles from "../styles.module.scss";

export default function ListEpisodes() {
  return (
    <section className={styles.contentEpisodes}>
      <span>LISTA DE EPISÓDIOS</span>
      <div className={styles.test}>
        <ul className={styles.listEpisodes}>
          <li>
            <img src="/images/episode1.svg" />
            <p>
              Episódio 1 - Cuidando das finanças pessoais com Sarah Gonçalves
            </p>
            <span>45:00</span>
          </li>
          <li>
            <img src="/images/episode1.svg" />
            <p>
              Episódio 1 - Cuidando das finanças pessoais com Sarah Gonçalves
            </p>
            <span>45:00</span>
          </li>
          <li>
            <img src="/images/episode1.svg" />
            <p>
              Episódio 1 - Cuidando das finanças pessoais com Sarah Gonçalves
            </p>
            <span>45:00</span>
          </li>
          <li>
            <img src="/images/episode1.svg" />
            <p>
              Episódio 1 - Cuidando das finanças pessoais com Sarah Gonçalves
            </p>
            <span>45:00</span>
          </li>
          <li>
            <img src="/images/episode1.svg" />
            <p>
              Episódio 1 - Cuidando das finanças pessoais com Sarah Gonçalves
            </p>
            <span>45:00</span>
          </li>
          {/* <li>
          
        </li> */}
        </ul>
      </div>
    </section>
  );
}
