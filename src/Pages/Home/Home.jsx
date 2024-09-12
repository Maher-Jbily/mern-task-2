import './Home.css'
import Contact from "../../components/Contact/Contact"
import NavBar from "../../components/NavBar/NavBar"
import Hero from "../../components/Hero/Hero"
import Featured from "../../components/Featured/Featured"
import VideoView from "../../components/VideoView/VideoView"
import BeastDeal from "../../components/BestDeal/BestDeal"
import VillaCard from "../../components/VillaCard/VillaCard"
import Footer from "../../components/Footer/Footer"
export default function Home() {
  return (
    <div>
      <NavBar/>
      <Hero/>
      <Featured/>
      <VideoView/>
      <BeastDeal/>
      <VillaCard/>
      <Contact/>
      <Footer/>
    </div>
  )
}
