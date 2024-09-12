import React, { useState } from 'react';
import './CardFilter.css';
import Card from '../Card/Card';

export default function CardFilter() {
    const [filter, setFilter] = useState('All');

    const items = [
        {villaCardImage:'/images/property-01.jpg',type:'Luxury Villa',price:'$2.264.000', title: '18 New Street Miami, OR 97219', bed:'8',bathroom:'8',area:'545m2',floor:'3',parking:'6 spots'},
        {villaCardImage:'/images/property-02.jpg',type:'Luxury Villa',price:'$1.180.000', title: '54 Mid Street Florida, OR 27001', bed:'6',bathroom:'5',area:'450m2',floor:'3',parking:'8 spots' },
        {villaCardImage:'/images/property-03.jpg',type:'Luxury Villa',price:'$1.460.000', title: '26 Old Street Miami, OR 38540', bed:'5',bathroom:'4',area:'225m2',floor:'3',parking:'10 spots' },
        {villaCardImage:'/images/property-04.jpg',type:'Appartment',price:'$584.500', title: '12 New Street Miami, OR 12650', bed:'4',bathroom:'3',area:'125m2',floor:'25th',parking:'2 cars' },
        {villaCardImage:'/images/property-05.jpg',type:'Penthouse',price:'$925.600', title: '34 Beach Street Miami, OR 42680', bed:'4',bathroom:'4',area:'180m2',floor:'38th',parking:'2 cars' },
        {villaCardImage:'/images/property-06.jpg',type:'Modern Condo',price:'$450.000', title: '22 New Street Portland, OR 16540', bed:'3',bathroom:'2',area:'165m2',floor:'26th',parking:'3 cars' },
        {villaCardImage:'/images/property-03.jpg',type:'Appartment',price:'$980.000', title: '14 Mid Street Miami, OR 36450', bed:'8',bathroom:'8',area:'550m2',floor:'3',parking:'12 spots' },        
        {villaCardImage:'/images/property-02.jpg',type:'Appartment',price:'$1.520.000', title: '26 Old Street Miami, OR 12870', bed:'12',bathroom:'15',area:'380m2',floor:'3',parking:'14 spots' },
        {villaCardImage:'/images/property-01.jpg',type:'Appartment',price:'$3.145.000', title: '34 New Street Miami, OR 24650', bed:'10',bathroom:'12',area:'860m2',floor:'3',parking:'10 spots'},
    ];

    const filteredItems = filter === 'All' ? items : items.filter(item => item.type === filter);

    return (
        <div className='CardFilter-container'>
            <div className="filter-button">
                <button onClick={() => setFilter('All')} id='bt-filter'>Show All</button>
                <button onClick={() => setFilter('Appartment')} id='bt-filter'>Appartment</button>
                <button onClick={() => setFilter('Luxury Villa')} id='bt-filter'>Luxury Villa</button>
                <button onClick={() => setFilter('Penthouse')} id='bt-filter'>Penthouse</button>
            </div>
            <div className="card-villa-container">
                {filteredItems.map((item, index) => (
                    <Card key={index} item={item} />
                ))}
            </div>
            <div className="number-page">
                <button id='num-page1'>1</button>
                <button id='num-page1'>2</button>
                <button id='num-page1'>3</button>
                <button id='num-page2'>&gt;&gt;</button>
            </div>
        </div>
    )
}