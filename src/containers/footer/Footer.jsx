import React from 'react'
import './footer.css'

const Footer = () => {
  const links = [
    {
      header: "Links",
      items: ['Overons', "Social Media", "Counters", "Contact"]
    },
    {
      header: "Company",
      items: ['Terms & Conditions', "Privacy Policy", "Contact"]
    },
    {
      header: "Get in touch",
      items: ['Crechterwoord K12 182 DK Alknjkcb', "085-132567", "info@payme.net"]
    },
  ]
  return (
    <div className='gpt3__footer'>
      <div className='gpt3__footer-header'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
        <button>Request Early Access</button>
      </div>

      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links__header'>
          <h1>GPT-3</h1>
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links__lists'>
          {links.map((item, index) =>
            <div className='gpt3__footer-links__lists-column' key={index}>
              <h3>{item.header}</h3>
              {item.items.map((subItem, subIndex) => (
                <li>
                  {subItem}
                </li>
              ))}
            </div>
          )}
        </div>
          
      </div>
      <div className='gpt3__footer-rights'>
                  <p>© 2021 GPT-3. All rights reserved.</p>
          </div> 
    </div>
  )
}

export default Footer
