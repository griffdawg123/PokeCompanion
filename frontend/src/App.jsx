import './styles.css';
import React, { useState } from 'react';
import kanto from './static/151.json';
import { Header } from './components/header';
import { PokemonGrid } from './components/PokemonGrid';
import { Filter } from './components/Filter';

export default function App() {

  const [search, setSearch] = useState("")
  const [activeTab, setActiveTab] = useState(1)

  const empty = {}

  return (
    <div className="companion">
      <Header />
      <Filter searchValue={search} setSearchValue={setSearch} />
      <div className="grid">
        <div className='tab-list'>
          <div className={activeTab === 1 ? 'tab active-tab' : 'tab'} onClick = {() => setActiveTab(1)}>To Collect</div>
          <div className={activeTab === 2 ? 'tab active-tab' : 'tab'} onClick = {() => setActiveTab(2)}>Collected</div>
        </div>
        <div className='content-list'>
          <div className={activeTab === 1 ? 'content active-content' : 'content'}>
            <PokemonGrid pokemonList={kanto} searchValue={search} selected={true} />
          </div>
          <div className={activeTab === 2 ? 'content active-content' : 'content'}>
            <PokemonGrid pokemonList={empty} searchValue={search} selected={false} />
          </div>
        </div>
      </div>
    </div>
  )
}