import { MovieInterface } from '../../domain/interfaces/MovieInterface';
import { Movie } from '../../domain/models/Movie';

// This code defines a use case for fetching popular movies. It uses the `MovieInterface` interface
// to abstract the data source, allowing for flexibility in how the data is fetched. The `GetPopularMovies`

export class GetPopularMovies {
  constructor(private movieInterface: MovieInterface) {}

  async execute(): Promise<Movie[]> {
    return await this.movieInterface.getPopularMovies();
  }
}
