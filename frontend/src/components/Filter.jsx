export function Filter( { searchValue, setSearchValue}) {
 return (
    <form className='filter-pokemon'>
        <input type="text" placeholder="Enter a Pokemon's name..." value={searchValue} onChange={(e) => setSearchValue(e.target.value)}></input>
        <button className='filter-button'>Filter</button>
    </form>
 )
}