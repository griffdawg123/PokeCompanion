import "./styles.css";
import React, { useState } from "react";
import kanto from "./static/151.json";
import { Header } from "./components/header";
import { PokemonGrid } from "./components/PokemonGrid";
import { Filter } from "./components/Filter";
import { Tab } from "./components/Tab";
import { TabList } from "./components/TabList";
import { ContentList } from "./components/ContentList";
import { Content } from "./components/Content";
import { TabWrapper } from "./components/TabWrapper";
import { PokeHighlight } from "./components/PokeHighlight";

export default function App() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState(0);

  const empty = {};

  return (
    <div className="companion">
      <Header />
      <Filter searchValue={search} setSearchValue={setSearch} />
        <TabWrapper>
          <TabList>
            <Tab id={1}>To Collect</Tab>
            <Tab id={2}>Collected</Tab>
          </TabList>
          <ContentList>
            <Content id={1}>
              <PokemonGrid
                pokemonList={kanto}
                searchValue={search}
                selected={true}
                choosePokemon={setSelected}
              />
            </Content>
            <Content id={2}>
              <PokemonGrid
                pokemonList={empty}
                searchValue={search}
                selected={false}
              />
            </Content>
          </ContentList>
        </TabWrapper>
        <PokeHighlight selected={selected} pokeList={kanto}/>
    </div>
  );
}
