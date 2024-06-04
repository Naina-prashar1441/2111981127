import React, { useState } from 'react';
import axios from 'axios';

const App = () => {
  const [type, setType] = useState('e');
  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:9876/numbers/${type}`);
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <div>
      <h1>Average Calculator</h1>
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="p">Prime</option>
        <option value="T">Fibonacci</option>
        <option value="e">Even</option>
        <option value="Y">Random</option>
      </select>
      <button onClick={fetchData}>Fetch Numbers</button>
      {data && (
        <div>
          <h2>Window Previous State: {data.windowPresState.join(', ')}</h2>
          <h2>Window Current State: {data.windowCurrState.join(', ')}</h2>
          <h2>Numbers: {data.numbers.join(', ')}</h2>
          <h2>Average: {data.avg}</h2>
        </div>
      )}
    </div>
  );
};

export default App;
