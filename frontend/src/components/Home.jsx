import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from "../hooks/useGetAllJobs.js"



export default function Home() {
  useGetAllJobs();
  return (
    <div>
        <Navbar></Navbar>
        <HeroSection></HeroSection>
        <CategoryCarousel></CategoryCarousel>
        <LatestJobs></LatestJobs>
        <Footer></Footer>
    </div>
  )
}
