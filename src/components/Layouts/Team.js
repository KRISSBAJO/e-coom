import React from 'react';
import chrisImage from '../../assets/images/image6.png';
import Image1 from '../../assets/images/image1.png';
import Image2 from '../../assets/images/image2.png';
import Image3 from '../../assets/images/image3.png';
import Image4 from '../../assets/images/image4.png';


const teamMembers = [
  { name: "John Doe", position: "CEO", achievement: "Increased company revenue by 50%", education: "MBA, Harvard University", image: chrisImage },
  { name: "Jane Smith", position: "CTO", achievement: "Developed innovative product solutions", education: "Ph.D. in Computer Science, MIT", image: Image1 },
  { name: "Emily Johnson", position: "CFO", achievement: "Secured funding rounds exceeding $10M", education: "B.Com, Yale University", image: chrisImage },
  { name: "Robert Brown", position: "COO", achievement: "Streamlined operations across departments", education: "MBA, Stanford University", image: Image2 },
  { name: "William White", position: "CMO", achievement: "Led global marketing campaigns", education: "M.Sc in Marketing, Oxford University", image: Image3 },
  { name: "Elizabeth Green", position: "CIO", achievement: "Implemented AI-driven insights", education: "B.Tech in IT, Princeton University", image: Image4 }
];

export const Team = () => {
  return (
    <>
      <h2 className="text-center text-2xl font-bold mb-5 dark:text-white">Our Team</h2>
      <div className="flex flex-wrap justify-center px-5 gap-5">
        {teamMembers.map(member => (
          <div 
            key={member.name} 
            className="w-full sm:w-1/2 lg:w-1/4 p-2 shadow-md rounded-md overflow-hidden" 
            // For mobile: w-full, For small devices like tablets: w-1/2, For large devices like desktops: w-1/4
          >
            <img 
              src={member.image} 
              alt={member.name} 
              className="w-full h-48 object-contain mb-2"
            />
            <h2 className="text-center font-bold text-xl mt-2 dark:text-white">{member.name}</h2>
            <p className="text-center text-gray-600 mt-1 dark:text-gray-400">{member.position}</p>
            <p className="px-3 text-gray-800 text-sm mt-1 dark:text-gray-400">{member.achievement}</p>
            <p className="px-3 text-gray-800 text-sm mt-1 dark:text-gray-400">{member.education}</p>
          </div>
        ))}
      </div>
    </>
  );
}
