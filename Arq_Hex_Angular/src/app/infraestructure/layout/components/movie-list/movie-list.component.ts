import { CommonModule } from '@angular/common';
import { Component, Input, OnChanges, OnInit } from '@angular/core';
import { Movie } from '../../../../domain/models/movie.model';
import { MESSAGES } from '../../../shared/constants/messages.constant';
import { MovieCardComponent } from '../movie-card/movie-card.component';

@Component({
  selector: 'app-movie-list',
  imports: [CommonModule, MovieCardComponent],
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
})
export class MovieListComponent implements OnInit, OnChanges {
  @Input() functionToFetch!: () => Promise<Movie[]>;
  movies: Movie[] = [];

  constructor() {}

  ngOnInit(): void {
    this.getMovies();
  }

  ngOnChanges(): void {
    this.getMovies();
  }

  getMovies(): void {
    this.functionToFetch()
      .then((res) => {
        this.movies = res;
      })
      .catch((error) => {
        console.error(MESSAGES.ERROR.FETCHING, error);
      });
  }
}
