import React from 'react';
import PropTypes from 'prop-types';
import MovieItem from '../MovieItem';
import { List } from './MovieList.styled';

MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      poster_path: PropTypes.string,
      backdrop_path: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default function MovieList({ movies }) {
  return (
    <List>
      {movies.map(item => (
        <MovieItem
          key={item.id}
          id={item.id}
          title={item.title}
          poster_path={item.poster_path}
          backdrop_path={item.backdrop_path}
        />
      ))}
    </List>
  );
}
