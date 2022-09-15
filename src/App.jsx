import './App.css'
import axios from 'axios'
import { useEffect, useState } from 'react'
import Header from './components/Header/Header'

function App() {
  const [data, setData] = useState([])

  const url = `https://api.openweathermap.org/data/2.5/weather?q=Luanda&appid=${import.meta.env.VITE_WEATHER_KEY}`

  useEffect(() => {
    axios.get(url)
    .then(resp => console.log(resp.data))
    .catch(err => console.log(err))
  })

  return (
    <div className="App">
      <Header />
      <h2>Hello</h2>
    </div>
  )
}

export default App
