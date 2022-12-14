import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import {Container,
        TopWeather,
        Degree,
        City,
        MainContainer,
        Box,
        BoxTitle,
        Temperature,
        Unit,
        TempOptions,
        Numbers} from './weather.style.js'

const Weather = ({data}) => {
  const number = data.main ? data.main.temp: null
  const [value, setValue] = useState(number)

  useEffect(() => {
    if(data && data.main){
      setValue(data.main.temp)
    }
  }, [data])

  const HandleCelcius = () => {
    let celcius = (value - 32) / 1.8
    setValue(celcius)
  }

  const HandleFahrenheit = () => {
    setValue(data.main.temp)
  }

  return (
    <Container>
      <TopWeather>
        <Numbers>
          <div className='Location'>
          {data.name ? <City>{data.name}, {data.sys ? data.sys.country: ''}</City>: '' }
            </div>
            <Temperature className='temp'>
              {value !== null ? <Degree>{value.toFixed()}°</Degree>: ''}
            </Temperature>
            <div className='weather'>
                <City className='description'>{data.weather ? data.weather[0].description : null}</City>
            </div>
        </Numbers>
          {data.name && (
            <Unit>
            <TempOptions onClick={HandleFahrenheit}>F</TempOptions>
            <TempOptions onClick={HandleCelcius}>C</TempOptions>
          </Unit>
          )}

      </TopWeather>

      {data.name && (
        <MainContainer>
        <Box>
          <BoxTitle>Feels Like</BoxTitle>
          {value !== null ? <p>{value.toFixed()}°</p>: ''}
        </Box>
        <Box>
          <BoxTitle>Humidity</BoxTitle>
          {data.main ? <p>{data.main.humidity}%</p> : ''}
        </Box>
        <Box>
          <BoxTitle>Wind</BoxTitle>
          {data.wind ? <p>{data.wind.speed.toFixed()} m/h</p> : ''}
        </Box>
        <Box>
          <BoxTitle>Visibility</BoxTitle>
          <p>{data.visibility} Km</p>
        </Box>
      </MainContainer>
      )}
      
    </Container>
  )
}

export default Weather
