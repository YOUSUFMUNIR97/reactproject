import React from 'react'
import herosecimg from '../assets/bg-home.jpg'
import '../App.css'

const Herosection = () => {
  return (
    <>
      <img className='bgimg' src={herosecimg}/>
      <div className=' bg-overlay'></div>
      <div className="centered  text-center"><h1>We help startups launch their products</h1>
      <p>Etiam sed.Interdum consequat proin vestibulum class at.</p></div>
      

    </>
  )
}

export default Herosection
