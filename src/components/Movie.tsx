import React from 'react';
import { Movie } from '../../types/types';
import { Link } from 'react-router-dom';

const DEFAULT_IMG = "https://media.gettyimages.com/photos/old-film-perforated-celluloid-picture-id155278297?s=2048x2048";
const ENDPOINT_IMG = `https://image.tmdb.org/t/p/w500/`;

function getImage(path) {
  if(!path) {
    return DEFAULT_IMG;
  }
  return `${ENDPOINT_IMG}/${path}`;
}

const MovieComponent = ({ movie }: Movie) => {
  return (
    <div>
      <Link to={`/movie/${encodeURIComponent(movie.id)}`}>
        <img src={getImage(movie.poster_path)} alt="img" />
        <p>{movie.title}</p>
      </Link>
    </div>
  );
};

export default MovieComponent;