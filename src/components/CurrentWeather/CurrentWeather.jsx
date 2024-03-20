import { day, hours, minutes, weekday } from "../../Date";
import style from "./CurrentWeather.module.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
function CurrentWeather({ data }) {
  

  return (
    <MDBContainer className="my-5">
      <MDBRow className="justify-content-center align-items-center h-100">
        <MDBCol md="8" lg="6" xl="4">
          <MDBCard style={{ color: "#4B515D", borderRadius: "35px" }}>
            <MDBCardBody className="p-4">
              <div className="d-flex">
                <MDBTypography tag="h6" className="flex-grow-1">
                  {data?.city}
                </MDBTypography>
                <div className="d-flex flex-column">
                  <MDBTypography tag="h6">{weekday[day].substring(0,3)}</MDBTypography>
                  <MDBTypography tag="h6">
                    {hours}:{minutes} {hours < 12 ? "AM" : "PM"}
                  </MDBTypography>
                </div>
              </div>

              <div className="d-flex flex-column text-center mt-5 mb-4 flex-column">
                <MDBTypography
                  tag="h6"
                  className="display-4 mb-0 font-weight-bold"
                  style={{ color: "#1C2331" }}
                >
                  {" "}
                  {data?.name}{" "}
                </MDBTypography>
                <MDBTypography
                  tag="h4"
                  className="display-4 mb-0 font-weight-bold"
                  style={{ color: "#1C2331" }}
                >
                  {" "}
                  {Math.round(data?.main.temp)}°C{" "}
                </MDBTypography>
                <span className="small" style={{ color: "#868B94" }}>
                  {data?.weather[0].description}
                </span>
              </div>

              <div className="d-flex align-items-center">
                <div className="flex-grow-1" style={{ fontSize: "1rem" }}>
                  <div>
                    <MDBIcon
                      fas
                      icon="wind fa-fw"
                      style={{ color: "#868B94" }}
                    />{" "}
                    <div className="d-flex flew-row justify-content-around">
                      <span className="ms-1"> wind </span>
                      <span className="ms-1"> {data.wind.speed} m/s</span>
                    </div>
                  </div>
                  <div>
                    <MDBIcon
                      fas
                      icon="tint fa-fw"
                      style={{ color: "#868B94" }}
                    />{" "}
                    <div className="d-flex flew-row justify-content-around">
                      <span className="ms-1"> Humidity </span>
                      <span className="ms-1"> {data.main.humidity}% </span>
                    </div>
                  </div>
                  <div>
                    <MDBIcon
                      fas
                      icon="sun fa-fw"
                      style={{ color: "#868B94" }}
                    />{" "}
                    <div className="d-flex flew-row justify-content-around">
                      <span className="ms-1"> Humidity </span>
                      <span className="ms-1"> {data.main.pressure} hPa </span>
                    </div>
                  </div>
                </div>
                <div>
                  <img
                    src={`icons/${data?.weather[0].icon}.png`}
                    width="100px"
                  />
                </div>
              </div>
            </MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default CurrentWeather;
