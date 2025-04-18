import { useEffect, useState } from 'react';
import { Movie } from '../../../../domain/models/Movie';
import { MESSAGES } from '../../../shared/constants/Messages';
import { MovieCard } from '../../components/MovieCard/MovieCard';
import './MovieList.css';

interface MovieListProps {
  functionToFetch: () => Promise<Movie[]>;
}

export const MovieList = ({ functionToFetch }: MovieListProps) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const movies = await functionToFetch();
        setMovies(movies);
      } catch (error) {
        console.error(MESSAGES.ERROR.FETCHING, error);
      }
    };

    fetchData();
  }, [functionToFetch]);

  return (
    <div className='movie-list'>
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
};
