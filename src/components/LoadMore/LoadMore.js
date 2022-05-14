import React from 'react';
import PropTypes from 'prop-types';
import { Button } from './LoadMore.styled';

export default function LoadMore({ onloadMore }) {
  return (
    <Button type="button" onClick={onloadMore}>
      Load more
    </Button>
  );
}

LoadMore.propTypes = {
  onloadMore: PropTypes.func.isRequired,
};
