import React from 'react'
import Navbar from '../../component/Navbar'
import Footer from '../../component/Footer'

import Hero from './hero'
import Service from './Service'
import Safe from './Safe'
import Airdrop from './Airdrop'
import OurTeam from './OurTeam'

function Page() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Service/>
      <Safe/>
      <Airdrop/>
      <OurTeam/>
      <Footer/>
    </div>
  )
}

export default Page
