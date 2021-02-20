import React, {useState} from "react"

const api ={
  key: "016d0a9b1a2338edcfba625fe678dbc6",
  base: "https://api.openweathermap.org/data/2.5/"
}

function App() {

    const [weather, setWeather] = useState({});
    const [query, setQuery] = useState('');

    function search (event){
      if (event.key==="Enter"){
        fetch(`${api.base}weather?q=${query}&units=metrics&APPID=${api.key}`)
          .then(response => response.json())
          .then(data => {
            setWeather(data)
            setQuery('')
            console.log(data)})
      }
    }

   function datebuilder (d){
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = [ "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
    
    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear()

    return ` ${day} ${date} ${month} ${year}` 
  }

  return (
    <div className={(typeof weather.main != "undefined") ? ((weather.main.temp > 280) ? "app warm" : "app") : "app"}>
       <main>
         <div className="search-box">
            <input
            type="text"
            className="search-bar"
            placeholder="Search..."
            onChange={e => setQuery(e.target.value)}
            value={query}
            onKeyPress={search}
            />
         </div>
         { (typeof weather.main != "undefined") ? 
         <div>
            <div className="location-box">
              <div className="location"> {weather.name}, {weather.sys.country}</div>
              <div className="date">{datebuilder(new Date())}</div>
          </div>
          <div className="weather-box">
              <div className="temp"> {Math.round(weather.main.temp)} °C</div>
              <div className="weather"> {weather.weather[0].main} </div>
          </div>
         </div>
         : ('')}
       </main>
    </div>
  );
}

export default App;
