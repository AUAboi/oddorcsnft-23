import React from 'react'
import './hero.css';
import Logo from '../../assets/NewLogo.png';
import Discord from '../../assets/Discord_Icon.png';
import Twitter from '../../assets/Twitter_icon.png';
import OS from '../../assets/Opensea_Icon.png';



const Hero = () => {

const discordLink = "https://discord.gg/OddOrcs";
const twitterLink = "https://twitter.com/oddorcs";
const openseaLink = "https://opensea.io/collection/odd-orcs";
const gitbookLink = "https://oddorcsio.gitbook.io/odd-orcs/welcome/what-are-odd-orcs";


  return (
    <div>
      <div className='hero' id='Home'>
        <div className='hero_content'>
        <a href={gitbookLink} target="_blank" rel="noopener noreferrer">
        <img className='cave' src={Logo} alt='logo'/>
        </a>
        </div>
        <h2 className='hero-title'>Unleash Your Orc</h2>
        <div className='social-media-icons'>
          <a href={twitterLink} target="_blank" rel="noopener noreferrer">
          <img className='social-media-icon' src={Twitter} alt='twitter'/>
          </a>
          <a href={discordLink} target="_blank" rel="noopener noreferrer">
          <img className='social-media-icon' src={Discord} alt='twitter'/>
          </a>
          <a href={openseaLink} target="_blank" rel="noopener noreferrer">
          <img className='social-media-icon' src={OS} alt='twitter'/>
          </a>
        </div>
        <div className='hero-buttons'>
          <a href='https://oddorcsmint.io/' target="_blank" rel="noopener noreferrer">
          <button className='rectangle-button'>Mint Now</button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero