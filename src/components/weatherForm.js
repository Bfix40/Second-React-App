import { useEffect, useState } from "react";
import getWeather from "../services/data";
import Weather from "./currentWeather";
import DisplayWeatherInfo from "./displayWeatherInfo";
import Spinner from "./spinner";

const WeatherForm = () => {
    //set initial state
    const [city, setCity] = useState('')
    const [country, setCountry] = useState('')
    const [humidity, setHumidity] = useState(0)
    const [pressure, setPressure] = useState(0)
    const [temperatureC, setTemperatureC] = useState(0)
    const [temperatureF, setTemperatureF] = useState(0)
    const [cloudy, setCloudy] = useState(0)
    const [wind, setWind] = useState(0)
    const [description, setDescription] = useState("")
    const [icon, setIcon] = useState("")
    const [haveDataLocation, setHaveDataLocation] = useState(false);
    const [haveDataWeather, setHaveDataWeather] = useState(false)


    useEffect(() => {
        navigator.geolocation.getCurrentPosition((pos) => {
            setHaveDataLocation(true)
            getWeather(pos.coords.latitude, pos.coords.longitude).then((e) => {

                setHaveDataWeather(true)
                console.log(e)
                setCity(e.data.name)
                setCountry(e.data.sys.country)
                setHumidity(e.data.main.humidity)
                setPressure(e.data.main.pressure)
                setTemperatureC(e.data.main.temp)
                setTemperatureF(((e.data.main.temp * 9 / 5) + 32))
                setCloudy(e.data.clouds.all)
                setWind(e.data.wind.speed)
                setDescription(e.data.weather[0].description)
                setIcon(e.data.weather[0].icon)

    })
  
    })
    
    }, [])
    
    return(
        <div className='weather-container'> 
              <div className='weather-icon'>
              <img src={`http://openweathermap.org/img/wn/${icon}@2x.png`} alt="" />
                <h4>{description}</h4>
            </div>
            {haveDataLocation && haveDataWeather ?
                <>
                <Weather temperatureC={temperatureC} temperatureF={temperatureF}  city={city} country={country} />
                <DisplayWeatherInfo humidity={humidity} pressure={pressure} cloudy={cloudy} wind={wind} />
                </>
            :<Spinner/>} 
        </div>
    )
}

export default WeatherForm


