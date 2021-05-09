import React, { useState, useEffect } from 'react';
import axios from 'axios';

const App = (props) => {
  const [weather, setWeather] = useState(null);
  const [input, setInput] = useState('');
  useEffect(() => {
    axios.get('http://api.weatherapi.com/v1/current.json?key=826fb0c3b8b347919d974714210805&q=Addis Ababa&aqi=no')
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const weatherInput = (event) => {
    setInput(event.target.value);
  };

  const handleClick = () => {
    axios.get(`http://api.weatherapi.com/v1/current.json?key=826fb0c3b8b347919d974714210805&q=${input}`)
      .then((data) => {
        setWeather(data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      {weather && (
      <div>
        <div className="search">
          <input type="text" onChange={weatherInput} />
          <button type="button" onClick={handleClick}>Submit</button>
        </div>
        <h1> {weather.location.country }</h1>
        <h2> {weather.location.region}</h2>
        <div>
          <h2>{weather.current.condition.text}</h2>
          <img src={weather.current.condition.icon} alt="" />
          <h3>{weather.current.temp_c}</h3>
        </div>
      </div>
      )}
    </div>
  );
};

export default App;
