import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MovieInterface } from '../../../app/domain/interfaces/movie.interface';
import { Movie } from '../../../app/domain/models/movie.model';
import { MOVIE_ENDPOINTS } from '../../../app/infraestructure/shared/constants/endpoints.constant';
import { MESSAGES } from '../../../app/infraestructure/shared/constants/messages.constant';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class MoviesService implements MovieInterface {
  private readonly BASE_URL = environment.baseUrl;
  private readonly API_KEY = environment.apiKey;

  constructor(private http: HttpClient) {}

  async getPopularMovies(): Promise<Movie[]> {
    try {
      const response = await this.http
        .get<any>(`${this.BASE_URL}${MOVIE_ENDPOINTS.POPULAR}`, {
          params: { api_key: this.API_KEY },
        })
        .toPromise();
      return response?.results ?? [];
    } catch (error) {
      console.error(MESSAGES.ERROR.FETCHING, error);
      throw error;
    }
  }

  async getTopRatedMovies(): Promise<Movie[]> {
    try {
      const response = await this.http
        .get<any>(`${this.BASE_URL}${MOVIE_ENDPOINTS.TOP_RATED}`, {
          params: { api_key: this.API_KEY },
        })
        .toPromise();
      return response?.results ?? [];
    } catch (error) {
      console.error(MESSAGES.ERROR.FETCHING, error);
      throw error;
    }
  }
}
