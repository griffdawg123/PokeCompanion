import "./styles.css";
import React, { useEffect, useState } from "react";
import kanto from "./static/151.json";
import all_pokemon from "./static/all_pokemon.json"
import { Header } from "./components/header";
import { PokemonGrid } from "./components/PokemonGrid";
import { Filter } from "./components/Filter";
import { Tab } from "./components/Tab";
import { TabList } from "./components/TabList";
import { ContentList } from "./components/ContentList";
import { Content } from "./components/Content";
import { TabWrapper } from "./components/TabWrapper";
import { PokeHighlight } from "./components/PokeHighlight";
import { initializeApp } from "firebase/app"
import { getAnalytics } from "firebase/analytics"
import firebase from "firebase/compat/app";
import "firebase/firestore"
import { collection, getDocs, getFirestore } from "firebase/firestore";

async function getdata(db) {
  const querySnapshot = await getDocs(collection(db, "pokemon-lists"));
  querySnapshot.forEach((doc) => {
    console.log(`${doc.id} => ${doc.data()}`);
  });
}

export default function App() {
  const [pokeList, setPokeList] = useState({})
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState("");
  const [collectedMons, setCollectedMons] = useState({})
  const [toCollect, setToCollect] = useState(all_pokemon)

  const firebaseConfig = {
    apiKey: "AIzaSyDgLzFh8G5toG0mC89E7dWGgNeTFjAhnu8",
    authDomain: "pokecom-5f29e.firebaseapp.com",
    projectId: "pokecom-5f29e",
    storageBucket: "pokecom-5f29e.appspot.com",
    messagingSenderId: "398139307633",
    appId: "1:398139307633:web:396ff6701b6d2cfc774dd0",
    measurementId: "G-4QT6SV50NV"
  };

  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  console.log(app);
  const db = getFirestore(app);
  console.log(db);

  getdata(db)

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
              pokemonList={toCollect}
              searchValue={search}
              choosePokemon={setSelected}
              select={setSelected}
            />
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
