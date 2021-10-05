import React from "react";
import PropTypes from 'prop-types';

class Pokemon extends React.Component {
  render() {
    const { pokemon } = this.props;
    return (
      <article>
        <div className='card'>
          <p>{pokemon.name}</p>
          <p>{pokemon.type}</p>
          <p>Average Weight: {`${pokemon.averageWeight.value} ${pokemon.averageWeight.measurementUnit}`}</p>
        </div>
      <div className='card'>
        <a href={pokemon.type}><img src={pokemon.image} alt={pokemon.name}></img></a>
      </div>
    </article>
    )
  }
}

Pokemon.propTypes = {
  pokemon: PropTypes.shape({
    name: PropTypes.string,
    type: PropTypes.string,
    averageWeight: PropTypes.shape({
      measurementUnit: PropTypes.string,
      value: PropTypes.number,
    }),
    image: PropTypes.string,
  }).isRequired,
};



export default Pokemon;