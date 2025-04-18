import { useState } from 'react';
import { Movie } from '../../../domain/models/Movie';
import { Footer } from '../components/Footer/Footer';
import { MovieList } from '../components/MovieList/MovieList';
import './Home.css';

interface HomeProps {
  getPopularMoviesUseCase: { execute: () => Promise<Movie[]> };
  getTopRatedMoviesUseCase: { execute: () => Promise<Movie[]> };
}

export const Home = ({ getPopularMoviesUseCase, getTopRatedMoviesUseCase }: HomeProps) => {
  const [activeFetch, setActiveFetch] = useState<'popular' | 'top'>('popular');

  const handleToggle = () => {
    setActiveFetch((prev) => (prev === 'popular' ? 'top' : 'popular'));
  };

  const getFetchFunction = () => {
    return activeFetch === 'popular' ? getPopularMoviesUseCase.execute() : getTopRatedMoviesUseCase.execute();
  };

  return (
    <div className='home'>
      <div className='home__header'>
        <h1>{activeFetch === 'popular' ? 'Popular Movies' : 'Top Rated Movies'}</h1>

        <button onClick={handleToggle} className='toggle-button'>
          {activeFetch === 'popular' ? 'Show Top Rated' : 'Show Popular'}
        </button>
      </div>

      <MovieList functionToFetch={getFetchFunction} />
      <Footer />
    </div>
  );
};
