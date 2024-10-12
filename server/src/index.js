const express = require('express');
const cors = require('cors');
const axios = require('axios');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/weather', async (req, res) => {
  const city = req.query.city;

  try {
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.WEATHER_API_KEY}&units=metric`);
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});


app.get('/api/weather/forecast', async (req, res) => {
  const city = req.query.city;

  try {
    const responseLatLon = await axios.get(`https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${process.env.WEATHER_API_KEY}`);
    const responseForecast = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${responseLatLon.data[0].lat}&lon=${responseLatLon.data[0].lon}&appid=${process.env.WEATHER_API_KEY}`);
    res.json(responseForecast.data);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching weather data' });
  }
});


app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
