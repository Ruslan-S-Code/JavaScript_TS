import { Actor } from "./Actor";

export class Episode {
  title: string;
  length: number; // in minutes
  description: string;
  actors: Actor[];

  constructor(
    title: string,
    length: number,
    description: string,
    actors: Actor[]
  ) {
    this.title = title;
    this.length = length;
    this.description = description;
    this.actors = actors;
  }
}
