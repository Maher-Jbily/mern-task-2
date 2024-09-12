import './ContactUs.css'
import NavBar from "../../components/NavBar/NavBar"
import ConstHero from  '../../components/ConstHero/ConstHero'
import ContactPageBody from '../../components/ContactPageBody/ContactPageBody'
import Footer from "../../components/Footer/Footer"
export default function ContactUs() {
    const myData ={title:'CONTACT US',content:'HOME / CONTACT US'}
  return (
    <>
      <NavBar/>
      <ConstHero dataHero={myData}/>
      <ContactPageBody/>
      <Footer/>
    </>
  )
}
