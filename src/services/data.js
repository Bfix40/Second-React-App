import axios from "axios";

const getWeather =  (lat, lon) => {
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=d82eeb6d5afbba9343ddf3167de69194&units=metric`
    const res = axios.get(URL)
    return res
}
export default getWeather