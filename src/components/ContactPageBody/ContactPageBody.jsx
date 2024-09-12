import'./ContactPageBody.css'
import Map from "../Map/Map"
import ContactForm from "../ContactForm/ContactForm"
import SmallCardContact from "../SmallCardContact/SmallCardContact"
export default function ContactPageBody() {
  return (
    <div className='SmallCardContact-h2-container'>
        <div className='SmallCardContact-div1'>
            <div  className='SmallCardContact-div1-div1'>
                <p className='SmallCardContact-p1'>CONTACT US</p>
                <h2 className='SmallCardContact-h2'>Get In Touch With Our Agents </h2>
                <p className='SmallCardContact-p2'>When you really need to download free CSS templates, please remember our website TemplateMo. Also, tell your friends about our website. Thank you for visiting. There is a variety of Bootstrap HTML CSS templates on our website you need more information, please contact us</p>
                <SmallCardContact/>
            </div>
            <ContactForm/>
        </div>
        <Map/>
    </div>
  )
}
