import React from 'react';
import PropTypes from 'prop-types';

class MissionCard extends React.Component {
  render() {
    const { name, year, country, destination } = this.props;
    return (
      <div data-testid="mission-card">
        <h3 data-testid="mission-name">{name}</h3>
        <p data-testid="mission-year">{year}</p>
        <p data-testid="mission-country">{country}</p>
        <p data-testid="mission-destination">{destination}</p>
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
