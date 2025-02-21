import React from 'react'
import '../App.css'
import notFoundLogo from '../assets/public/notFound-removebg-preview.png'
const NotFound = () => {
  return (
    <div className='not-found'>
      <img src={notFoundLogo} alt="Not Found" />
      
    </div>
  )
}

export default NotFound
