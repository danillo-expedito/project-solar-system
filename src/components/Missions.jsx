import React from 'react';
import Title from './Title';
import missions from '../data/missions';
import MissionCard from './MissionCard';
import 'tailwindcss/tailwind.css';

class Missions extends React.Component {
  render() {
    return (
      <div
        data-testid="missions"
        id="missions"
        className="border-2 border-gray-700 rounded-lg p-4
        w-100% mx-auto my-4
        flex flex-col justify-center items-center gap-4
        bg-gradient-to-r
        from-zinc-900 via-slate-600 to-zinc-950 to-96%
        "
      >
        <Title headline="Missions" className="text-xl" />
        <div className="grid grid-cols-4 gap-4">
          {missions.map((mission) => (
            <MissionCard
              name={ mission.name }
              year={ mission.year }
              country={ mission.country }
              destination={ mission.destination }
              key={ mission.name }
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Missions;
