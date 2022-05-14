import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Item, StyledLink, Image, Name } from './MovieItem.styled';

export default function MovieItem({ id, title, poster_path, backdrop_path }) {
  const location = useLocation();
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';
  const DEFAULT_IMG = 'https://cinemaone.net/images/movie_placeholder.png';

  return (
    <Item>
      <StyledLink to={`/movies/${id}`} state={{ from: location }}>
        <Image
          src={
            poster_path ?? backdrop_path
              ? `${IMAGE_URL}${poster_path ?? backdrop_path}`
              : DEFAULT_IMG
          }
          alt={title}
        />
        <Name>
          {''}
          {title ? title?.toString().substring(0, 26) : ''}
          {''}
        </Name>
      </StyledLink>
    </Item>
  );
}

MovieItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  poster_path: PropTypes.string,
  backdrop_path: PropTypes.string,
};
