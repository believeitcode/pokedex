import { fade, makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles(theme => ({
  typography: {
    "fontFamily": "\"MyCustomFont\"",
    "fontSize": 20,
    "lineHeight": 1.5,
    "letterSpacing": 0.32,
    useNextVariants: true,
    suppressDeprecationWarnings: true,
    h6: {
      "fontWeight": 800,
    },
  },
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
    pokedexName:{
      color: "#6e5773",
    },
    root: {
      display: 'flex',
      justifyContent:"space-around",
      alignItems:"center",
      backgroundColor: "#b3e5fc",
    
    },
    details: {
      display: 'flex',

    },
    pokeName:{
      color: "#edf4f2",
    },
    pokeHeader: {
      color:"#76ead7",
    },
    pokeTxt: {
      color: "#dddddd",
    },
    cardContentL: {
      
      marginRight: "180px",
      overflow: "hidden",
      fontWeight: "800",
      
    },
    cardContentM: {
      display: 'flex',
      flexDirection: 'column',
      marginRight: "40px",
      overflow: "hidden",
      backgroundColor: "#d9adad",
      borderRadius: "25px",
      justifyContent: "center",
      alignItems: "center",
    },
    cardContentR: {
      display: 'flex',
      flexDirection: 'column',
      marginLeft: "40px",
      overflow: "hidden",
      backgroundColor: "#d9adad",
      borderRadius: "25px",
      justifyContent: "center",
      alignItems: "center",
      width: "300px",
    },
   
   
  }));