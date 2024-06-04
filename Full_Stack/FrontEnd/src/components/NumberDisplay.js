import React from 'react';

const NumberDisplay = ({ numbers, average }) => {
  return (
    <div>
      <h2>Numbers: {numbers.join(', ')}</h2>
      <h3>Average: {average}</h3>
    </div>
  );
};

export default NumberDisplay;
