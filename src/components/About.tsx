import React from 'react';

const About = () => {
  return (
    <div className="flex items-center justify-center text-gray-300">
      <img src="../Nolan.png" alt="Nolan" className="w-80 h-80 hover-image" />
      <div className="flex flex-col ml-8">
        <p className="text-lg leading-relaxed my-6">
          Hello! I'm Nolan MacLear, and I specialize in Java with a focus on server development, embedded systems, and web applications. My tech journey began in 2013 with video game modifications and has since expanded to include web development and database design. I've honed my skills through a mix of personal projects and freelance work, consistently demonstrating my commitment to problem-solving and dedication to my craft.
        </p>
        <p className="text-lg leading-relaxed my-6">
          Currently studying Computer Science at the University of Florida, I balance my academic pursuits with skiing, attending music festivals, and socializing. I also contribute to campus life as the social chair of my fraternity, and was the former Director of Technology for the Florida Cryptocurrency and Alternative Asset Club (FCAAC).
        </p>
        <p className="text-lg leading-relaxed my-6">
          I pride myself on my strong interpersonal skills, valuing open communication and collaboration. I'm always eager to engage in discussions and pose questions, as I believe these practices are essential for effective problem-solving and driving projects to success.
        </p>
      </div>
    </div>
  );
};

export default About;
