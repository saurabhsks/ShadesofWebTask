import React from 'react';
import Communities from './components/Communities';
import Carousel from './components/Carousel';
import './App.css';


// Import local images
import image1 from './assets/image-1.jpg';
import image2 from './assets/image-2.jpg';
import image3 from './assets/image-3.jpg';
import image4 from './assets/image-4.jpg';
import image5 from './assets/image-5.jpg';
import image6 from './assets/image-6.jpg';

function App() {

  const images = [
    { src: image4, title: 'DUBAI HILLS STATE' },
    { src: image5, title: 'DUBAI MARINA' },
    { src: image6, title: 'EMIRATES LIVING' },
    { src: image1, title: 'ARABIAN RANCHES II' },
    { src: image2, title: 'ARABIAN RANCHES ' },
    { src: image3, title: 'DOWNTOWN DUBAI' } 
  ];

  return (
    <>
      <div className="App">
      <Communities />
      <Carousel images={images} />
    </div>
    </>
  )
}

export default App
