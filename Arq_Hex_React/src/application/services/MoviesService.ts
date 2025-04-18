import axios from 'axios';
import { MovieInterface } from '../../domain/interfaces/MovieInterface';
import { Movie } from '../../domain/models/Movie';
import { MOVIE_ENDPOINTS } from '../../infraestructure/shared/constants/Endpoints';
import { MESSAGES } from '../../infraestructure/shared/constants/Messages';

const BASE_URL = import.meta.env.VITE_BASE_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export class MoviesService implements MovieInterface {
  async getPopularMovies(): Promise<Movie[]> {
    try {
      const response = await axios.get(`${BASE_URL}${MOVIE_ENDPOINTS.POPULAR}`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error(MESSAGES.ERROR.FETCHING, error);
      throw error;
    }
  }

  async getTopRatedMovies(): Promise<Movie[]> {
    try {
      const response = await axios.get(`${BASE_URL}${MOVIE_ENDPOINTS.TOP_RATED}`, {
        params: {
          api_key: API_KEY,
        },
      });
      return response.data.results;
    } catch (error) {
      console.error(MESSAGES.ERROR.FETCHING, error);
      throw error;
    }
  }
}
