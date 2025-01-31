import { useState, useEffect } from 'react'
import '../App.css'
import Spinner from '../components/Spinner'

export function Home() {
    const [lat, setLat] = useState([])
    const [long, setLong] = useState([])
    const [data, setData] = useState([])

    useEffect(() => {
        // 1. Get location from browser
        // 2. Check if location is the same as last time
        // 3. If location is the same as last time, use data from localstorage
        // 4. IF data is older than 10 minutes, fetch new data
        // 5. If location is not the same as last time, fetch new data
        // 6. Save data to localstorage

        const fetchData = async () => {
            console.log('fetching data', lat, long)
            navigator.geolocation.getCurrentPosition((position) => {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });
            console.log('fetching data', lat, long)
            if (lat.length === 0 || long.length === 0) {
                console.log('no data')
                setData([])
                return
            }
            // https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
            const URL = `${import.meta.env.VITE_API_URL}lat=${lat}&lon=${long}&appid=${import.meta.env.VITE_API_KEY}&units=metric`
            await fetch(URL)
                .then(res => res.json())
                .then(result => {
                    setData(result)
                    console.log(result)
                }).catch(err => {
                    console.log(err)
                })
        }
        fetchData()
    }, [lat, long]);

    // datum formattering https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl/DateTimeFormat

    return (
        <main>
            <header>
                <nav>
                    <h1><a href="/">Puffes Weather</a></h1>
                    <div class="button-nav">
                        <ul class="nav-menu">
                            <li class="button nav-item"><a href="/om.html">about</a></li>
                            <li class="button nav-item"><a href="/kontakt.html">contact</a></li>
                        </ul>
                    </div>

                    <div class="hamburger">
                        <span class="bar"></span>
                        <span class="bar"></span>
                        <span class="bar"></span>
                    </div>
                </nav>
            </header>
            <article class='weather-card container'>
                {(typeof data.main !== 'undefined') ? (
                    <div class="card">
                        <h2>{data.name}</h2>
                        <p>Temprature: {data.main.temp}°C</p>
                        <p>Sunrise: {data.sys.sunrise}</p>
                        <p>Sunset: {data.sys.sunset}</p>
                        <p>Description: {data.weather[0].description}</p>
                    </div>
                ) : (
                    <Spinner />
                )}
            </article>
            <footer>
                <p>github: <a href="https://github.com/AlfredEngberg">AlfredEngberg</a></p>
            </footer>
        </main>
    )
}