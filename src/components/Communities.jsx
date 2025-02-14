import React from 'react';
import Card from './Card';

import image1 from '../assets/image-1.jpg';
import image2 from '../assets/image-2.jpg';
import image3 from '../assets/image-3.jpg';
import image4 from '../assets/image-4.jpg';
import image5 from '../assets/image-5.jpg';
import image6 from '../assets/image-6.jpg';

function Communities() {
  const communitiesData = [
    {
      image: image1,
      title: 'Arabian Ranches',
      description:
        'Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and'
    },
    {
      image: image2,
      title: 'Arabian Ranches II',
      description:
      'Arabian Ranches offers a modern interpretation of the soothing charm of the surrounding desertscape. The development features a number of residential communities that draw inspiration from Spanish and'
    },
    {
      image: image3,
      title: 'Downtown Dubai',
      description:
        "The Centre of Now. The most prestigious square kilometre in the world, Downtown Dubai is no stranger to such accolades, and yet it's hard to overstate the prominence of this community."
    },
    {
      image: image4,
      title: 'Dubai Hills Estate',
      description:
        'Sustainably designed, Dubai Hills Estate is a first of its kind destination. This masterfully-planned 2,700-acre multi-purpose development will form an integral part of the Mohammed Bin Rashid City.'
    },
    {
      image: image5,
      title: 'Dubai Marina',
      description:
        "Dubai Marina is one of the world's largest, most meticulously planned waterfront developments and offers the exhilaration and vibrancy of a chic, urban lifestyle together with all the advantages of living on the water."
    },
    {
      image: image6,
      title: 'Emirates Living',
      description:
        'Launched in 2003, Emirates Living is a modern lifestyle community focused on outdoor leisure. Emirates Living offers a serene nature-filled sanctuary, with 8,659 premium villas nestled within 52.2 million'
    }
  ];

  return (
    <div className="communities-container">
      {/* Section Title */}
      <h2 className="communities-title">COMMUNITIES WE MANAGE</h2>
      
      {/* Cards */}
      <div className="cards-wrapper">
        {communitiesData.map((community, index) => (
          <Card
            key={index}
            image={community.image}
            title={community.title}
            description={community.description}
          />
        ))}
      </div>
    </div>
  );
}

export default Communities;
