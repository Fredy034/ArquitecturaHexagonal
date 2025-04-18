import { InjectionToken } from '@angular/core';
import { MovieInterface } from './movie.interface';

export const MOVIE_INTERFACE = new InjectionToken<MovieInterface>(
  'MovieInterface'
);
