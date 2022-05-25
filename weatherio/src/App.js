import React, {useState} from 'react';
import REACT_APP_WEATHER_API_KEY from './apiKey';

const api = {
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

  let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

  const current = new Date();
  const date = `${days[current.getDay()]}, ${months[current.getMonth()]} ${current.getDate()}, ${current.getFullYear()}`;

  const [query, setQuery] = useState('');
  const [weather, setWeather] = useState({});

  const search = evt => {
    
    if (evt.key === "Enter"){
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${REACT_APP_WEATHER_API_KEY}`)
        .then(res => res.json())
        .then(result => {
          setWeather(result);
          setQuery('');
          console.log(result);
        });
    }
  }

  return (
    <div className = {
      (typeof weather.main != "undefined")
        ? ((weather.main.temp > 16) 
          ? 'app warm' : 'app') : 'app'
    }>
    
    <main>
        
    <div className = "searchBox">
      <input 
        type = "text"
        className = "searchBar"
        placeholder = "Search Here"
        onChange = {e => setQuery(e.target.value)}
        value = {query}
        onKeyPress = {search}>
      </input>
    </div>

      {(typeof weather.main != "undefined") ? (
        <div>
          <div className = "locationBox">
            <div className = "location">
              {weather.name}, {weather.sys.country}
            </div>

            <div className = "date">
              {date}
            </div>
          </div>

          <div className = "weatherBox">
            <div className = "temp">
              {Math.round(weather.main.feels_like)}°C
            </div>

            <div className = "weather">
              {weather.weather[0].main}
            </div>
          </div>
        </div>
        ) : ('')}
      </main>
      </div>
  );
}

export default App;
