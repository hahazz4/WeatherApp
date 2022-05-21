import React, {useState} from 'react';
const api = {
  key: "de63a08e2b69aaad196e33265738eb7b",
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
      fetch(`${api.base}weather?q=${query}&units=metric&appid=${api.key}`)
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
      // if (typeof weather.main != "undefined"){
      //   if ((weather.main.temp > 16) 
      //     className = 'app warm';
      // }
      
      (typeof weather.main != "undefined")
        ? ((weather.main.temp > 16) 
          ? 'app warm' : 'app') : 'app'

        // ? (weather.main.temp < 12)
        //   // ? 'app.cold' : 'app'
        //     ? ((weather.weather[0].main === 'clear')
        //       ? 'app clear' : 'app') : 'app' : 'app'
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
