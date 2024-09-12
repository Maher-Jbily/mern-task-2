import'./SingleProperty.css'
import NavBar from "../../components/NavBar/NavBar"
import ConstHero from  '../../components/ConstHero/ConstHero'
import FirstSecSingleProp from '../../components/FirstSecSingleProp/FirstSecSingleProp'
import BestDeal from '../../components/BestDeal/BestDeal'
import Footer from "../../components/Footer/Footer"
export default function SingleProperty() {
  const myData ={title:'SINGLE PROPERTIES',content:'HOME /SINGLE PROPERTIES'}
  return (
    <div>
      <NavBar/>
      <ConstHero dataHero={myData}/>
      <FirstSecSingleProp/>
      <BestDeal/>
      <Footer/>
    </div>
  )
}
