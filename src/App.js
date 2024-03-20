import { Container } from "react-bootstrap";
import Search from "./components/Search/Search.jsx";
import { Weather_Api_Key, Weather_Url } from "./Api.js";
import { useState } from "react";
import CurrentWeather from "./components/CurrentWeather/CurrentWeather.jsx";
import Forecast from "./components/Forecast/Forecast.jsx";

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecast, setforecast] = useState(null);

  const handleOnSearchChange = (value) => {
    const [lat, long] = value.value.split(" ");

    const WeartherFetch = fetch(
      `${Weather_Url}/weather?lat=${lat}&lon=${long}&appid=${Weather_Api_Key}&units=metric`
    );
    const ForecastFetch = fetch(
      `${Weather_Url}/forecast?lat=${lat}&lon=${long}&appid=${Weather_Api_Key}&units=metric`
    );
    Promise.all([WeartherFetch, ForecastFetch])
      .then(async (responses) => {
        const weatherResponse = await responses[0].json();
        const forecastrResponse = await responses[1].json();

        setCurrentWeather({ city: value.label , ...weatherResponse });
        setforecast({ city: value.label , ...forecastrResponse });
      })
      .catch((err) => console.log(err));

    console.log(currentWeather);
    console.log(forecast);
  };
  return (
    <div>
      <Container className="d-flex justify-content-center my-5">
        <div className="w-100">
          <Search onSearchChange={handleOnSearchChange} />
          {currentWeather&&<CurrentWeather data={currentWeather} />}
          {currentWeather&&<Forecast data={forecast} />}
        </div>
      </Container>
    </div>
  );
}

export default App;
