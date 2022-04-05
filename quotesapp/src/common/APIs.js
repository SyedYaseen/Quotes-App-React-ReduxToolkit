import axios from "axios";
export const weatherAPIKey = 'c221472a05e4c098df3d9eb79887c2f5'

export const weatherAPI =  axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5/weather",
});
