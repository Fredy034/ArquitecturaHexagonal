import { Inject, Injectable } from '@angular/core';
import { MovieInterface } from '../../../app/domain/interfaces/movie.interface';
import { MOVIE_INTERFACE } from '../../../app/domain/interfaces/movie.token';
import { Movie } from '../../../app/domain/models/movie.model';
import { MESSAGES } from '../../../app/infraestructure/shared/constants/messages.constant';

@Injectable({
  providedIn: 'root',
})
export class ApiMovieController implements MovieInterface {
  constructor(
    @Inject(MOVIE_INTERFACE) private readonly _moviesService: MovieInterface
  ) {}

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
