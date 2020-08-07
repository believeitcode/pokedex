import React from "react";
import { toFirstCharUppercase } from "../utils";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
  } from "@material-ui/core";
 import { useStyles } from "../styles/PokedexTheme" ;



const PokemonCard = ({pokemon, history}) => {
    const { name, url } = pokemon;
    //const { id, name, sprite } = pokemon;
    const classes = useStyles();
    const id = url.match("https://pokeapi.co/api/v2/pokemon/(\\d+)/")[1];
    console.log(id);

    return (  
        <Grid item xs={12} md={4} lg={2}   key={id} >
        <Card onClick={() => history.push(`/${id}`)} className={classes.card}>
          <CardMedia
            className={classes.cardMedia}
            image={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            style={{ width: "130px", height: "130px" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography className={classes.pokedexName} >{`#${id}. ${toFirstCharUppercase(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
}
 
export default PokemonCard;
