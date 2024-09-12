import './Hero.css'
import  { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight,faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function Hero() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 3;
    const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? totalSlides - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    };
    const goToNext = () => {
    const isLastSlide = currentIndex === totalSlides - 1 ; 
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    };
    return (
    <div className={`slider-image hero-slider-${currentIndex}`}>
        <div className='new-dev'>
            <p id='rock'>Toronto, <span className='orange-p'>Canada</span></p>
            <h2 className='hero-h2'>HURRU! GET THE BEST VILLA FOR YOU</h2>
        </div>
        
        <button className='but-prev' onClick={goToPrevious}> <FontAwesomeIcon icon={faChevronLeft} className="prev"/></button>
        <button className='but-next'onClick={goToNext}> <FontAwesomeIcon icon={faChevronRight} className="next"/></button>
        <div className="slider-indicators">
            {[...Array(totalSlides)].map((_, index) => (
            <span
                key={index}
                className={`indicator ${index === currentIndex ? 'active' : ''}`}
            ></span>
            ))}
        </div>
    </div>
    )
}
