import React from 'react';
import PropTypes from 'prop-types';

export default function joker({ joke, btnText }) {
  return (
    <>
      <h2>{joke.setup}</h2>
      <p>{ btnText !== 'Get Punchline' ? joke.punchline : '' }</p>
    </>
  );
}

joker.propTypes = {
  joke: PropTypes.shape({
    setup: PropTypes.string,
    punchline: PropTypes.string,
  }).isRequired,
  btnText: PropTypes.string.isRequired,
};
