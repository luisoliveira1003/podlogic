import Link from "next/link";

interface IEpisodeItemProps {
  episodes: {
    id: number;
    name: string;
    cover: string;
    details: string;
    duration: number;
    episodeNumber: number;
  };
}

export function EpisodeItem(props: IEpisodeItemProps) {
  function readableDuration(seconds) {
    let sec;
    let min;

    sec = Math.floor(seconds);
    min = Math.floor(sec / 60);

    min = min >= 10 ? min : "0" + min;
    sec = Math.floor(sec % 60);
    sec = sec >= 10 ? sec : "0" + sec;
    return min + ":" + sec;
  }

  return (
    <Link href={`/podcast/${props.episodes.id}`}>
      <li>
        <img src={props.episodes.cover} />
        <p>
          Episódio
          {` ${props.episodes.episodeNumber} - ${props.episodes.name}`}
          <br />
          <span>{readableDuration(props.episodes.duration)}</span>
        </p>
      </li>
    </Link>
  );
}
