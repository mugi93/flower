// Acceuil et visualisation des recherches via la search barre

import React, { useState } from 'react';
import Search from './Search';
import Works from './Works';
import LastAnnouncement from './LastAnnouncement';
import axios from 'axios';
import CardAds2 from './Components/CardAds2';
import { makeStyles } from "@material-ui/core/styles";
import { Link } from 'react-router-dom';
import { Grid } from '@material-ui/core';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const useStyles = makeStyles((theme) => ({
  div: {
    display: "flex", flexDirection: "row",
    [theme.breakpoints.down("xs")]: {
      display: "contents"

    },

  },
  card: {
    [theme.breakpoints.down("xs")]: {
      marginLeft: "165px"
    },
  },



}));
export default function Accueil(props) {
  const [annonce, setAnnonce] = React.useState("");
  const [searchValue, setSearhValue] = React.useState("");
  const [write, setWrite] = useState(false)
  const handleChange = (event) => {
    setSearhValue(event.target.value);
  };
  const classes = useStyles();
  const theme = useTheme()
  const isMatch = useMediaQuery(theme.breakpoints.down('sm'))

  //fonction pour chercher par le titre
  const search = async () => {
    try {

      const findSearch = await axios.get(`${process.env.REACT_APP_API_BASE_URL}annonce/title/${searchValue}`, {
        withCredentials: true,
      });
      if (findSearch.data) {

        setAnnonce(findSearch.data)
        setWrite(true)
        return true
      } else {

      }
    } catch (error) {
      console.log(error)


    }
  }


  if (write == true) {

    if (
      annonce[0].length != 0
    ) {
      return (
        <div>


          <Search onChange={handleChange} plante={search} searchValue={searchValue} />
          {isMatch ? (
            <div className={classes.div}>
              {annonce.length > 1 ? (<>
                {annonce[0].map((annonce) => (

                  <Link style={{ textDecoration: "none" }} to={`/annonce/${annonce.id}`}>
                    <CardAds2 className={classes.card} photoA={annonce.photoA} title={annonce.title} priceWanted={annonce.priceWanted} country={annonce.country} delivery={annonce.delivery} validity={annonce.validity} />
                  </Link>
                ))
                }

                {annonce[1].map((annonce) => (

                  <Link style={{ textDecoration: "none" }} to={`/annonce/${annonce.id}`}>
                    <CardAds2 className={classes.card} photoA={annonce.photoA} title={annonce.title} priceWanted={annonce.priceWanted} country={annonce.country} delivery={annonce.delivery} validity={annonce.validity} />
                  </Link>
                ))}</>) : (<>
                  {annonce[0].map((annonce) => (

                    <Link style={{ textDecoration: "none" }} to={`/annonce/${annonce.id}`}>
                      <CardAds2 className={classes.card} photoA={annonce.photoA} title={annonce.title} priceWanted={annonce.priceWanted} country={annonce.country} delivery={annonce.delivery} validity={annonce.validity} />
                    </Link>
                  ))
                  }</>)}


            </div>) : (<div className={classes.div} >

              {annonce.length > 1 ? (<>
                <Grid container >
                  {annonce[0].map((annonce) => (
                    <Grid item xs={4} sm={5} md={4}>
                      <Link style={{ textDecoration: "none" }} to={`/annonce/${annonce.id}`}>
                        <CardAds2 className={classes.card} photoA={annonce.photoA} title={annonce.title} priceWanted={annonce.priceWanted} country={annonce.country} delivery={annonce.delivery} validity={annonce.validity} />
                      </Link></Grid>
                  ))}
                  {annonce[1].map((annonce) => (
                    <Grid item xs={4} sm={5} md={4}>
                      <Link style={{ textDecoration: "none" }} to={`/annonce/${annonce.id}`}>
                        <CardAds2 className={classes.card} photoA={annonce.photoA} title={annonce.title} priceWanted={annonce.priceWanted} country={annonce.country} delivery={annonce.delivery} validity={annonce.validity} />
                      </Link></Grid>
                  ))
                  }</Grid></>) : (<Grid container >
                    {annonce[0].map((annonce) => (
                      <Grid item xs={4} sm={5} md={4}>
                        <Link style={{ textDecoration: "none" }} to={`/annonce/${annonce.id}`}>
                          <CardAds2 className={classes.card} photoA={annonce.photoA} title={annonce.title} priceWanted={annonce.priceWanted} country={annonce.country} delivery={annonce.delivery} validity={annonce.validity} />
                        </Link></Grid>
                    ))}
                  </Grid>)}
            </div>)}
          <LastAnnouncement />
          <Works />
        </div>
      )
    }
    else if (
      annonce[0].length == 0
    ) {
      // pour indiquer une erreur 
      return (
        <div>
          <Search onChange={handleChange} plante={search} searchValue={searchValue} />
          <h3 style={{ marginTop: "15px", marginLeft: "10px" }}>Désolé, votre recherche ne correspond aux végétaux disponible. Veuillez recommencer une recherche.</h3>
          <LastAnnouncement />
          <Works />
        </div>
      )
    }
  }

  else {
    return (
      <div>
        <Search onChange={handleChange} plante={search} searchValue={searchValue} />

        <LastAnnouncement style={{}} />
        <Works />
      </div>
    )
  };
}

