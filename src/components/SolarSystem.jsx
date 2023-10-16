import React from 'react';
import Title from './Title';
import PlanetCard from './PlanetCard';
import planets from '../data/planets';
import 'tailwindcss/tailwind.css';
import './SolarSystem.css';

class SolarSystem extends React.Component {
  render() {
    return (
      <div data-testid="solar-system" className="solar-system">
        <Title headline="Solar System Planets" />
        <div className="system">
          {planets.map((planet) => (
            <PlanetCard
              key={ planet.name }
              planetName={ planet.name }
              planetImage={ planet.image }
            />
          ))}
        </div>

      </div>
    );
  }
}

export default SolarSystem;
