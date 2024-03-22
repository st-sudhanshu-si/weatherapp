import React from "react";
import { FaArrowLeft, FaLocationDot, FaTemperatureLow } from "react-icons/fa6";
import { BsDropletHalf } from "react-icons/bs";
interface WeatherData {
  weatherData: any;

}
const kelvinToCelsius = (kelvin: number) => {
  return (kelvin - 273.15).toFixed(2);
};
const WeatherDisplay: React.FC<WeatherData> = ({ weatherData }) => {
  return (
    <div className="modal__cardDisplay">
      <div className="card__header">
        <span className="header__title">
          <FaArrowLeft className="back__arrow" />
          Weather App
        </span>
      </div>
      <div className="card__bodyDisplay">
        <img
          src={`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`}
          alt={weatherData.weather[0].description}
          className="weather-icon"
        />
        <h1 className="celsiusData">
          {kelvinToCelsius(weatherData.main.temp)} °C
        </h1>
        <p className="weatherMain">{weatherData.weather[0].main}</p>
        <p className="locationData">
          <FaLocationDot />
          {weatherData.name}
        </p>
      </div>
      <div className="card__footerDisplay">
        <div className="feels-like">
          <p>
            <FaTemperatureLow className="feels-like-icon" />
            {weatherData.main.feels_like}
          </p>
        </div>
        <div className="humidity">
          <p>
            <BsDropletHalf className="humidityIcon" />
            {weatherData.main.humidity}
          </p>
        </div>
      </div>
    </div>
  );
};

export default WeatherDisplay;