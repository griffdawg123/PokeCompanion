import { PokemonGridItem } from "./PokemonGridItem";

export function PokemonGrid({ pokemonList, searchValue, select }) {
  return (
    <div className="pokemon-grid">
      {Object.keys(pokemonList).map((id) => {
        if (pokemonList[id].toLowerCase().includes(searchValue.toLowerCase())) {
          return (
            <PokemonGridItem
              id={id}
              pokemonList={pokemonList}
              select={select}
            />
          );
        }
      })}
    </div>
  );
}
