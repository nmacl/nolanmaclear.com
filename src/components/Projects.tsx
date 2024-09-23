const Projects = () => {
  return (
    <div className="mt-10 sm:mt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-white mb-8">
          My Projects
        </h2>
        <div className="space-y-6">
          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
            <a 
              className="underline text-blue-400 hover:text-blue-500 text-lg sm:text-xl font-medium block" 
              href="http://github.com/nmacl" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              github.com/nmacl
            </a>
            <p className="text-gray-400 mt-2 text-base sm:text-lg">
              This is where I store my public code repositories.
            </p>
          </div>

          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
            <a 
              className="underline text-blue-400 hover:text-blue-500 text-lg sm:text-xl font-medium block" 
              href="https://criblytics.web.app" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              criblytics.web.app
            </a>
            <p className="text-gray-400 mt-2 text-base sm:text-lg">
              A website to perform a wide-area search for good-value rental properties.
            </p>
          </div>

          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
            <a 
              className="underline text-blue-400 hover:text-blue-500 text-lg sm:text-xl font-medium block" 
              href="https://mooreleonhardt.com" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              mooreleonhardt.com
            </a>
            <p className="text-gray-400 mt-2 text-base sm:text-lg">
              A freelance website I developed for a client.
            </p>
          </div>

          <div className="bg-gray-800 p-4 sm:p-6 rounded-lg shadow-md">
            <a 
              className="underline text-blue-400 hover:text-blue-500 text-lg sm:text-xl font-medium block" 
              href="https://www.youtube.com/watch?v=VijfHtyC0Rw" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              Pathfinders
            </a>
            <p className="text-gray-400 mt-2 text-base sm:text-lg">
              A group project I collaborated on for school.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
