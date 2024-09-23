import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';
import { useState } from 'react';

function App() {
  const [menu, setMenu] = useState(0);

  // Render component based on 'menu' state
  const renderComponent = () => {
    switch(menu) {
      case 0:
        return <About />;
      case 1:
        return <Skills />;
      case 2:
        return <Projects />;
      case 3:
        return <Experience />;
      default:
        return <About />;
    }
  };

  return (
    <div className="p-4 sm:p-12 flex min-h-screen items-center justify-center bg-black text-lg sm:text-xl">
      <div className="terminal-window w-full max-w-3xl min-h-[650px] bg-gray-900 rounded-lg shadow-lg overflow-hidden">
        <div className="window-header flex items-center justify-between bg-gray-800 px-4 py-2">
          <div className="window-controls flex space-x-2">
            <span className="control close w-3 h-3 bg-red-500 rounded-full"></span>
            <span className="control minimize w-3 h-3 bg-yellow-500 rounded-full"></span>
            <span className="control maximize w-3 h-3 bg-green-500 rounded-full"></span>
          </div>
          <div className="title text-white text-sm sm:text-base overflow-hidden">nolanmaclear.com</div>
        </div>
        <div className="window-content p-4 sm:p-6 overflow-auto bg-black text-green-500">
          <p>Last login: Sun Apr 28 22:44:54 on ttys002</p>
          <p>nolanmaclear@Nolans-MacBook-Air ~ % ls</p>
          <ul className="list-none text-lg sm:text-2xl pl-4 sm:pl-10 mt-4">
            <li className="my-2">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <button 
                  onClick={() => setMenu(0)}
                  className={`text-green-500 hover:text-white focus:outline-none w-full sm:w-1/4 px-2 py-1 sm:px-4 sm:py-2 transition transform duration-300 ease-in-out ${
                    menu === 0 ? 'scale-110 text-white' : 'scale-100'
                  }`}>
                  About
                </button>
                <button 
                  onClick={() => setMenu(1)}
                  className={`text-green-500 hover:text-white focus:outline-none w-full sm:w-1/4 px-2 py-1 sm:px-4 sm:py-2 transition transform duration-300 ease-in-out ${
                    menu === 1 ? 'scale-110 text-white' : 'scale-100'
                  }`}>
                  Skills
                </button>
                <button 
                  onClick={() => setMenu(2)}
                  className={`text-green-500 hover:text-white focus:outline-none w-full sm:w-1/4 px-2 py-1 sm:px-4 sm:py-2 transition transform duration-300 ease-in-out ${
                    menu === 2 ? 'scale-110 text-white' : 'scale-100'
                  }`}>
                  Projects
                </button>
                <button 
                  onClick={() => setMenu(3)}
                  className={`text-green-500 hover:text-white focus:outline-none w-full sm:w-1/4 px-2 py-1 sm:px-4 sm:py-2 transition transform duration-300 ease-in-out ${
                    menu === 3 ? 'scale-110 text-white' : 'scale-100'
                  }`}>
                  Experience
                </button>
              </div>
            </li>
          </ul>
          <div className="mt-4">
            {renderComponent()}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
