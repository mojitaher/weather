import axios from "axios";

const API_KEY = "b2fc5ba075dd443ca7b125246252008";

export async function getApiForcast(city) {
  const res = await axios.get(
    `http://api.weatherapi.com/v1/forecast.json?q=${city}&key=${API_KEY}&days=3`
  );
  return res.data;
}
