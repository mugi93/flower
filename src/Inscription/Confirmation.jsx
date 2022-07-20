// Résumé de l'inscription, visualiser les infos avant validation

import React from 'react'
import { Grid, List, ListItem, ListItemText, Button, makeStyles, Typography, Container } from '@material-ui/core';
import axios from 'axios';
import PopupErreur from "./PopupErreur";


const useStyles = makeStyles(() => ({
  button: {
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    color: "black",
    width: "75%",
    height: "50px",
    marginLeft: "20%",
    marginBottom: "15%",
  },
}))

export default function Confirmation({ prevStep, nextStep, values, nextSteps }) {

  const classes = useStyles();
  const [open, setOpen] = React.useState(false);



  const { firstname, lastname, email, password, address, cp, country, phone } = values
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
  const handleClose = () => {
    setOpen(false);
    window.location.reload()
  };

  // fonction pour creer un utilisateur 
  const handleConnection = async (e) => {
    try {

      const response = await axios.post(`${process.env.REACT_APP_API_BASE_URL}create/`, {
        firstname, lastname, email, password, address, cp, country, phone
      }, { withCredentials: true, });

      if (response.data === 'you already have a account'
      ) {
        console.log(response.data)
        return setOpen(true)

      } else {
        e.preventDefault();
        Continue(e)

      }
    } catch (error) {
      e.preventDefault();
      Continues(e)
      console.error(error)
      return false
    }

  }


  return (
    <Container component="main" maxWidth="xs">
      <div style={{}}>
        <Typography component="h1" variant="h5" style={{ textAlign: "center", marginTop: "30px", marginBottom: "30px" }}>
          Résumé de votre profil
        </Typography>
        <List>
          <ListItem>
            <ListItemText primary="Prénom :" secondary={firstname} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Nom :" secondary={lastname} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Email :" secondary={email} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Adresse :" secondary={address} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Code postal :" secondary={cp} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Ville :" secondary={country} />
          </ListItem>
          <ListItem>
            <ListItemText primary="Téléphone :" secondary={phone} />
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
            <PopupErreur open={open} handleClose={handleClose} />
          </Grid>



        </Grid>
      </div>
    </Container>
  )


}


