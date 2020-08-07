import React, { useState, useEffect } from 'react';
import { Typography, Link, CircularProgress, Button, Toolbar, AppBar } from "@material-ui/core";
import { toFirstCharUppercase } from "../utils";
import { useStyles } from "../styles/PokedexTheme" ;
import axios from "axios";

const Pokemon = (props) => {
  const { match, history } = props;
  const { params } = match;
  const { pokemonId } = params;
const classes = useStyles();

  const [pokemon, setPokemon] = useState(undefined);

  useEffect(() => {
    axios
      .get(`https://pokeapi.co/api/v2/pokemon/${pokemonId}/`)
      .then(function (response) {
        const { data } = response;
        setPokemon(data);
      })
      .catch(function (error) {
        setPokemon(false);
      });
  }, [pokemonId]);

  const generatePokemonJSX = (pokemon) => {
    const { name, id, species, height, weight, types, sprites } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <div>
      <AppBar className={classes.navBar} position="static">
        <Toolbar className={classes.toolbarContainer}>
           <a href="/">
           <img src="https://img.icons8.com/color/96/000000/star-pokemon.png" className={classes.starIcon} alt="icon"/>
           </a>
        </Toolbar>
      </AppBar>
        <Typography variant="h1">
          {`${id}.`} {toFirstCharUppercase(name)}
          <img src={front_default} alt="pokemon_image" />
        </Typography>
        <img style={{ width: "300px", height: "300px" }} src={fullImageUrl} alt="pokemon_image" />
        <Typography variant="h3">Pokemon Info</Typography>
        <Typography>
          {"Species: "}
          <Link href={species.url}>{species.name} </Link>
        </Typography>
        <Typography>Height: {height} </Typography>
        <Typography>Weight: {weight} </Typography>
        <Typography variant="h6"> Types:</Typography>
        {types.map((typeInfo) => {
          console.log(typeInfo.type.name);
          const { type } = typeInfo;
          const { name } = type;
          return <Typography key={name}> {`${name}`}</Typography>;
        })}
      </div>
    );
  };
  return (
    <>
      {pokemon === undefined && <CircularProgress />}
      {pokemon !== undefined && pokemon && generatePokemonJSX(pokemon)}
      {pokemon === false && <Typography> Pokemon not found</Typography>}
      {pokemon !== undefined && (
        <Button variant="contained" onClick={() => history.push("/")}>
          back to pokedex
        </Button>
      )}
    </>
  );
};
export default Pokemon;