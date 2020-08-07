import React, { useState, useEffect } from 'react';
import { Typography, Link, CircularProgress, Button, Toolbar, AppBar, Card, CardMedia, CardContent } from "@material-ui/core";
import { toFirstCharUppercase } from "../utils";
import { useStyles } from "../styles/PokedexTheme" ;
import colorTypes from "../styles/ColourTypes";
import HomeIcon from '@material-ui/icons/Home';
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
    const { name, id, species, height, weight, types, sprites, stats, abilities } = pokemon;
    const fullImageUrl = `https://pokeres.bastionbot.org/images/pokemon/${id}.png`;
    const { front_default } = sprites;
    return (
      <div>
      <AppBar className={classes.navBar} position="static">
        <Toolbar className={classes.toolbarContainer}>
           <a href="/">
           <img src="https://img.icons8.com/color/96/000000/star-pokemon.png" className={classes.starIcon} alt="icon"/>
           </a>
           <HomeIcon variant="contained" onClick={() => history.push("/")} />
        </Toolbar>
      </AppBar>
      <Card className={classes.root}> 
        <div className={classes.details}>
          <CardContent className={classes.cardContentL}> 
              <Typography variant="h1" className={classes.pokeName}>
              {`#${id}`} {toFirstCharUppercase(name)}
              </Typography>
              <CardMedia
                className={classes.cardMedia}
                image={fullImageUrl}
                style={{ width: "300px", height: "300px" }}
              />
          </CardContent>  

          <CardContent className={classes.cardContentM}> 
            <CardMedia
              className={classes.cardMedia}
              image={front_default}
              style={{ width: "100px", height: "100px" }}
            />
            <Typography variant="h3" className={classes.pokeHeader}>Pokemon Info</Typography>
            <div className="info">
             <Typography >
             {"Species: "}
            <Link href={species.url}>{species.name} </Link>
            </Typography>
            {`Height: ${height}`}
            <br/>
            {`Weight: ${weight}`}
            </div>
            <br/>
            <Typography variant="h4" className={classes.pokeHeader}> Types</Typography>
            <div className="types">
              {types.map((type,index) => (
                  <span
                    key={index}
                    className="types_form"
                    style={{ backgroundColor: colorTypes[type.type.name] }}
                  >
                    {type.type.name
                      .split(" ")
                      .map((l) => l.charAt(0).toUpperCase() + l.substring(1))
                      .join(" ")}
                  </span>
                ))}
            </div>
        </CardContent>

        
        <CardContent className={classes.cardContentR}> 
        <div className="stats">
            <Typography variant="h4" className={classes.pokeHeader} >Stats</Typography>
                <br />
                {stats.map((s) => (
                  <span key={s.stat.name}>
                    {`${s.stat.name
                      .split(" ")
                      .map((l) => l.charAt(0).toUpperCase() + l.substring(1))
                      .join(" ")}:  ${s.base_stat}`}
                    <br />
                  </span>
                  ))}
              </div>
              <br/>
              <div className="ability">
              <Typography variant="h4" className={classes.pokeHeader}>Ability</Typography>
                {abilities.map((s,index) => (
                      <span key={index}>
                        {`${s.ability.name
                          .split(" ")
                          .map((l) => l.charAt(0).toUpperCase() + l.substring(1))
                          .join(" ")}`}
                          <br />
                    </span>
                  ))}
                </div>
        </CardContent>  
          </div>
        </Card>
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