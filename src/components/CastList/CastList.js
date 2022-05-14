import React from 'react';
import PropTypes from 'prop-types';
import { List, Image, Item, Title, Text, Wrapper } from './CastList.styled';

CastList.propTypes = {
  cast: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      profile_path: PropTypes.string,
      name: PropTypes.string.isRequired,
      character: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default function CastList({ cast }) {
  const IMAGE_URL = 'https://image.tmdb.org/t/p/w300';
  const DEFAULT_IMAGE = 'https://cinemaone.net/images/movie_placeholder.png';

  return (
    <List>
      {cast.map(({ id, profile_path, name, character }) => (
        <Item key={id}>
          <Image
            src={profile_path ? `${IMAGE_URL}/${profile_path}` : DEFAULT_IMAGE}
            alt={name}
          />
          <Wrapper>
            <Title>{name}</Title>
            <Text>Character: {character}</Text>
          </Wrapper>
        </Item>
      ))}
    </List>
  );
}
