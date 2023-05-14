import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    'X-RapidAPI-Key': process.env.NEXT_PUBLIC_RAPID_KEY,
    'X-RapidAPI-Host': process.env.NEXT_PUBLIC_RAPID_HOST,
  }
})

export default api;