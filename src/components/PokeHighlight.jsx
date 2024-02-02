export function PokeHighlight({ selected, select, toCollect, collectedMons, setToCollect, setCollectedMons}) {

  function collect(id, checked) {
    let lists = [toCollect, collectedMons]
    let setters = [setToCollect, setCollectedMons]
    let addTo = checked ? 1 : 0
    let removeFrom = checked ? 0 : 1

    setters[addTo]({...lists[addTo], [id]: lists[removeFrom][id]})
    const {[id]: tmp, ...rest} = lists[removeFrom]
    setters[removeFrom](rest)
  }

  if (!Object.keys({...toCollect, ...collectedMons}).includes(selected)) return <></>;
  return (
    <div className={Object.keys(collectedMons).includes(selected) ? "poke-highlight selected" : "poke-highlight"}>
      <div className="exit" onClick={() => select("")}>
        <p>X</p>
      </div>
      <h1>
        {selected}. {{...toCollect, ...collectedMons}[selected]}
      </h1>
      <img
        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${selected}.png`}
        width={250}
        height={250}
      />
      <form className="collected">
        <label>Collected</label>
        <input type="checkbox" checked={Object.keys(collectedMons).includes(selected)} onChange={(e) => collect(selected, e.target.checked)}/>
      </form>
    </div>
  );
}
