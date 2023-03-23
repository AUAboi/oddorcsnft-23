import React from 'react'
import './podcast.css'


const Podcast = () => {
  return (
    <div>
        <div className='podcast-content' id='podcast'>
            <h2>Podcast: 'The Odd Cave'</h2>
                <div className="podcast-section">
                <div className="video-container">
                <iframe
                    src="https://www.youtube.com/embed/cmri8ToDMqs"
                    frameBorder="0"
                    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                ></iframe>
            </div>
           
            <div className="podcast-text">
                <h1>Welcome to the oddest podcast in Web3!<br>
                </br>Hosted by Pluto, Ryan Ezio & EllisGC.<br>
                </br>We plan to sit down with founders, creatives and entrepreneurs<br>
                </br>To pick their brain and discuss the culture & technology we call Web3.</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Podcast