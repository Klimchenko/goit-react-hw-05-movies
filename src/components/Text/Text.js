import React from 'react';
import PropTypes from 'prop-types';
import { StyledText } from './Text.styled';

const Text = ({ text }) => {
  return <StyledText>{text}</StyledText>;
};

export default Text;

Text.propTypes = {
  text: PropTypes.string.isRequired,
};
