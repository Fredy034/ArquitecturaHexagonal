import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { provideHttpClient } from '@angular/common/http';
import { routes } from './app.routes';
import { MoviesService } from './application/services/movies.service';
import { GetPopularMoviesUseCase } from './application/usecases/get-popular-movies.usecase';
import { GetTopRatedMoviesUseCase } from './application/usecases/get-top-rated-movies.usecase';
import { MOVIE_INTERFACE } from './domain/interfaces/movie.token';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    { provide: MOVIE_INTERFACE, useClass: MoviesService },
    { provide: GetPopularMoviesUseCase, useClass: GetPopularMoviesUseCase },
    { provide: GetTopRatedMoviesUseCase, useClass: GetTopRatedMoviesUseCase },
  ],
};
