import { Movie } from "./movie";
import { Person } from "./Person";

export type Actor = Person & {
    moviesPlayed: Movie[];
}
