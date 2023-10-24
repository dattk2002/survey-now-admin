import React from 'react'
import background from "../assets/bg.png";

const Background = () => {
  return (
    <div className='bg-container'>
      <img src={background} alt="background" style={{ width: '100%'}}/>;
    </div>
  )
}

export default Background