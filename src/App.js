import React from 'react';
// import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import 'tailwindcss/tailwind.css';

class App extends React.Component {
  render() {
    return (
      <div
        className="flex flex-col items-center gap-4
        bg-gradient-to-r
        from-zinc-900
        to-zinc-950 to-60%
      "
      >
        <SolarSystem />
        <Missions />
      </div>

    );
  }
}

//
export default App;
