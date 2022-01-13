import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
    const apikey = "ed737a1e205906b20190b3b5ffb75de0"
    const [inputCity, setInputCity] = useState("")
    const [data, setdata] = useState({})
    const getWeatherDetails = (cityName) => {
        if (!cityName) return
        const apiurl = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=" + apikey
        axios.get(apiurl).then((res) => {
            console.log("response", res.data)
            setdata(res.data)
        }).catch((err) => {
            console.log("error", err)
        })
    }
    const handleChangeInput = (e) => {
        setInputCity(e.target.value)
    }
    const handleSearch = () => {
        getWeatherDetails(inputCity)
    }

    //   useEffect(() => {
    //     getWeatherDetails("Rohtak")
    //   }, [])

    return (
        <div className="col-md-12">
            <div className="weatherBg">
                <h1 className="heading">
                    Weather App
                </h1>
                <div className="d-grid gap-3 col-4 mt-4 form">
                    <input type="text" className='form-control' onChange={handleChangeInput} />
                    <button className="btn btn-primary" type="button" onClick={handleSearch}>Search</button>
                </div>
            </div>
            {Object.keys(data).length > 0 &&
                <div className="col-md-12 text-center mt-5">
                    <div className="shadow rounded weatherResultBox">
                        <img className="weather-icon" src="https://i.pinimg.com/originals/06/c4/f7/06c4f70ec5931e2342e703e8a3f0a253.png" alt="weather icon" />
                        <p className='weather-city'>{data?.name}</p>
                        <p className='weather-temp'>{((data?.main?.temp) - 273.15).toFixed(2)}°C</p>
                    </div>
                </div>
            }
        </div>

    );
}

export default Home
