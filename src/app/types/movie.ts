import { Actor } from "./actors";
import { Producer } from "./Producer";

export type Movie = {
  id: number;
  title: string;
  description: string;
  coverPhoto: string;
  genre: string[];
  rating: number;
  runtimeInMinutes: number;
  publishYear: number;
  producer: Producer;
  actors: Actor[];
};
