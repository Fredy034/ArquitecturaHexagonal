import { Movie } from '../models/Movie';

// This interface defines a contract for a movie repository, which is responsible for fetching
// popular movies. The `getPopularMovies` method returns a promise that resolves to an array of
// `Movie` objects. This allows for flexibility in the implementation of the repository, enabling
//  different data sources or APIs to be used while adhering to the same interface.
// The `Movie` type is imported from the domain layer, indicating that this interface is part of
// the application layer. This separation of concerns allows for better organization and
// maintainability of the codebase.

export interface MovieInterface {
  getPopularMovies(): Promise<Movie[]>;
  getTopRatedMovies(): Promise<Movie[]>;
}
