import "./VillaCard.css"
import Card from '../Card/Card'
const VillaCard = () => {
    const items = [
        {villaCardImage:'/images/property-01.jpg',type:'Luxury Villa',price:'$2.264.000', title: '18 New Street Miami, OR 97219', bed:'8',bathroom:'8',area:'545m2',floor:'3',parking:'6 spots'},
        {villaCardImage:'/images/property-02.jpg',type:'Luxury Villa',price:'$1.180.000', title: '54 Mid Street Florida, OR 27001', bed:'6',bathroom:'5',area:'450m2',floor:'3',parking:'8 spots' },
        {villaCardImage:'/images/property-03.jpg',type:'Luxury Villa',price:'$1.460.000', title: '26 Old Street Miami, OR 38540', bed:'5',bathroom:'4',area:'225m2',floor:'3',parking:'10 spots' },
        {villaCardImage:'/images/property-04.jpg',type:'Appartment',price:'$584.500', title: '12 New Street Miami, OR 12650', bed:'4',bathroom:'3',area:'125m2',floor:'25th',parking:'2 cars' },
        {villaCardImage:'/images/property-05.jpg',type:'penthouse',price:'$925.600', title: '34 Beach Street Miami, OR 42680', bed:'4',bathroom:'4',area:'180m2',floor:'38th',parking:'2 cars' },
        {villaCardImage:'/images/property-06.jpg',type:'Modern Condo',price:'$450.000', title: '22 New Street Portland, OR 16540', bed:'3',bathroom:'2',area:'165m2',floor:'26th',parking:'3 cars' },
    ];
    return (
        <div className="Card-sec">
            <p className="card-sec-p">PROPERTIES</p>
            <h2 className="card-sec-h2">We Provide Best Property You Like</h2>
            <div className="card-villa-container">
            {items.map((item, index) => (
            <Card key={index} item={item} />
            ))}
            </div>
        </div>
    );
  };
  
  export default VillaCard;

