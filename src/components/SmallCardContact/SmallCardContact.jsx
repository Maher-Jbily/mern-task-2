import "./SmallCardContact.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope ,faPhone } from '@fortawesome/free-solid-svg-icons';
export default function SmallCardContact() {
  return (
    <div className="SmallCardContainer">
        <div  className="sm-ca-co">
            <FontAwesomeIcon icon={faPhone} className="sm-c-c-1" />
            <span>
                <h3>010-020-0340</h3>
                <p className="sm-cs-co-p">Phone Number</p>
            </span>
        </div>
        <div className="sm-ca-co">
            <FontAwesomeIcon icon={faEnvelope} className="sm-c-c-1" />
            <span>
                <h3>info@villa.co</h3>
                <p className="sm-cs-co-p">Business Email</p>
            </span>
        </div>
    </div>
  )
}
