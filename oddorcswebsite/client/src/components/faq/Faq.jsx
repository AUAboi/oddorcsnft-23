import React from 'react'
import { useState } from 'react'
import './faq.css'


const Faq = () => {

const [openIndex, setOpenIndex] = useState(-1);

function handleClick(index) {
    setOpenIndex(index === openIndex ? -1 : index);
 }

  return (
    <div>
        <div className='faq-title' id='FAQ'>
            <h2>FAQ's</h2>
        <div className='faq-content'>
            <div className="question-answer">
        <h2 onClick={() => handleClick(0)} className={openIndex === 0 ? 'open' : ''}>What is an NFT?</h2>
        <p style={{ display: openIndex === 0 ? 'block' : 'none' }}>Non-fungible tokens (NFTs) are digital assets that represent ownership of a unique item or asset. They are stored on a blockchain, which allows for secure and verifiable ownership and transfer of the asset</p>
      </div>
      <div className="question-answer">
        <h2 onClick={() => handleClick(1)} className={openIndex === 1 ? 'open' : ''}>How do I buy an NFT?</h2>
        <p style={{ display: openIndex === 1 ? 'block' : 'none' }}>NFTs can be purchased and stored in a digital wallet that is based on the same crypto currency as the NFT. Odd Orcs is an Ethereum (ETH) based NFT so you will need an Ethereum based digital wallet such as Metamask or Coinbase. You can also now add funds directly to your wallet from Opensea, which we recommend for all secondary purchases of an Odd Orcs NFT.</p>
      </div>
            <div className="question-answer">
        <h2 onClick={() => handleClick(2)} className={openIndex === 2 ? 'open' : ''}>What is the Total Supply & Mint Price?</h2>
        <p style={{ display: openIndex === 2 ? 'block' : 'none' }}>5,555 Orcs will be driving their mission beyond the blockchain, mint price is 0.015 ETH + Gas with a max mint of 10 per wallet.</p>
      </div>
      <div className="question-answer">
        <h2 onClick={() => handleClick(3)} className={openIndex === 3 ? 'open' : ''}>Which Blockchain are the Odd Orcs deployed on?</h2>
        <p style={{ display: openIndex === 3 ? 'block' : 'none' }}>Odd Orcs are deployed on the Ethereum Blockchain using a ERC-721A Smart Contract.</p>
      </div>
      <div className="question-answer">
        <h2 onClick={() => handleClick(4)} className={openIndex === 4 ? 'open' : ''}>What is the Utility of holding an Odd Orcs NFT?</h2>
        <p style={{ display: openIndex === 4 ? 'block' : 'none' }}>The main utility of holding Odd Orc NFTs is our profit sharing from our web-store, The Odd Shop. 10% of our entire web-store will be allocated to a community voting controlled wallet. Holders of 4+ Odd Orc NFTs are able to vote on this community wallet and what said funds go towards. This wallet can be tracked at the Ethereum address “oddshop.eth”.</p>
      </div>
      <div className="question-answer">
        <h2 onClick={() => handleClick(5)} className={openIndex === 5 ? 'open' : ''}> What can I do now that I hold an Odd Orcs NFT?</h2>
        <p style={{ display: openIndex === 5 ? 'block' : 'none' }}>Holding an Odd Orcs NFT grants you access to our vast ecosystem of art, community and utility. From getting free airdrops to voting on project decisions, the opportunities your NFT brings are endless.</p>
      </div>
      <div className="question-answer">
        <h2 onClick={() => handleClick(8)} className={openIndex === 8 ? 'open' : ''}>You degenerates have a podcast?</h2>
        <p style={{ display: openIndex === 8 ? 'block' : 'none' }}>If you’re still new to NFTs or the Web3 space, we have a video podcast on youtube for you to better understand where the world is heading. NFTs, streetwear, conspiracy theories and more, The Odd Cave is a digestible conversation that anyone can learn from and enjoy.</p>
      </div>
      <div className="question-answer">
        <h2 onClick={() => handleClick(9)} className={openIndex === 9 ? 'open' : ''}>What is Odd Connects?</h2>
        <p style={{ display: openIndex === 9 ? 'block' : 'none' }}>Odd Connects is the parent company of Odd Orcs. The only goal of Odd Connects is to connect with different individuals and communities around the world, build a platform & foundation for success and launch our ideas further than the eye can see. “Connect, Build, Launch.” has been our mantra and remains the core mission for all ventures under the Odd Connects umbrella.</p>
      </div>
      <div className="question-answer">
        <h2 onClick={() => handleClick(11)} className={openIndex === 11 ? 'open' : ''}>How can I collaborate with The Odd Orcs?</h2>
        <p style={{ display: openIndex === 11 ? 'block' : 'none' }}>We have a collaboration submission form! Please fill out all questions and submit, we will respond ASAP. If you have more urgent questions or need to speak to us directly, please feel free to contact us at any of the aforementioned social media platforms.</p>
      </div>
      </div>
        </div>
    </div>
  )
}

export default Faq