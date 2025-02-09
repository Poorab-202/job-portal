import React from 'react'
import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'


export default function Home() {
  return (
    <div>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <CategoryCarousel></CategoryCarousel>
        <LatestJobs></LatestJobs>
    </div>
  )
}
