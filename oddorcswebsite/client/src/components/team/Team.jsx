import React, { useState } from 'react'
import Ryan from '../../assets/ryan.jpg';
import Ellis from '../../assets/ellis.jpg';
import Pluto from '../../assets/pluto.jpg';
import Nico from '../../assets/nico.jpg';
import Snitgut from '../../assets/693.png';
import Ratnob from '../../assets/896.png';
import Bawsa from '../../assets/Bawsa.png'
import Bawsa2 from '../../assets/Bawsa-JPG.jpg'

import './team.css';
import { FaTwitterSquare, FaInstagramSquare} from 'react-icons/fa';


const Team = () => {
  const [flipped, setFlipped] = useState(false);

  const handleClick = () => {
    setFlipped(!flipped);
  }


  return (
    <div>
      <div className='team' id='team'>
        <div className='team-content'>
            <h2>MEET THE TEAM</h2>
        </div>
        <div className='card-container'>

          <div className='card-box'>
        <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick} >
          <div className='front'>
            <img src={Snitgut} alt="Front of Card" />
          </div>
          <div className='back'>
          <img src={Ryan} alt="Back of Card" />
          </div>
        </div>
        
        <div className='text-and-icons-container'>
        <div className='card-text'>
          <p>Ryan</p> 
         <p> Irish Artist</p>
          <p> Co-Founder</p> 
           <p>Snitgut Leader</p>
        </div>
        <div className='social-icons'>
        <a href="https://twitter.com/Ryan_Ezio"  target="_blank" rel="noopener noreferrer"><FaTwitterSquare size={24} color="#ffff" /></a>
        <a href="https://www.instagram.com/ryan_ezio/"  target="_blank" rel="noopener noreferrer"><FaInstagramSquare size={24} color="#ffff" /></a>
        </div>
        </div>
        </div>


        <div className='card-box'>
        <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick} >
          <div className='front'>
            <img src={Ratnob} alt="Front of Card" />
          </div>
          <div className='back'>
          <img src={Ellis} alt="Back of Card" />
          </div>
        </div>
        <div className="text-and-icons-container">
        <div className='card-text'>
          <p>Ellis</p>
         <p> Irish Developer</p>
           <p>Co-Founder</p>
           <p>Ratnob Head Honcho</p>
        </div>
        <div className='social-icons'>
        <a href="https://twitter.com/EllisGC_"  target="_blank" rel="noopener noreferrer"><FaTwitterSquare size={24} color="#ffff" /></a>
        <a href="https://www.instagram.com/ellisgc_/"  target="_blank" rel="noopener noreferrer"><FaInstagramSquare size={24} color="#ffff" /></a>
        </div>
        </div>
        </div>


        <div className='card-box'>
        <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick} >
          <div className='front'>
            <img src={Pluto} alt="Front of Card" />
          </div>
          <div className='back'>
          <img src={Nico} alt="Back of Card" />
          </div>
        </div>

        <div className='text-and-icons-container'>
        <div className='card-text'>
         <p>Pluto</p>
          <p>Voice of Odd Orcs</p>
           <p>Creative Director</p>
           <p>Mudgul King</p>
        </div>
        <div className='social-icons'>
        <a href="https://twitter.com/plutongmi_"  target="_blank" rel="noopener noreferrer"><FaTwitterSquare size={24} color="#ffff" /></a>
        <a href="https://www.instagram.com/plutongmi/"  target="_blank" rel="noopener noreferrer"><FaInstagramSquare size={24} color="#ffff" /></a>
        </div>
        </div>
        </div>

        <div className='card-box'>
        <div className={`card ${flipped ? 'flipped' : ''}`} onClick={handleClick} >
          <div className='front'>
            <img src={Bawsa} alt="Front of Card" />
          </div>
          <div className='back'>
          <img src={Bawsa2} alt="Back of Card" />
          </div>
        </div>
        <div className="text-and-icons-container">
        <div className='card-text'>
          <p>Bawsa</p>
         <p>Marketing Lead</p>
           <p>Advisor</p>
           <p>Thread King</p>
        </div>
        <div className='social-icons'>
        <a href="https://twitter.com/nftbawsa"  target="_blank" rel="noopener noreferrer"><FaTwitterSquare size={24} color="#ffff" /></a>
        <a href="https://www.instagram.com/oddorcs/"  target="_blank" rel="noopener noreferrer"><FaInstagramSquare size={24} color="#ffff" /></a>
        </div>
        </div>
        </div>
        
       </div>
        
        </div>
    </div>
  )
}

export default Team