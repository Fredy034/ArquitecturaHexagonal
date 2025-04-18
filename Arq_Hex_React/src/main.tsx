import React from 'react';
import ReactDOM from 'react-dom/client';
import { MoviesService } from './application/services/MoviesService';
import { GetPopularMovies } from './application/usecases/GetPopularMovies';
import { GetTopRatedMovies } from './application/usecases/GetTopRatedMovies';
import './index.css';
import { ApiMovieController } from './infraestructure/api/ApiMovieController';
import { Home } from './infraestructure/layout/pages/Home';

const moviesService = new MoviesService();
const movieController = new ApiMovieController(moviesService);

const getPopularMoviesUseCase = new GetPopularMovies(movieController);
const getTopRatedMoviesUseCase = new GetTopRatedMovies(movieController);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home getPopularMoviesUseCase={getPopularMoviesUseCase} getTopRatedMoviesUseCase={getTopRatedMoviesUseCase} />
  </React.StrictMode>
);
