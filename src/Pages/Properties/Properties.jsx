import './Properties.css'
import NavBar from "../../components/NavBar/NavBar"
import ConstHero from  '../../components/ConstHero/ConstHero'
import CardFilter from '../../components/CardFilter/CardFilter'
import Footer from "../../components/Footer/Footer"
export default function Properties() {
    const myData ={title:'PROPERTIES',content:'HOME / PROPERTIES'}

  return (
    <div>
        <NavBar/>
        <ConstHero dataHero={myData}/>
        <CardFilter/>
        <Footer/>
    </div>
  )
}
