import React from 'react';
import car1 from '../../assets/images/car1.png';
import car2 from '../../assets/images/car2.png';
import car3 from '../../assets/images/car3.png';
import car4 from '../../assets/images/car4.png';
import car5 from '../../assets/images/car5.png';
import car6 from '../../assets/images/car6.png';
import car7 from '../../assets/images/car7.png';
import car8 from '../../assets/images/car8.png';
import car10 from '../../assets/images/car10.png';


const carFeatures = [
  {
    id:1,
    image: car1,
    title: "Exotic Turbo S",
    features: [
      "Top Speed: 320 km/h",
      "Horsepower: 750 HP",
      "Advanced aerodynamic design",
      "Plush leather interiors"
    ]
  },
  {
    id:2,
    image: car2,
    title: "Mystique Roadster",
    features: [
      "Top Speed: 340 km/h",
      "Horsepower: 800 HP",
      "Customizable LED ambient lighting",
      "Carbon fiber body"
    ]
  },
  {
    id:3,
    image: car3,
    title: "Panthera GT",
    features: [
      "Top Speed: 330 km/h",
      "Horsepower: 780 HP",
      "Digital dashboard display",
      "Enhanced safety features"
    ]
  },
  {
    id:4,
    image: car4,
    title: "Pajeet GT",
    features: [
      "Top Speed: 330 km/h",
      "Horsepower: 780 HP",
      "Karbon fiber dashboard display",
      "Powerful safety features"
    ]
  },
 
  {
    id: 5,
    image: car10,
    title: "Hyper Sonic X",
    features: [
      "Top Speed: 350 km/h",
      "Horsepower: 810 HP",
      "Adaptive suspension system",
      "Racing stripes"
    ]
},
{
    id: 6,
    image: car5,
    title: "Nightshade RZ",
    features: [
      "Top Speed: 335 km/h",
      "Horsepower: 770 HP",
      "Night vision assist",
      "Heated leather seats"
    ]
},
{
    id: 7,
    image: car6,
    title: "Azure Skyline GT",
    features: [
      "Top Speed: 328 km/h",
      "Horsepower: 760 HP",
      "Panoramic sunroof",
      "Wireless charging pad"
    ]
},
{
    id: 8,
    image: car7,
    title: "Galactic Roadrunner",
    features: [
      "Top Speed: 342 km/h",
      "Horsepower: 800 HP",
      "Integrated AI assistant",
      "Collapsible rear seats"
    ]
},
{
    id: 9,
    image: car8,
    title: "Stealth Shadow RS",
    features: [
      "Top Speed: 336 km/h",
      "Horsepower: 785 HP",
      "Stealth mode",
      "HUD with augmented reality"
    ]
}

];

export const Features = () => {
    return (
      <>
        <h2 className="text-center text-2xl font-bold mb-5 dark:text-white">Our Features</h2>
        <div className="flex flex-wrap justify-center px-5 gap-5">
          {carFeatures.map(car => (
            <div 
              key={car.id} 
              className="w-full sm:w-1/2 lg:w-1/4 p-2 shadow-md rounded-md overflow-hidden" 
              // For mobile: w-full, For small devices like tablets: w-1/2, For large devices like desktops: w-1/4
            >
              <img 
                src={car.image} 
                alt={car.title} 
                className="w-full h-48 object-cover"
              />
              <h2 className="text-center font-bold text-xl mt-2 dark:text-white">{car.title}</h2>
              <ul className="px-3 mt-2 space-y-1">
                {car.features.map(feature => (
                  <li key={feature} className="text-gray-800 text-sm dark:text-gray-400">{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </>
    );
  }
  