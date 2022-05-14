import React from 'react';
import PropTypes from 'prop-types';
import { Item, List } from './ReviewsList.styled';

ReviewsList.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      author: PropTypes.string,
      content: PropTypes.string,
    }).isRequired,
  ).isRequired,
};

export default function ReviewsList({ reviews }) {
  return (
    <List>
      {reviews.map(({ id, author, content }) => (
        <Item key={id}>
          <h3>Author: {author}</h3>
          <p>{content}</p>
        </Item>
      ))}
    </List>
  );
}
