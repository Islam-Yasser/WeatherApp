import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from "react-accessible-accordion";
import style from "./Forecast.module.css";
import { day, weekday } from "../../Date";
function Forecast({ data }) {
  const forcastDays = weekday
    .slice(day, weekday.length)
    .concat(weekday.slice(0, day));
  return (
    <>
      <label htmlFor="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.slice(0, 7).map((item, idx) => (
          <AccordionItem key={idx}>
            <AccordionItemHeading>
              <AccordionItemButton>
                <div
                  className={`${style.forecastDay} my-4 d-flex justify-content-between align-items-center py-3`}
                >
                  <label className="ml-2" htmlFor="day">
                    {forcastDays[idx]}{" "}
                  </label>
                  <label htmlFor="descriptions" className="text-center">
                    {item.weather[0].description}{" "}
                  </label>
                  <div className="d-flex flex-column">
                    <img
                      alt="weather"
                      src={`icons/${item.weather[0].icon}.png`}
                    />
                    <label htmlFor="min-max" className="text-center">
                      {Math.round(item.main.temp_min)}°C /{" "}
                      {Math.round(item.main.temp_max)}°C{" "}
                    </label>
                  </div>
                </div>
              </AccordionItemButton>
            </AccordionItemHeading>
            <AccordionItemPanel>
              <div className="d-flex flex-column">
                <div className="d-flex flex-row justify-content-between">
                  <div >
                    <label>Pressure:</label>
                    <label>{item.main.pressure} </label>
                  </div>
                  <div >
                    <label>Humidity:</label>
                    <label>{" "}{item.main.humidity} hPa</label>
                  </div>
                  <div >
                    <label>Clouds:</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                </div>
                <div className="d-flex flex-row justify-content-between">
                  <div >
                    <label>Wind speed:</label>
                    <label>{item.wind.speed} m/s</label>
                  </div>
                  <div >
                    <label>Sea level:</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div >
                    <label>Feels like:</label>
                    <label>{item.main.feels_like}°C</label>
                  </div>
                </div>
              </div>
            </AccordionItemPanel>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  );
}

export default Forecast;
