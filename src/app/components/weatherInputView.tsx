"use client";
import React, { useState } from "react";

interface LocationInputProps {
  onSubmit: (location: string) => void;
  error?: string | null | undefined;
  onWeatherChange: any;
}
const InputView: React.FC<LocationInputProps> = ({
  onSubmit,
  error,
  onWeatherChange,
}) => {
  const [location, setLocation] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(location);
    setLocation("");
  };
  return (
    <div className="modal__card">
      <div className="card__header">
        <span className="header__title">Weather App</span>
      </div>
      <div className="card__body">
        <form className="body__form" onSubmit={handleSubmit}>
          <input
            className="body__input"
            value={location}
            type="text"
            onChange={(e) => setLocation(e.target.value)}
            placeholder="Enter city name"
          />
          <hr className="or__border" data-content="or"></hr>
          {error && <p className="error-message">{error}</p>}
          <div className="card__footer">
            <button type="submit" className="footer__button">
              Get Device Location
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default InputView;
