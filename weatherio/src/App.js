import React from 'react';
const api = {
  key: "de63a08e2b69aaad196e33265738eb7b",
  base: "https://api.openweathermap.org/data/2.5"
}

function App() {
  return (
    <div className = "app">
      <main>
        <div className = "searchBox">
          <input 
            type = "text"
            className = "searchBar"
            placeholder = "Search Here"
            >
          </input>
        </div>
      </main>
    </div>
  );
}

export default App;
