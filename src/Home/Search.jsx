// Barre de recherche

import { Button, Card, TextField } from '@mui/material';
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';




const useStyles = makeStyles((theme) => ({
  search: {
    marginLeft: "12%",
    width: "75%",
    height: "50px",
    borderRadius: "5px",
    marginBottom: "30px",
    marginTop: "35px",
    [theme.breakpoints.down("xs")]: {
      width: "79%",
      marginTop: "22px",
      marginLeft: "10%"
    },
  },
  button: {
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    color: "black",
    width: "75%",
    height: "50px",
    marginLeft: "12%",
    marginBottom: "10px",
    [theme.breakpoints.down("sm")]: {
      marginTop: "-22px"


    },
  },
  card: {
    height: "200px", width: "450px", marginLeft: "150px", marginTop: "200px", display: "flex", flexDirection: "column", position: "absolute",
    [theme.breakpoints.down("sm")]: {
      width: "344px",
      height: "165px",
      marginTop: "81px",
      marginLeft: "80px"


    },
  },

  icon: {
    height: "25px", width: "25px", marginLeft: "350px", marginTop: "50px", position: "absolute",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "260px"
    }
  },
  p: {
    marginLeft: "150px", marginTop: "95px", position: "absolute", fontSize: "1.73em",

    [theme.breakpoints.down("sm")]: {
      marginTop: "0px",
      marginLeft: "30px"
    }

  }
}));

export default function Search({ onChange, plante, searchValue }) {
  const classes = useStyles();
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'))
  return (

    <div>
      {console.log(isMatch)}
      {isMatch ? (<><Card style={{ height: "100%", width: "100%", marginTop: "20px", display: "flex", maxWidth: "xs" }}>
        <p style={{ marginLeft: "50px", marginTop: "0px", position: "absolute", fontSize: "1.1em" }}>Donnez à vos végétaux une seconde vie et achetez-en de nouveaux.</p>
        {/* <p style={{ marginLeft: "50px", marginTop: "24px", position: "absolute", fontSize: "1.1em" }}>et achetez-en de nouveaux.</p> */}
        <img style={{ width: "100%", height: "100%", borderBottom: "0px" }} src="/ban-search.png" alt="bannière" />
        <Card style={{ height: "126px", width: "269px", marginLeft: "7px", marginTop: "39px", display: "flex", flexDirection: "column", position: "absolute", }}>
          {/* <div style={{ height: "25px", width: "25px", marginLeft: "290px", marginTop: "50px", position: "absolute" }}> */}
          {/* <LocalFloristIcon /> */}
          {/* </div> */}
          <TextField
            className={classes.search}
            value={searchValue}
            type="text"
            placeholder="Recherchez votre végétal"
            onChange={onChange}
          />
          <Button className={classes.button} onClick={plante} >RECHERCHER</Button>
        </Card>


      </Card></>) : (<><Card style={{ height: "100%", width: "100%", marginTop: "20px", display: "flex", maxWidth: "xs" }}>
        <p className={classes.p}>Donnez à vos végétaux une seconde vie et achetez-en de nouveaux</p>
        <img style={{ width: "100%", height: "100%", borderBottom: "0px" }} src="/ban-search.png" alt="bannière" />
        <Card className={classes.card}>
          <div className={classes.icon}>
            <LocalFloristIcon />
          </div>
          <TextField
            className={classes.search}
            value={searchValue}
            type="text"
            placeholder="Recherchez votre végétal"
            onChange={onChange}
          />
          <Button className={classes.button} onClick={plante} >RECHERCHER</Button>
        </Card>

        <div>


        </div>
      </Card> </>)}


    </div>


  );
}

