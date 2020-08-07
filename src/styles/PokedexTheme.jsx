import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
    pokedexContainer: {
      padding: "20px",
      paddingLeft: "50px",
      paddingRight: "50px",
      margin:"0",
      height: "100%",
      backgroundColor: "#cfd8dc",
    },
    navBar:{
      backgroundColor: "#e53935",
    },
    card: {
      width: "75%",
      height: 'auto',
      backgroundColor: "#e3f2fd",
      overflow: "hidden",
      paddingTop :"10px",
      color: "#006a71",
    
    },
    cardMedia: {
      margin: "auto",
    },
    cardContent: {
    
      textAlign: "center",
    },
    searchContainer: {
      display: 'flex',
      backgroundColor: fade(theme.palette.common.white, 0.15),
      paddingLeft: "20px",
      paddingRight: "20px",
      marginTop: "5px",
      marginBottom: "5px",
      
    },
    searchIcon: {
      alignSelf: "flex-end",
      marginBottom:"5px"
    },
    
    searchInput: {
      width: "200px",
      margin: "5px"
    },
    toolbarContainer: {
      display: 'flex',
      flexDirection: 'row',
       justifyContent: "space-between",
     
    },
  }));