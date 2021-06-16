import React from "react";

const Pogoda = (props) => (
   <div>
  {props.city &&
    <div>
  <p>Местоположение: {props.city}, {props.country}</p>
  <p>Температура: {props.temp}</p>
  <p>Давление: {props.pressure}</p>
  <p>Заход солнца: {props.sunset}</p>
    </div>
}
<p>{props.err}</p>
  </div>);
export default Pogoda;
