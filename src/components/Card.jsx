import React from 'react';

function Card({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} className="card-image" />
      {/* <div> */}
      <p className="card-description">{description}</p>
      <div className='card-div'><h3 className="card-title">{title}</h3>
</div>
      {/* </div> */}
      
    </div>
  );
}

export default Card;
