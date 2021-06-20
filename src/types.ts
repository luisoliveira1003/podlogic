export interface IPodcastProps {
  name: string;
  description: string;
  cover: string;
  episodes: {
    id: number;
    name: string;
    description: string;
    duration: number;
    participants: string[];
    episodeNumber: number;
    cover: string;
    audio: string;
  };
}

export interface IEpisodeProps {
  id?: number;
  name: string;
  description?: string;
  duration?: number;
  participants?: string[];
  episodeNumber: number;
  cover?: string;
  audio?: string;
}
