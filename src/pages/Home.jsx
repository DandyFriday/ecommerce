//import React from 'react'

import BestSeller from "../components/BestSeller";
//import Footer from "../components/Footer";
import Hero from "../components/Hero"
import LatestColletion from "../components/LatestCollection"
import NewsletterBox from "../components/NewsletterBox";
import OurPolicy from "../components/OurPolicy";

const Home = () => {
  return (
    <div>
      <Hero/>
      <LatestColletion />
      <BestSeller/>
      <OurPolicy />
      <NewsletterBox />
      {/* <Footer /> */}
      
    </div>
  )
}

export default Home;