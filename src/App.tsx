import { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { Navbar } from "./components/Navbar/Navbar";
import { WeatherScreen } from "./components/Navbar/WeatherScreen";
import { WeatherAPI } from "./types/types";

function App() {
  const [data, setData] = useState<WeatherAPI>();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>("");
  const [city, setCity] = useState<string>("Barcelona");

  useEffect(() => {
    const getWeather = async () => {
      setLoading(true);
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=41296a53eeeeae85ceab537b2aae439f&units=metric`
      );
      if (!response.ok) {
        setError("City not found");
        setLoading(false);
        return;
      }
      const data = await response.json();

      setData(data);
      setError("");
      setLoading(false);
    };
    getWeather();
  }, [city]);

  const handleCityChange = (city: string) => {
    setCity(city);
  };

  return (
    <div className="desktop">
      <Navbar onCityChange={handleCityChange} />
      <div className="main-container">
        {loading && <Loader />}
        {!error && !loading && <WeatherScreen data={data} />}
        {error && <p>{error}</p>}
      </div>
    </div>
  );
}

export default App;
