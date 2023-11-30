import React from 'react'
import './posibility.css'
import posibility from '../../assets/possibility.png'

const Posibility = () => {
  return (
    <div className='gpt3__posibility section__padding' id="possibility">
      <div className='gpt3__posibility-image'>
        <img src={posibility} alt= "posibility"/>
      </div>
      <div className='gpt3__posibility-text'>
          <p id='p1'>Request Early Access to Get Started</p>
          <h1 className='gradient__text'>The possibilities are beyond your imagination</h1>
          <p id='p2'>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
          <p id='p3'>Request Early Access to Get Started</p>
      </div>
      
    </div>
  )
}

export default Posibility
