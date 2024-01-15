export function PokeHighlight({ selected, pokeList }) {
    if (!Object.keys(pokeList).includes(selected)) return <></>
    return (
        <div className="poke-highlight">
          <p>name</p>
          <p>id</p>
          <p>picture</p>
          <p>checkbox</p>
        </div>
    )
}