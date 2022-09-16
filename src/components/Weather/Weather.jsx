import React from 'react'
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
  return (
    <Container>
      <TopWeather>
        <Numbers>
          <div className='Location'>
              <City>{data.name}, {data.sys ? data.sys.country: ''}</City>
            </div>
            <Temperature className='temp'>
              {data.main ? <Degree>{data.main.temp.toFixed()}°</Degree>:null}
            </Temperature>
            <div className='weather'>
                <City className='description'>{data.weather ? data.weather[0].description : null}</City>
            </div>
        </Numbers>
          {data.name && (
            <Unit>
            <span>F</span>
            <span>C</span>
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
