import { useState } from "react";
import axios from "axios";

function PredictionForm() {
  const [formData, setFormData] = useState({
    temp: 289,
    rain_1h: 0,
    snow_1h: 0,
    clouds_all: 75,
    hour: 10,
    day: 2,
    month: 10,
    weekday: 1,
    is_peak_hour: 1,
  });

  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: Number(e.target.value),
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/predict",
        formData
      );

      setPrediction(response.data.predicted_traffic_volume);
    } catch (error) {
      console.error(error);
      alert("Error connecting to backend");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          name="temp"
          placeholder="Temperature"
          value={formData.temp}
          onChange={handleChange}
        />

        <br />
        <br />

        <input
          type="number"
          name="hour"
          placeholder="Hour"
          value={formData.hour}
          onChange={handleChange}
        />

        <br />
        <br />

        <button type="submit">Predict Traffic</button>
      </form>

      {prediction && (
        <h2>Predicted Traffic Volume: {prediction}</h2>
      )}
    </div>
  );
}

export default PredictionForm;