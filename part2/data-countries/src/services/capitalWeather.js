import axios from "axios";

const api_key = import.meta.env.VITE_SOME_KEY;

const getWeather = (capital) => {
    return axios
        .get(`http://api.openweathermap.org/data/2.5/find?q=${capital}&appid=${api_key}`); // Devuelve la promesa completa
};

export default { getWeather };