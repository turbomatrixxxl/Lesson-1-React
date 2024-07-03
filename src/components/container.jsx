import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Container({ children }) {
  const [color, setColor] = useState('black');

  return (
    <>
      <div>{children}</div>
      <h2 style={{ color: color }}>test</h2>
      <button
        onClick={() => {
          setColor('red');
        }}
      >
        Change color
      </button>
    </>
  );
}

Container.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
