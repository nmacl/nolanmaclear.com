import { useState } from 'react';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Experience from './components/Experience';

function App() {
  const [menu, setMenu] = useState(0);

  const renderComponent = () => {
    switch (menu) {
      case 0: return <About />;
      case 1: return <Skills />;
      case 2: return <Projects />;
      case 3: return <Experience />;
      default: return <About />;
    }
  };

  return (
    <div className="p-4 sm:p-12 flex min-h-screen items-center justify-center bg-black text-lg sm:text-xl">
      <div className="terminal-window">
        <div className="window-header">
          <div className="window-controls">
            <span className="control close" />
            <span className="control minimize" />
            <span className="control maximize" />
          </div>
          <div className="title">nolanmaclear.com</div>
        </div>

        <div className="window-content">

          <p>Last login: Mon Jul 28 18:44:54 on ttys002</p>
          <p>nolanmaclear@Nolans-MacBook-Air ~ % ls</p>

          <ul className="list-none text-lg sm:text-2xl pl-4 sm:pl-10 mt-4">
            <li className="my-2">
              <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-4">
                <button
                  onClick={() => setMenu(0)}
                  className={`menu-btn ${menu === 0 ? 'active' : ''}`}
                >About</button>
                <button
                  onClick={() => setMenu(1)}
                  className={`menu-btn ${menu === 1 ? 'active' : ''}`}
                >Skills</button>
                <button
                  onClick={() => setMenu(2)}
                  className={`menu-btn ${menu === 2 ? 'active' : ''}`}
                >Projects</button>
                <button
                  onClick={() => setMenu(3)}
                  className={`menu-btn ${menu === 3 ? 'active' : ''}`}
                >Experience</button>
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