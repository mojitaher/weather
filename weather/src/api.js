import axios from "axios";
export async function getLangAndLatWithCity(city) {
  const res =
    await axios.get(`https://geocoding-api.open-meteo.com/v1/search?name=${city}&count=1&language=fa&format=json 
`);
  return res.data;
}
const API_KEY = "b2fc5ba075dd443ca7b125246252008";
export default async function getAPI(lat, lang) {
  const res = await axios.get(
    `http://api.weatherapi.com/v1/current.json?q=${lat},${lang}&key=${API_KEY}`
  );
  return res.data;
}
export async function getCoordinates(city) {
  const cityData = await getLangAndLatWithCity(city);
  if (!cityData?.results?.length) {
    console.log("City not found");
    return;
  }

  return {
    lat: cityData.results[0].latitude,
    lon: cityData.results[0].longitude,
  };
}
export async function fetchWeather(lat, lon) {
  const data = await getAPI(lat, lon);
  if (!data) alert("Weather not found");
  return data;
}
export async function getWeatherByCity(city) {
  const coords = await getCoordinates(city);
  if (!coords) return null;

  return await fetchWeather(coords.lat, coords.lon);
}
