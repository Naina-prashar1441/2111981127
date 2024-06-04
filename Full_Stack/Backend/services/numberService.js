const axios = require('axios');

const fetchNumbers = async (type) => {
  try {
    const response = await axios.get(`https://localhost:9876/numbers/${type}`, { timeout: 500 });
    return response.data.numbers;
  } catch (error) {
    console.error('Error fetching numbers:', error.message);
    return null;
  }
};

module.exports = {
  fetchNumbers
};
