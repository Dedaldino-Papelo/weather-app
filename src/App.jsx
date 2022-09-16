import './App.css'
import axios from 'axios'

import Header from './components/Header/Header'
import Weather from './components/Weather/Weather'
import { useState } from 'react'

function App() {
  const [data, setData] = useState({})
  const [city, setCity] = useState('')

  const InputChange = async(e) => {
    setCity(e.target.value)
  }

  const HandleSubmit = async e => {
    if(e.key === 'Enter'){
      const resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${import.meta.env.VITE_WEATHER_KEY}`)
      setData(resp.data)
      console.log(resp.data)
    }
  }

  return (
    <div className="App">
      <Header HandleChange={InputChange} HandleSubmit={HandleSubmit}  />
      <Weather data={data} />
    </div>
  )
}

export default App
