import './Card.css';

export default function Card({ item }) {
  return (
    <div className="v-card">
        <img src={item.villaCardImage} alt="photo" className="card-v-img" />
        <span className="card-villa-s-1">
            <p className="v-type">{item.type}</p>
            <p className="v-price">{item.price}</p>
        </span>
        <span className="spanoo">
            <h3 className="v-h3">{item.title}</h3>
        </span>
        <div>
            <span className="card-villa-s-2">
                <p className="zzz">Bedrooms: <strong>{item.bed}</strong></p>
                <p className="zzz">Bathrooms: <strong>{item.bathroom}</strong></p>
            </span>
            <span className="card-villa-s-2">
                <p className="zzz">Area: <strong>{item.area}</strong></p>
                <p className="zzz">Floor: <strong>{item.floor}</strong></p>
            </span>
            <p className="zzz1">Parking: <strong>{item.parking}</strong></p>
        </div>
        <hr id="maher" />
        <button className="l-card-but">Schedule a visit</button>
    </div>
);
}
