import React from 'react';
import PropTypes from 'prop-types';
import './PlanetCard.css';

class PlanetCard extends React.Component {
  render() {
    const { planetName, planetImage } = this.props;
    return (
      <div data-testid="planet-card" className="planet">
        <img
          src={ planetImage }
          alt={ `Planeta ${planetName}` }
          id={ planetName.normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase() }
        />
        <p data-testid="planet-name" className="planet-name">
          {planetName}
        </p>
      </div>
    );
  }
}

PlanetCard.propTypes = {
  planetName: PropTypes.string,
  planetImage: PropTypes.string,
};

PlanetCard.defaultProps = {
  planetName: <p>Planeta</p>,
  planetImage: <img alt="Imagem do planeta" />,
};

export default PlanetCard;
