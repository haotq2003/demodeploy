import React from 'react'
import Hero from '../components/Hero'
import LastestCollection from '../components/LastestCollection'
import BestSeller from '../components/BestSeller'
import OutPolicy from '../components/OutPolicy'
import NewsletterBox from '../components/NewsletterBox'

const Home = () => {
  return (
    <div>
      <Hero/>
      <LastestCollection  />
      <BestSeller />
      <OutPolicy/>
      <NewsletterBox/>
    </div>
  )
}

export default Home
