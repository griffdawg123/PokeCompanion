export function PokemonGridItem({ id, pokemonList }) {
  return (
    <div className="pokemon-grid-item">
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <p>
        {id}. {pokemonList[id]}
      </p>
    </div>
  )
}
