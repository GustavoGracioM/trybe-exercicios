import React from "react";
import data from '../data';
import Pokemon from "./Pokemon";

class Pokedex extends React.Component {
  render () {
    return (
       data.map(poke => (
        <Pokemon pokemon={poke} />
      ))
    )
  }
}

export default Pokedex;