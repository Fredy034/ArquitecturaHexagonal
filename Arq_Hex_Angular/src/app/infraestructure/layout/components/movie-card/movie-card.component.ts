import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { environment } from '../../../../../environments/environment';
import { Movie } from '../../../../domain/models/movie.model';
import { formatDate } from '../../../shared/helpers/format-date.helper';
import { formatDecimal } from '../../../shared/helpers/format-decimal.helper';
import { languageToCountryMap } from '../../../shared/helpers/language-to-country.helper';

@Component({
  selector: 'app-movie-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss'],
})
export class MovieCardComponent {
  @Input() movie!: Movie;

  IMAGE_BASE_URL = environment.imageBaseUrl;

  get imageUrl(): string {
    return `${this.IMAGE_BASE_URL}${this.movie.poster_path}`;
  }

  get backdropUrl(): string {
    return `${this.IMAGE_BASE_URL}${this.movie.backdrop_path}`;
  }

  get languageFlagUrl(): string | undefined {
    const countryCode =
      languageToCountryMap[this.movie.original_language] ||
      this.movie.original_language;
    return `https://raw.githubusercontent.com/Yummygum/flagpack-core/main/svg/m/${countryCode}.svg`;
  }

  formatDate(date: string): string {
    return formatDate(date);
  }

  formatDecimal(value: number): string {
    return formatDecimal(value);
  }
}
