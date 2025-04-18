import { Injectable } from '@angular/core';
import { MovieInterface } from '../../../app/domain/interfaces/movie.interface';
import { Movie } from '../../../app/domain/models/movie.model';
import { MoviesService } from '../services/movies.service';

@Injectable({
  providedIn: 'root',
})
export class GetTopRatedMoviesUseCase {
  constructor(private moviesService: MoviesService) {}

  execute(): Promise<Movie[]> {
    return this.moviesService.getTopRatedMovies();
  }
}

export class GetPopularMoviesUseCase {
  constructor(private movieInterface: MovieInterface) {}

  async execute(): Promise<Movie[]> {
    return await this.movieInterface.getTopRatedMovies();
  }
}
