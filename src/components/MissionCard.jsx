import React from 'react';
import PropTypes from 'prop-types';
import 'tailwindcss/tailwind.css';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div
        data-testid="mission-card"
        className="flex flex-col items-center
        border border-stone-500 rounded-md
        shadow-md shadow-black p-4
        bg-gradient-to-b
        from-zinc-800 via-slate-600 to-zinc-950 to-96%
        "
      >
        <div>
          <h3
            data-testid="mission-name"
            className="text-xl text-center text-slate-300 italic"
          >
            {name}
          </h3>
          <hr className="w-72" />
        </div>
        <div className="flex flex-row gap-2">
          <p
            data-testid="mission-year"
            className="text-center text-stone-300"
          >
            {year}
          </p>
          <p
            data-testid="mission-country"
            className="text-center text-teal-100"
          >
            {country}
          </p>
        </div>
        <p
          data-testid="mission-destination"
          className="text-center text-cyan-700"
        >
          {destination}
        </p>
      </div>
    );
  }
}

MissionCard.propTypes = {
  name: PropTypes.string,
  year: PropTypes.string,
  country: PropTypes.string,
  destination: PropTypes.string,
};

MissionCard.defaultProps = {
  name: <h3>Sem titulo</h3>,
  year: <p>Sem valor</p>,
  country: <p>Sem valor</p>,
  destination: <p>Sem valor</p>,
};

export default MissionCard;
