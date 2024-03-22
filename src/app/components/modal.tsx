"use client"
import InputView from "./weatherInputView";
import React, { useState } from "react";
import axios from "axios";
import { ApiResponse } from "../types/ApiResponse";
import { WeatherData } from "../types/WeatherData"
import WeatherDisplay from "./weatherDisplayView";

const API_KEY = '35155dd724764fe50203af8a38bc37c8';
export default function Modal() {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [currentView, setCurrentView] = useState('input');
    const handleLocationSubmit = async (location: string) => {
        try {
            const response: ApiResponse = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`
            );
            setWeatherData(response.data);
            setError(null);
            onWeatherChange();
            
        } catch (error) {
            setError("Invalid location entered. Please provide a valid location.");
           setWeatherData(null);
        }
    };
    const onWeatherChange = () => {
      setCurrentView("weather");
    };


    return (
      <section id="mainModal" className="common__Modal">
        {currentView === "input" && (
          <InputView
            onSubmit={handleLocationSubmit}
            error={error}
            onWeatherChange={onWeatherChange}
          />
        )}
        {currentView === "weather" && (
          <WeatherDisplay weatherData={weatherData}/>
        )}
      </section>
    );
}
