import logo from './logo.svg';
import './App.css';
import Search from './components/Search';
import CurrentWeather from './components/current-weather/CurrentWeather';
import { WEATHER_API_KEY, WEATHER_API_URL } from './api';


function App() {

  const handleOnSearchChange = (searchData) => {
    const [longitude, latitude] = searchData.split(" ")
    
    const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat={}&lon={}&appid={${WEATHER_API_KEY}}`)
  }
  return (
    <div className="container">
      <Search onSearchChange={handleOnSearchChange} /> 
      <CurrentWeather />
    </div>
  );
}

export default App;
