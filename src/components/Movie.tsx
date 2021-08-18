import React from 'react';
import { Movie } from '../types/types';
import { Link } from 'react-router-dom';
import { MovieInSearchBlock, MovieBlock } from '../styles/Movie';

const DEFAULT_IMG = "https://media.gettyimages.com/photos/old-film-perforated-celluloid-picture-id155278297?s=2048x2048";
const ENDPOINT_IMG = `https://image.tmdb.org/t/p/w500/`;

function getImage(path: string) {
  if(!path) {
    return DEFAULT_IMG;
  }
  return `${ENDPOINT_IMG}/${path}`;
}

const MovieComponent = ({ movie }: Movie) => {
  return (
    <MovieBlock>
      <Link to={`/movie/${encodeURIComponent(movie.id)}`}>
        <img src={getImage(movie.poster_path)} alt="img" />
        {
          movie.title.length < 25 ? (
            <h4>{movie.title}</h4>
          ) : (
            <h4>{movie.title.slice(0, 25)}</h4>
          )
        }
      </Link>
    </MovieBlock>
  );
};

export const MovieInSearch = ({ movie }: Movie) => {
  return (
    <MovieInSearchBlock>
      <Link to={`/movie/${encodeURIComponent(movie.id)}`}>
        {
          movie.title.length < 25 ? (
            <p>{movie.title}</p>
          ) : (
            <p>{movie.title.slice(0, 25)}</p>
          )
        }
      </Link>
    </MovieInSearchBlock>
  );
};

export default MovieComponent;
