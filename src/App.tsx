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
    <div className="p-12 flex min-h-screen items-center justify-center bg-black text-xl">
      <div className="terminal-window min-h-[650px]">
        <div className="window-header">
          <div className="window-controls">
            <span className="control close"></span>
            <span className="control minimize"></span>
            <span className="control maximize"></span>
          </div>
          <div className="title overflow-hidden">nolanmaclear.com</div>
        </div>
        <div className="window-content overflow-hidden">
          <p>Last login: Sun Apr 28 22:44:54 on ttys002</p>
          <p>nolanmaclear@Nolans-MacBook-Air ~ % ls</p>
          <ul className="list-none text-2xl pl-10 relative mt-4">
            <li className="relative my-2 flex">
              <button 
                onClick={() => setMenu(0)}
                className={`text-green-500 hover:text-white focus:outline-none w-1/4 transition duration-300 ease-in-out ${menu === 0 ? 'scale-110 text-white' : 'scale-100'}`}>
                About
              </button>
              <button 
                onClick={() => setMenu(1)}
                className={`text-green-500 hover:text-white focus:outline-none w-1/4 transition duration-300 ease-in-out ${menu === 1 ? 'scale-110 text-white' : 'scale-100'}`}>
                Skills
              </button>
              <button 
                onClick={() => setMenu(2)}
                className={`text-green-500 hover:text-white focus:outline-none w-1/4 transition duration-300 ease-in-out ${menu === 2 ? 'scale-110 text-white' : 'scale-100'}`}>
                Projects
              </button>
              <button 
                onClick={() => setMenu(3)}
                className={`text-green-500 hover:text-white focus:outline-none w-1/4 transition duration-300 ease-in-out ${menu === 3 ? 'scale-110 text-white ' : 'scale-100'}`}>
                Experience
              </button>
            </li>
          </ul>
          {renderComponent()}
        </div>
      </div>
    </div>
  );
}

export default App;
