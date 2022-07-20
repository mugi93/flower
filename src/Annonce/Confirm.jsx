// Résumé de l'annonce, visualiser les infos avant validation

import React from 'react'
import { Container, Grid, List, ListItem, ListItemText, Button, makeStyles } from '@material-ui/core';
import axios from 'axios';
import { useCookies } from 'react-cookie';

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    color: "black",
    width: "75%",
    height: "50px",
    marginLeft: "",
    marginBottom: "10px",
  },
  list: {
    height: "600px", width: "400px",
    [theme.breakpoints.down("xs")]: {
      width: "374px"
    },
  }
}))

export default function Confirm({ prevStep, nextStep, values, nextSteps }) {

  const classes = useStyles();
  const [cookies, setCookies] = useCookies(["token"])
  const token = cookies.token


  const { title, category, delivery, flowerPot, stock, validity, description, priceOrigin, photoA, photoB, photoC } = values
  const priceWanteds = eval(priceOrigin + "+ 2")
  const priceWanted = priceWanteds.toString()

  const Continue = e => {

    nextStep();
  }
  const Continues = e => {
    nextSteps();
  }

  const Previous = e => {
    e.preventDefault();
    prevStep();
  }

  const handleConnection = async (e) => {
    try {
      // pour creer une annonce
      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}annonce/`, {
        title, category, delivery, flowerPot, stock, validity, description, priceOrigin, priceWanted, photoA, photoB, photoC
      }, { headers: { Authorization: `Bearer ${token}`, withCredentials: true, } });

      if (response.data) {
        e.preventDefault();
        Continue(e)
        return true
      }

    } catch (error) {
      e.preventDefault();
      Continues(e)
      console.error(error)
      return false
    }

  }

  return (
    <div className={classes.list}>

      <Container component="main" maxWidth="m">
        <h2>Résumé de votre annonce</h2>
        <div  >
          <List>
            <ListItem>
              <ListItemText primary="Titre de l'annonce :" secondary={title} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Catégorie :" secondary={category} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Livraison :" secondary={delivery} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Végétal en pot :" secondary={flowerPot} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Stock :" secondary={stock} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Date de validité :" secondary={validity} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Description :" secondary={description} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Prix souhaité :" secondary={priceOrigin} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Prix final :" secondary={priceWanted} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Photo 1 :" secondary={photoA} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Photo 2 :" secondary={photoB} />
            </ListItem>
            <ListItem>
              <ListItemText primary="Photo 3 :" secondary={photoC} />
            </ListItem>
          </List>
          <br />
          <Grid container spacing={2}>
            <Grid item xs={6} sm={6}>
              <Button
                className={classes.button}
                onClick={Previous}
                type="submit"
                fullWidth
                variant="contained"

              >
                Précédent
              </Button>
            </Grid>
            <Grid item xs={6} sm={6}>
              <Button
                className={classes.button}
                onClick={(e) => { handleConnection(e); }}
                type="submit"
                fullWidth
                variant="contained"

              >
                Valider
              </Button>
            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  )
}

