import "./styles.css";
import React, { useEffect, useState } from "react";
import { Header } from "./components/Header";
import { PokemonGrid } from "./components/PokemonGrid";
import { Filter } from "./components/Filter";
import { Tab } from "./components/Tab";
import { TabList } from "./components/TabList";
import { ContentList } from "./components/ContentList";
import { Content } from "./components/Content";
import { TabWrapper } from "./components/TabWrapper";
import { PokeHighlight } from "./components/PokeHighlight";
import { db } from "./firebase";
import { collection, getDocs, addDoc } from "firebase/firestore";

const getPokemon = async (documentName, setPokelist, setLoading, setCollected) => {
  await getDocs(collection(db, "pokemon-lists"))
    .then((querySnapshot) => {
      const newData = querySnapshot.docs
        .filter(doc => doc.id === documentName);
      const temp = localStorage.getItem("collected")
      if (temp) {
        const collected = JSON.parse(temp)
        setPokelist(Object.fromEntries(Object.entries(newData[0].data()).filter(([id, name]) => !Object.keys(collected).includes(id))))
        setCollected(collected)
      } else {
        setPokelist(newData[0].data());
      }
      setLoading(false);
    })
}

export default function App() {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [collectedMons, setCollectedMons] = useState({})
  const [toCollect, setToCollect] = useState({})
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getPokemon("koaTpR4KjGT4qXmHj60q", setToCollect, setLoading, setCollectedMons)
  }, []);

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
            {loading ? <h2>Loading...</h2> :
            <PokemonGrid
              pokemonList={toCollect}
              searchValue={search}
              choosePokemon={setSelected}
              select={setSelected}
            />}
          </Content>
          <Content id={2}>
            <PokemonGrid
              pokemonList={collectedMons}
              searchValue={search}
              choosePokemon={setSelected}
              select={setSelected}
            />
          </Content>
        </ContentList>
      </TabWrapper>
      <PokeHighlight
        selected={selected}
        select={setSelected}
        toCollect={toCollect}
        collectedMons={collectedMons}
        setToCollect={setToCollect}
        setCollectedMons={setCollectedMons}
      />
    </div>
  );
}
