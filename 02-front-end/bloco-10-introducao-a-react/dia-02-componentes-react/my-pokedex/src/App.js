import './App.css';
import Pokedex from './Components/Pokedex';
import pokemons from "./data";

function App() {
  return (
    //o app vai imprimir a pokedex
    <main className='app'>
      <h1>Pokedex</h1>
      <Pokedex pokemons={pokemons} />
    </main>
  )
}

export default App;
