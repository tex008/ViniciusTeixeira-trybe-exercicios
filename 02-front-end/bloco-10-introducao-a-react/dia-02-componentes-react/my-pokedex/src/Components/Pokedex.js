import React, { Component } from "react";
import Pokemon from "./Pokemon";

class Pokedex extends Component {
  render() {
    const { pokemons } = this.props 
    //desestruturar
    //a pokedex vai ser um map, porque a cada pokemon ela vai trazer um pokemon diferente
    //como é um map, precisa de ter uma key
    return (
      //fazer um map com pokemon
      <div className="pokedex">
        {pokemons.map((pokemon) => <Pokemon key={pokemon.id} pokemon={pokemon} />)}
      </div>
    )
    
    
  }
}

export default Pokedex