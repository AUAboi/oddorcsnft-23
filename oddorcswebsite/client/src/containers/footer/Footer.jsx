import React from 'react';


import './footer.css';
import Twitter from '../../assets/Twitter.png';
import Opensea from '../../assets/Opensea.png';
import Discord from '../../assets/Discord.png';
import Youtube from '../../assets/youtube.png';
import IG from '../../assets/IG.png';
import OC from '../../assets/oddconnects.png';

const footer = () => {
  const date = new Date().getFullYear();

  const discordLink = "https://discord.gg/OddOrcs";
  const twitterLink = "https://twitter.com/oddorcs";
  const instagramLink = "https://instagram.com/oddorcs";
  const openseaLink = "https://opensea.io/collection/odd-orcs";
  const youtubeLink = "https://www.youtube.com/channel/UCBiEkh7gMCbP4Jt--sEkxRw";

  return (
    <div>
      <footer>
        <div className='footer-container' id='footer'>
        </div>
        <img className='connects-logo' src={OC} alt="connects-logo"></img>

        <div className="social-media-buttons-container">
          <a className="social-media-buttons" href={twitterLink} target="_blank" rel="noopener noreferrer">
            <img src={Twitter} alt="Twitter" />
          </a>
          <a className="social-media-buttons" href={openseaLink} target="_blank" rel="noopener noreferrer">
            <img src={Opensea} alt="Opensea" />
          </a>
          <a className="social-media-buttons" href={discordLink} target="_blank" rel="noopener noreferrer">
            <img src={Discord} alt="Discord" />
          </a>
          <a className="social-media-buttons" href={youtubeLink} target="_blank" rel="noopener noreferrer">
            <img src={Youtube} alt="Youtube" />
          </a>
          <a className="social-media-buttons" href={instagramLink} target="_blank" rel="noopener noreferrer">
            <img src={IG} alt="Insta" />
          </a>
        </div>
        <div className='footer-bottom' >
          <a href="https://twitter.com/EllisGC_" target="_blank" rel="noopener noreferrer">
            Built by EllisGC
          </a>
          <p className="footer-text"> ©Copyright <span>{date}</span> - Odd Connects LTD - All Rights Reserved </p>

        </div>
      </footer>
    </div>
  )
}

export default footer