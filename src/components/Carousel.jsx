import React, { useState, useEffect } from 'react';

export default function Carousel(){
    const [currentIndex, setCurrentIndex] = useState(0);

    const slides = [
        {
            image: "/latestProjects/prj1.png",
            title: "Ramp Walk Events",
            text: "This event is an initiative and the first of its kind! A ramp walk organized exclusively for a live audience at a restaurant. This combines the excitement of fashion with the charm of dining, creating an unforgettable experience for the audience. "
        },
        {
            image: "/latestProjects/prj2.png",
            title: "Magazine Shoots",
            text: "We recently had the privilege of executing a full-scale magazine shoot for a well-known boutique in Pune, designed to highlight their exquisite collection during their highly anticipated sale season."
        },
        {
            image: "/latestProjects/prj3.png",
            title: "Urban Nightscape",
            text: "Vibrant city skyline at night with gleaming lights reflecting off modern architecture"
        }
    ];

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? slides.length - 1 : prevIndex - 1
        );
    };


    return (
        <div className="carousel-container">
            <div className="carousel">
                {/* <button className="carousel-button prev" onClick={prevSlide}>
                    &lt;
                </button> */}
                
                <div className="slide">
                    <div className="image-container">
                    <button className="carousel-button prev" onClick={prevSlide}>
                    &lt;
                </button>
                        <img 
                            src={slides[currentIndex].image} 
                            alt={slides[currentIndex].title} 
                        />
                        <button className="carousel-button next" onClick={nextSlide}>
                    &gt;
                </button>
                    </div>
                    <div className="content">
                        <h2 className="slide-title">{slides[currentIndex].title}</h2>
                        <p className="slide-text">{slides[currentIndex].text}</p>
                    </div>
                </div>

                {/* <button className="carousel-button next" onClick={nextSlide}>
                    &gt;
                </button> */}
            </div>
            
            <div className="carousel-dots">
                {slides.map((_, index) => (
                    <span 
                        key={index}
                        className={`dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => setCurrentIndex(index)}
                    />
                ))}
            </div>
        </div>
    );
}