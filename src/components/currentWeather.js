import { useState } from 'react'

const Weather = ({temperatureC, temperatureF, city, country}) => {
    const [isCelsious, setIsCelsuios] = useState(true)
    return(
        <div className='weather'>
            <div className='weather-content'>
                <button onClick={() => setIsCelsuios(!isCelsious)}>{isCelsious ? temperatureC : temperatureF}°</button>
                <div>
                    <h3>Click to the number<br/> to change to</h3>
                    <h3>{isCelsious ? "Farenheit" : "Celsious"}</h3>
                </div>
            </div>
            <div className='weather-location'>
                <h3>{city}</h3>
                <h5>{country}</h5>
            </div>
          
        </div>
    )
}
export default Weather