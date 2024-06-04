const express = require('express');
const router = express.Router();
const numberService = require('../services/numberService');

const WINDOW_SIZE = 10;
let numbersWindow = [];

router.get('/:type', async (req, res) => {
  const { type } = req.params;

  if (!['p', 'T', 'e', 'Y'].includes(type)) {
    return res.status(400).send('Invalid type parameter');
  }

  const windowPresState = [...numbersWindow];
  const newNumbers = await numberService.fetchNumbers(type);

  if (newNumbers) {
    newNumbers.forEach(num => {
      if (!numbersWindow.includes(num)) {
        if (numbersWindow.length >= WINDOW_SIZE) {
          numbersWindow.shift();
        }
        numbersWindow.push(num);
      }
    });

    const avg = numbersWindow.reduce((acc, num) => acc + num, 0) / numbersWindow.length;

    res.json({
      windowPresState,
      windowCurrState: numbersWindow,
      numbers: newNumbers,
      avg: avg.toFixed(2)
    });
  } else {
    res.status(500).send('Error fetching numbers');
  }
});

module.exports = router;
