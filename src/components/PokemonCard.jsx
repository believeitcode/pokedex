import React from "react";
import { toFirstCharUppercase } from "../utils";
import {
    Grid,
    Card,
    CardMedia,
    CardContent,
    Typography,
  } from "@material-ui/core";
 import { useStyles } from "../theme/PokedexTheme" ;



const PokemonCard = ({pokemon, history}) => {
    const { name, url } = pokemon;
    //const { id, name, sprite } = pokemon;
    const classes = useStyles();
    const id = url.match("https://pokeapi.co/api/v2/pokemon/(\\d+)/")[1];
    console.log(id);

    return (  
        <Grid item xs={6} md={3} key={id}>
        <Card onClick={() => history.push(`/${id}`)}>
          <CardMedia
            className={classes.cardMedia}
            image={`https://pokeres.bastionbot.org/images/pokemon/${id}.png`}
            style={{ width: "130px", height: "130px" }}
          />
          <CardContent className={classes.cardContent}>
            <Typography>{`${id}. ${toFirstCharUppercase(name)}`}</Typography>
          </CardContent>
        </Card>
      </Grid>
    );
}
 
export default PokemonCard;
