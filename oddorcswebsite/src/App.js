import React, { useState } from 'react'

import { Footer, Hero, Spacer } from './containers';
import { Team, Navbar, Clans, Podcast, FAQ, Collab, Roadmap } from './components';

const App = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
    document.body.classList.toggle("overflow-hidden");
  };

  return (
    <div className='App' >
      <Navbar open={open} handleOpen={handleOpen} />
      <Hero />
      <Spacer size={70} />
      <Team />
      <Spacer size={80} />
      <Clans />
      <Spacer size={80} />
      <Podcast />
      <Spacer size={50} />
      <Roadmap />
      <Spacer size={50} />
      <FAQ />
      <Spacer size={50} />
      <Collab />
      <Spacer size={20} />
      <Footer />
    </div >
  )
}

export default App
