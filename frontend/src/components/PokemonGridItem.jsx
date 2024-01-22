export function PokemonGridItem({ id, pokemonList, select }) {
  return (
    <div className="pokemon-grid-item" onClick={() => select(id)}>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`}
      />
      <p>
        {id}. {pokemonList[id]}
      </p>
    </div>
  )
}
