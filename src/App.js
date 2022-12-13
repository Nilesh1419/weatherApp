import React, { useState } from "react";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Weather />
    </div>
  );
}

const Weather = () => {
  let apiLink = "4d1d6b2945de6e446c1bef17cc59a05a";
  const [form, setForm] = useState({
    city: "",
    country: ""
  });

  const [weather, setWeather] = useState([]);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "city") {
      setForm({ ...form, city: value });
    }
    if (name === "country") {
      setForm({ ...form, country: value });
    }
    console.log(form.city, form.country);
  };

  const SubmitHandle = (e) => {
    e.preventDefault();
    if (form.city === "") {
      alert("Add Values");
    } else {
      let data = fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${form.city},${form.country}&appid=${apiLink}`
      )
        .then((response) => response.json)
        .then((data) => setWeather({ data: data }));
    }
  };
  const report = weather.data;

  return (
    <div>
      <br />
      <br />
      <span className="span1">Weather App</span>
      <form>
        {" "}
        <br />
        <br />
        <input
          type="text"
          name="city"
          placeholder="city"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        &nbsp;&nbsp;
        <input
          type="text"
          name="country"
          placeholder="country"
          onChange={(e) => handleChange(e)}
        />
        <br />
        <br />
        <button onClick={SubmitHandle} className="getWeather">
          Submit
        </button>
        {weather.data !== undefined ? <div>{report.main.temp}</div> : null}
      </form>
    </div>
  );
};
