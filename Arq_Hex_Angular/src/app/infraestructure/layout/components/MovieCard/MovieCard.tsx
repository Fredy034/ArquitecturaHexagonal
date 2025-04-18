import { Movie } from '../../../../domain/models/Movie';
import { formatDate } from '../../../shared/helpers/FormatDate.helper';
import { formatDecimal } from '../../../shared/helpers/FormatDecimal.helper';
import { languageToCountryMap } from '../../../shared/helpers/LanguageToCountry.helper';
import './MovieCard.css';

interface MovieCardProps {
  movie: Movie;
}

export const MovieCard = ({ movie }: MovieCardProps) => {
  const IMAGE_BASE_URL = import.meta.env.VITE_IMAGE_BASE_URL;

  const { id, title, overview, original_language, poster_path, backdrop_path, release_date, vote_average } = movie;
  const imageUrl = `${IMAGE_BASE_URL}${poster_path}`;
  const backdropUrl = `${IMAGE_BASE_URL}${backdrop_path}`;
  const countryCode = languageToCountryMap[original_language] || original_language;
  const languageFlagUrl = countryCode
    ? `https://raw.githubusercontent.com/Yummygum/flagpack-core/main/svg/m/${countryCode}.svg
`
    : undefined;

  return (
    <div className='movie-card' key={id}>
      <img src={backdropUrl} alt={title} className='movie-card__backdrop' loading='lazy' />
      <img src={imageUrl} alt={title} className='movie-card__image' title={title} loading='eager' />
      <span className='movie-card__rating'>{formatDecimal(vote_average)}</span>
      <img
        src={languageFlagUrl}
        alt={original_language}
        className='movie-card__flag'
        title={`Original Language: ${original_language.toUpperCase()}`}
        loading='lazy'
      />
      <div className='movie-card__header'>
        <h2 className='movie-card__title'>{title}</h2>
        <p className='movie-card__release-date'>{formatDate(release_date)}</p>
      </div>
      <p className='movie-card__overview'>{overview}</p>
    </div>
  );
};
