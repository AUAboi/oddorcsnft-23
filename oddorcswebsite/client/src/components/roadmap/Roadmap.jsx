import React from 'react'
import './roadmap.css'
import roadmap from '../../assets/roadmap.png';



const Roadmap = () => {

const gitbookLink = "https://oddorcsio.gitbook.io/odd-orcs/welcome/roadmap";

  return (
    <div>
      <div className='road' id='roadmap'></div>
        <div className='roadmap-content'>
            <h2>Roadmap</h2>
        </div>
        <a href={gitbookLink} target="_blank" rel="noopener noreferrer">
        <img className='image-container' src={roadmap} alt="Roadmap">
        </img>
        </a>
        <hr className='shadow' />
    </div>
  )
}

export default Roadmap