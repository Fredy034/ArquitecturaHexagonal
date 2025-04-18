import { CommonModule } from '@angular/common';
import { Component, OnChanges, OnInit } from '@angular/core';
import { GetPopularMoviesUseCase } from '../../../application/usecases/get-popular-movies.usecase';
import { GetTopRatedMoviesUseCase } from '../../../application/usecases/get-top-rated-movies.usecase';
import { Movie } from '../../../domain/models/movie.model';
import { FooterComponent } from '../components/footer/footer.component';
import { MovieListComponent } from '../components/movie-list/movie-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MovieListComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnChanges, OnInit {
  activeFetch: 'popular' | 'top' = 'popular';

  functionToFetch: () => Promise<Movie[]> = () =>
    this.getPopularMoviesUseCase.execute();

  constructor(
    private getPopularMoviesUseCase: GetPopularMoviesUseCase,
    private getTopRatedMoviesUseCase: GetTopRatedMoviesUseCase
  ) {}

  toggleFetch(): void {
    this.activeFetch = this.activeFetch === 'popular' ? 'top' : 'popular';

    this.functionToFetch =
      this.activeFetch === 'popular'
        ? () => this.getPopularMoviesUseCase.execute()
        : () => this.getTopRatedMoviesUseCase.execute();
  }

  ngOnChanges(): void {
    this.toggleFetch();
  }

  ngOnInit(): void {
    this.toggleFetch();
  }
}
