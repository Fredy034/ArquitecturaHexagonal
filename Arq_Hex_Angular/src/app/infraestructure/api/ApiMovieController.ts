import { MovieInterface } from '../../domain/interfaces/MovieInterface';
import { Movie } from '../../domain/models/Movie';
import { MESSAGES } from '../shared/constants/Messages';

export class ApiMovieController implements MovieInterface {
  constructor(private _moviesService: MovieInterface) {}

  async getPopularMovies(): Promise<Movie[]> {
    try {
      return await this._moviesService.getPopularMovies();
    } catch (error) {
      console.error(MESSAGES.ERROR.FETCHING, error);
      throw error;
    }
  }

  async getTopRatedMovies(): Promise<Movie[]> {
    try {
      return await this._moviesService.getTopRatedMovies();
    } catch (error) {
      console.error(MESSAGES.ERROR.FETCHING, error);
      throw error;
    }
  }
}
