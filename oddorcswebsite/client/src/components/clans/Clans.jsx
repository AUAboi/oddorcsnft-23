import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './clans.css'
import Rat from '../../assets/Ratnob_Card.png';
import Snit from '../../assets/Snitgut_card.png';
import Mud from '../../assets/Mudgul_Card.png';


const Clans = () => {

  return (
    <div>
        <div className='clan' id='clans'>
            <div className='clans-content'>
                <h2>Clans</h2>
            </div>
            <div className='clan-card-container' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Carousel showThumbs={false} centerMode={true} centerSlidePercentage={100} showStatus={false} showIndicators={false}>
        <div>
          <img src={Snit} alt="Image 1" style={{ width: '500px', height: '500px' }} />
        </div>
        <div>
          <img src={Rat} alt="Image 2" style={{ width: '500px', height: '500px' }} />
        </div>
        <div>
          <img src={Mud} alt="Image 3" style={{ width: '500px', height: '500px' }} />
        </div>
      </Carousel>
    </div>
        </div>
    </div>
  )
}

export default Clans