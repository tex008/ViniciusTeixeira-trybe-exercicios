import React, { Component } from "react";

class Pokemon extends Component {
  render() {
    const { pokemon: { name, type, averageWeight, image } } = this.props;
    console.log('teste');
  //imprime cada pokemon
  //beleza. vai imprimir cada pokemon. O que tem que ser impresso em cada pokemon?
    // nome do pokemon
    // tipo do pokemon
    // peso médio do pokemon + unidade de medida
    // imagem do pokemon
    return (
      <div className="pokemon">
        <section>
          <p>{ name }</p>
          <p>{ type }</p>
          <p>
            {`Average weight: ${averageWeight.value} ${averageWeight.measurementUnit}`}
          </p>
        </section>
        <img src={image} alt={name}></img>

      </div>
    )
  }
}

export default Pokemon