import React from 'react';
import Image from '../../IMG_0299.jpg'; // Ensure the path is correct or use import if using Webpack or similar bundlers

const About = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center text-gray-300 p-4 sm:p-8">
      <img 
        src={Image} 
        alt="Nolan" 
        className="w-48 h-48 sm:w-80 sm:h-80 rounded-full object-cover hover-image transition-transform duration-300 ease-in-out transform hover:scale-105"
      />
      <div className="flex flex-col mt-4 sm:mt-0 sm:ml-8 max-w-2xl">
        <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
          Hello! I'm Nolan MacLear, and I specialize in Java with a focus on server development, embedded systems, and web applications. My tech journey began in 2013 with video game modifications and has since expanded to include web development and database design. I've honed my skills through a mix of personal projects and freelance work, consistently demonstrating my commitment to problem-solving and dedication to my craft.
        </p>
        <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
          Currently studying Computer Science at the University of Florida, I balance my academic pursuits with skiing, attending music festivals, and socializing. I also contribute to campus life as the social chair of my fraternity, and was the former Director of Technology for the Florida Cryptocurrency and Alternative Asset Club (FCAAC).
        </p>
        <p className="text-base sm:text-lg leading-relaxed my-4 sm:my-6">
          I pride myself on my strong interpersonal skills, valuing open communication and collaboration. I'm always eager to engage in discussions and pose questions, as I believe these practices are essential for effective problem-solving and driving projects to success.
        </p>
      </div>
    </div>
  );
};

export default About;
