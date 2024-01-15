import { PokemonGridItem } from "./PokemonGridItem";

export function PokemonGrid({ pokemonList, searchValue, selected }) {
  if (!selected) return null;
  return (
    <div className="pokemon-grid">
      {Object.keys(pokemonList).map((id) => {
        if (pokemonList[id].toLowerCase().includes(searchValue.toLowerCase())) {
          return <PokemonGridItem id={id} pokemonList={pokemonList} />;
        }
      })}
    </div>
  );
}
