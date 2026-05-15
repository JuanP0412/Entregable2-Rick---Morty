import React from 'react'
import './Loading.css'
import LoadingGif from '../../assets/Rick-Morty-Portal.gif' 

const Loading = () => {
  return (
    <div className='loading-container'>
      <img
        src={LoadingGif}
        alt="Loading..."
        className='loading-gif'
      />
      <p className='loading-text'>Opening portal...</p>
    </div>
  )
}

export default Loading