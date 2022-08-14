import "./currentWeather.css";

const CurrentWeather = () => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">Lagos</p>
          <p className="weather-description">Sunny</p>
        </div>
        <img src="" alt="weather" className="weather-icon" />
      </div>
      <div className="bottom">
        <p className="temprature"></p>
        <div className="details">
          <div className="parameter-row">
            <span className="parameter-label top">Details</span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Feels like</span>
            <span className="parameter-label"></span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Wind</span>
            <span className="parameter-label"></span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">Humidity</span>
            <span className="parameter-label"></span>
          </div>
          <div className="parameter-row">
            <span className="parameter-label">pressure</span>
            <span className="parameter-label"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
