
export function PokemonGrid({ pokemonList, searchValue, selected }) {
    if (!selected) return null
    return (
    <div className='pokemon-grid'>
        {Object.keys(pokemonList).map((id) => {
          if (pokemonList[id].toLowerCase().includes(searchValue.toLowerCase())) {
            return <div className='pokemon-grid-item'>{id}. {pokemonList[id]}</div>
          }
        })}
    </div>
    )
}