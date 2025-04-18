import { Injectable } from '@angular/core';
import { Movie } from '../../../app/domain/models/movie.model';
import { MoviesService } from '../services/movies.service';

@Injectable({
  providedIn: 'root',
})
export class GetPopularMoviesUseCase {
  constructor(private moviesService: MoviesService) {}

  execute(): Promise<Movie[]> {
    return this.moviesService.getPopularMovies();
  }
}
