import { Movie } from "./movie";
import { Person } from "./Person";

export type Producer = Person & {
  moviesProduced: Movie[];
};
