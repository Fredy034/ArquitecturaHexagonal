import { Movie } from '../models/movie.model';

export interface MovieInterface {
  getPopularMovies(): Promise<Movie[]>;
  getTopRatedMovies(): Promise<Movie[]>;
}
