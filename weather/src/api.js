import axios from "axios";

const API_KEY = process.env.NEXT_PUBLIC_API_KEY;
const baseUrl = process.env.NEXT_PUBLIC_API_BASE;

export async function getApiForcast(city) {
  const res = await axios.get(`${baseUrl}?q=${city}&key=${API_KEY}&days=3`);
  return res.data;
}
