import  "./Contact.css"
import Map from "../Map/Map"
import ContactForm from "../ContactForm/ContactForm"
import SmallCardContact from "../SmallCardContact/SmallCardContact"
export default function Contact() {
    return (
    <div className="div-contact">
        <div className="cont-img">
            <p className="cont-p">Contact Us</p>
            <h2 className="contact-h2">Get In Touch With Our Agnts</h2>
        </div>
        <div className="contact-data">
            <div className="div-map-cont">
                <Map/>
                <SmallCardContact/>
            </div>
            <ContactForm/>
        </div>

    </div>
  )
}
