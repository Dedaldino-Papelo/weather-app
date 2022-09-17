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
        Numbers} from './weather.style.js'

const Weather = ({data}) => {
  const [value, setValue] = useState(null)

  useEffect(() => {
    if(data && data.main){
      setValue(data.main.temp)
    }
  }, [data])

  const HandleCelcius = () => {
    let celcius = 32
    setValue(celcius)
  }

  return (
    <Container>
      <TopWeather>
        <Numbers>
          <div className='Location'>
              <City>{data.name} {data.sys ? data.sys.country: ''}</City>
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
            <span>F</span>
            <span onClick={HandleCelcius}>C</span>
          </Unit>
          )}

      </TopWeather>

      {data.name && (
        <MainContainer>
        <Box>
          <BoxTitle>Feels Like</BoxTitle>
          {data.main ? <p>{data.main.feels_like.toFixed()}° F</p> : ''} 
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
