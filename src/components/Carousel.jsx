import React, { useState, useEffect } from 'react';
import arrowLeft from '../assets/arrow-1.png';
import arrowRight from '../assets/arrow-2.png';


function Carousel({ images }) {
  const [currentPage, setCurrentPage] = useState(0);
  const [imagesPerPage, setImagesPerPage] = useState(3); 

useEffect(() => {
  const handleResize = () => {
    setImagesPerPage(window.innerWidth <= 768 ? 6 : 3);
  };

  handleResize();

  window.addEventListener("resize", handleResize);
  return () => window.removeEventListener("resize", handleResize);
}, []);

  
  const totalPages = Math.ceil(images.length / imagesPerPage);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages - 1));
  };

  const startIndex = currentPage * imagesPerPage;
  const endIndex = startIndex + imagesPerPage;
  const currentImages = images.slice(startIndex, endIndex);

  return (
    <div className="carousel-container">
      <h2 className="carousel-title">OUR SERVICES</h2>

      <div className="carousel-content">
        <button
          className="carousel-arrow left-arrow"
          onClick={handlePrev}
          disabled={currentPage === 0} 
        >
          <img src={arrowLeft} alt="Left Arrow" className="arrow-img" /> 
        </button>

        <div className="carousel-images">
          {currentImages.map((item, index) => (
            <div className="carousel-item" key={index}>
              <img src={item.src} alt={item.title} />
              <div className="carousel-caption">{item.title}</div>
            </div>
          ))}
        </div>

        <button
          className="carousel-arrow right-arrow"
          onClick={handleNext}
          disabled={currentPage === totalPages - 1} 
        >
          <img src={arrowRight} alt="Right Arrow" className="arrow-img" />
        </button>
      </div>
    </div>
  );
}

export default Carousel;
