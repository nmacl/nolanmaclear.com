import React from 'react';

const Projects = () => {
  return (
    <div>
      <div className="mt-20 text-3xl text-center block">
        <div className="mb-4">
          <a className="underline" href="http://github.com/nmacl">github.com/nmacl</a>
          <p className="text-xl text-gray-400 mt-2">This is where I store my public code repositories.</p>
        </div>
        <div className="mb-4">
          <a className="underline font-bold text-blue-400" href="https://criblytics.web.app">criblytics.web.app</a>
          <p className="text-xl text-gray-400 mt-2">A website to do a wide area search for good value rental properties.</p>
        </div>
        <div className="mb-4">
          <a className="underline" href="https://mooreleonhardt.com">mooreleonhardt.com</a>
          <p className="text-xl text-gray-400 mt-2">A freelance website I worked on for a client</p>
        </div>
        <div className="mb-4">
          <a className="underline" href="https://www.youtube.com/watch?v=VijfHtyC0Rw">Pathfinders</a>
          <p className="text-xl text-gray-400 mt-2">A group project I worked on for school</p>
        </div>
      </div>
    </div>
  );
};

export default Projects;
