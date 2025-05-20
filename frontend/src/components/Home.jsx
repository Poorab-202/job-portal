import Navbar from './shared/Navbar'
import HeroSection from './HeroSection'
import CategoryCarousel from './CategoryCarousel'
import LatestJobs from './LatestJobs'
import Footer from './shared/Footer'
import useGetAllJobs from "../hooks/useGetAllJobs.js"
import { useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



export default function Home() {
  const { user } = useSelector(store => store.auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (user?.role === "recruiter") {
      navigate("/admin/companies");
    }
  }, [])


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
