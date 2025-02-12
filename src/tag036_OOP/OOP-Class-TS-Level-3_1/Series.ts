import { Episode } from "./Episode";

export class Series {
  title: string;
  description: string;
  startYear: number;
  endYear: number | null;
  episodes: Episode[];

  constructor(
    title: string,
    description: string,
    startYear: number,
    endYear: number | null,
    episodes: Episode[]
  ) {
    this.title = title;
    this.description = description;
    this.startYear = startYear;
    this.endYear = endYear;
    this.episodes = episodes;
  }
}
