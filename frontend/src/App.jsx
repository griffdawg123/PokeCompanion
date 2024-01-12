import './styles.css'
import logo from './static/header.png'
import { useEffect, useState } from 'react'
import kanto from './static/151.json'

const MAX_WIDTH = 500

export default function App() {

  const  [width, setWidth] = useState(window.innerWidth)
  const [toggleView, setToggleView] = useState(true)


  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth)
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const staticSize = width >= MAX_WIDTH

  return (
    <div className="companion">
    <img src={logo} alt="header image" width={staticSize ? MAX_WIDTH : width-80}></img>
    <form className='filter-pokemon'>
      <input type="text" placeholder="Enter a Pokemon's name..."></input>
      <button className='filter-button'>Filter</button>
    </form>
    <div className='toggle-button' onClick={() => {setToggleView(!toggleView)}}>fwaf</div>
    <ul>
      {Object.keys(kanto).map((id) => {
        return <li>{id}. {kanto[id]}</li>
      })}
    </ul>
    </div>
  )
}