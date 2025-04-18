import { MovieInterface } from '../../domain/interfaces/MovieInterface';
import { Movie } from '../../domain/models/Movie';

// This code defines a use case for fetching top-rated movies. It uses the `MovieInterface` interface
// to abstract the data source, allowing for flexibility in how the data is fetched. The `GetTopRatedMovies`

export class GetTopRatedMovies {
  constructor(private movieInterface: MovieInterface) {}

  async execute(): Promise<Movie[]> {
    return await this.movieInterface.getTopRatedMovies();
  }
}
