import { WeatherAPI } from "../../types/types";

interface Props {
  data: WeatherAPI | undefined;
}

export const WeatherScreen = ({ data }: Props) => {
  if (!data) return null;

  let icon = "";

  switch (data.weather[0].main) {
    case "Clouds":
      icon = "☁️";
      break;
    case "Clear":
      icon = "☀️";
      break;
    case "Haze":
      icon = "🌫️";
      break;
    case "Rain":
      icon = "🌧️";
      break;
    case "Snow":
      icon = "❄️";
      break;
    case "Thunderstorm":
      icon = "⛈️";
      break;
    default:
      icon = "🌤️";
      break;
  }

  const newSunrise = new Date(data.sys.sunrise * 1000).toLocaleTimeString(
    "en-EU"
  );
  const newSunset = new Date(data.sys.sunset * 1000).toLocaleTimeString(
    "en-EU"
  );

  return (
    <>
      <div className="city-info">
        <div className="title">
          <i>{icon}</i>
          <p>
            {data.name}, {data.sys.country}
          </p>
        </div>
      </div>
      <div className="weather-info">
        <p className="description">{data.weather[0].main}</p>
        <p className="temperature">
          {Math.round(data.main.temp)}
          <span>ºC</span>
        </p>
        <div className="min-max">
          <p>
            <span>Feels like: </span>
            {data.main.feels_like} ºC
          </p>
          <p>
            <span>Min: </span>
            {data.main.temp_min} ºC
          </p>
          <p>
            <span>Max: </span>
            {data.main.temp_max} ºC
          </p>
        </div>
        <div className="other-info">
          <p>
            <span>Sunrise: </span>
            {newSunrise}
          </p>
          <p>
            <span>Sunset: </span>
            {newSunset}
          </p>
        </div>
      </div>
    </>
  );
};
