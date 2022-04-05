import React from 'react'
import './Weather.css'



export default function Weather(props) {

  const {name, description, iconLink, main} = props.weather
  
  return (
    <div className='weather-wrapper'>
      <div className='icon-wrapper'>
        <img src={iconLink} alt='weatthericon'/>
      </div>
      <div className='info-wrapper'>
        <h4 className='zero-margin'>{main}</h4>
        <p className='zero-margin'>{description}</p>
      </div>
    </div>
  )
}
