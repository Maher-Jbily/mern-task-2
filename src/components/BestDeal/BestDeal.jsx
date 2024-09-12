import "./BestDeal.css";
import { useState } from "react";

export default function BestDeal() {
  const [selectedDeal, setSelectedDeal] = useState("Appartment");

  const dealData = {
    Appartment: {
      img: "./images/property-05.jpg",
      description: "When you need free CSS templates, you can simple type TemlpateMo in any search engine website.in addition, you can type templateMo Protofolio, TemplateMoOne Page Layouts,etc.",
      space: "185 m2",
      floor: "26th",
      rooms: "4",
      parking: "Yes",
      payment: "Bank",
    },
    VillaHouse: {
      img: "./images/property-06.jpg",
      description: "Swag fanny pack iyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kisch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen",
      space: "250 m2",
      floor: "26th",
      rooms: "5",
      parking: "Yes",
      payment: "Bank",
    },
    Penthose: {
      img: "./images/property-03.jpg",
      description: "Swag fanny pack iyft blog twee. JOMO ethical copper mug, succulents typewriter shaman DIY kisch twee taiyaki fixie hella venmo after messenger poutine next level humblebrag swag franzen",
      space: "320 m2",
      floor: "34th",
      rooms: "6",
      parking: "Yes",
      payment: "Bank",
    },
  };

  const currentDeal = dealData[selectedDeal];

  const getButtonStyle = (deal) => {
    return deal === selectedDeal ? { backgroundColor: "#f35525"} : {};
  };

  return (
    <div className="best-cont">
      <div className="b-d-1">
        <div className="b-d1-d-left">
          <p>Best Deal</p>
          <h2>Find Your Best Deal Right Now!</h2>
        </div>
        <div className="b-d1-d">
          <button
            className="pb1"
            style={getButtonStyle("Appartment")}
            onClick={() => setSelectedDeal("Appartment")}
          >
            Appartment
          </button>
          <button
            className="pb2"
            style={getButtonStyle("VillaHouse")}
            onClick={() => setSelectedDeal("VillaHouse")}
          >
            Villa House
          </button>
          <button
            className="pb3"
            style={getButtonStyle("Penthose")}
            onClick={() => setSelectedDeal("Penthose")}
          >
            Penthose
          </button>
        </div>
      </div>
      <div className="b-d-2">
        <div className="left-b-d">
          <span className="iii">
            <p className="pbest">Total Flat Space</p>
            <p className="pbest2">{currentDeal.space}</p>
          </span>
          <span className="iii">
            <p className="pbest">Floor number</p>
            <p className="pbest2">{currentDeal.floor}</p>
          </span>
          <span className="iii">
            <p className="pbest">Number of rooms</p>
            <p className="pbest2">{currentDeal.rooms}</p>
          </span>
          <span className="iii">
            <p className="pbest">Parking Available</p>
            <p className="pbest2">{currentDeal.parking}</p>
          </span>
          <span className="iii ioio">
            <p className="pbest">Payment process</p>
            <p className="pbest2">{currentDeal.payment}</p>
          </span>
        </div>
        <img className="only-img" src={currentDeal.img} alt="" />
        <div className="best-right-div">
          <h3 className="right-best-h3">Extra Info About Property</h3>
          <p className="right-best-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, hic incidunt. Libero minus quaerat placeat iste, excepturi, aliquid veritatis pariatur sint, voluptatem hic repellendus voluptas modi harum nam. Dolore, expedita.</p>
          <p className="right-best-p lplp">{currentDeal.description}</p>
        </div>
      </div>
    </div>
  );
}
