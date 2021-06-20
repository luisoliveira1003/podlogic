import Link from "next/link";
import { IEpisodeProps, IPodcastProps } from "../../types";
import { convertDurationToTimeString } from "../../utils/convertDurationToTimeString";

export function EpisodeItem({
  id,
  name,
  duration,
  episodeNumber,
  cover,
}: IEpisodeProps) {
  return (
    <Link href={`/episode/${id}`}>
      <li>
        <img src={cover} />
        <p>
          Episódio
          {` ${episodeNumber} - ${name}`}
          <br />
          <span>{convertDurationToTimeString(duration)}</span>
        </p>
      </li>
    </Link>
  );
}
