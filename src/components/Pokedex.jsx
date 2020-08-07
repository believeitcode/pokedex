import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Grid,
  TextField
} from "@material-ui/core";

import CircularProgress from "@material-ui/core/CircularProgress";
import SearchIcon from "@material-ui/icons/Search";
import { useStyles } from "../styles/PokedexTheme";
import axios from "axios";
import PokemonCard from "./PokemonCard";



const Pokedex = ({ history }) => {
  const classes = useStyles();
  const [pokemonData, setPokemonData] = useState([]);
  const [filter, setFilter] = useState("");

  const handleSearchChange = (e) => {
    setFilter(e.target.value);
  }

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=807`)
      .then(function (response) {
        //console.log(response);
        const { results } = response.data;
        setPokemonData(results);
      });
      
  },[]);



  return (
    <>
      <AppBar className={classes.navBar} position="static">
        <Toolbar className={classes.toolbarContainer}>
        <a href="/" className={classes.starIcon}>
           <img src="https://img.icons8.com/color/96/000000/star-pokemon.png" alt="icon"/>
           </a>
           <div className={classes.searchContainer}>
              <SearchIcon className={classes.searchIcon} />
              <TextField 
              className={classes.searchInput}
              label="Pokemon"
              variant="standard"
              onChange={handleSearchChange} />
           </div>
           
        </Toolbar>
      </AppBar>
      {pokemonData ? (
        <Grid container spacing={2} className={classes.pokedexContainer}>
          {
            pokemonData.map((pokemon, i) => ( 
              pokemon.name.includes(filter) &&
              <PokemonCard key={i} pokemon={pokemon} history={history} />
            ))
          }
        </Grid>
      ) : (
        <CircularProgress />
      )}
    </>
  );
};

export default Pokedex;
