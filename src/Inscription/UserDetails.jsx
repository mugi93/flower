// Fin série de question pour l'inscription

import React, { useState } from 'react'

import { Container, Typography, Grid, TextField, Button, makeStyles } from '@material-ui/core'
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import InputAdornment from '@mui/material/InputAdornment';
import IconButton from '@mui/material/IconButton';



const useStyles = makeStyles(() => ({
  button: {
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    color: "black",
    width: "75%",
    height: "50px",
    marginLeft: "50px",
    marginBottom: "40px",

  },
}))

export default function UserDetails({ nextStep, handleChange, values }) {
  const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/
  const classes = useStyles();
  const [passwordVisible, setPasswordvisible] = useState(false)

  // for continue event listener
  const Continue = e => {
    e.preventDefault();
    nextStep();
  }

  return (
    <Container component="main" maxWidth="xs">
      <div>
        <Typography component="h1" variant="h5" style={{ textAlign: "center", marginTop: "30px" }}>
          Faisons connaissance
        </Typography>
        <form>
          <br />
          <br />
          {/* prénom */}
          <Grid item xs={12}>
            <TextField
              placeholder="Prénom *"
              label="Prénom *"
              onChange={handleChange('firstname')}
              defaultValue={values.firstname}
              variant="outlined"
              autoComplete="firstname"
              fullWidth
            />
          </Grid>
          <br />
          <br />
          {/* nom */}
          <Grid item xs={12}>
            <TextField
              placeholder="Nom *"
              label="Nom *"
              onChange={handleChange('lastname')}
              defaultValue={values.lastname}
              variant="outlined"
              autoComplete="lastname"
              fullWidth
            />
          </Grid>
          <br />
          <br />
          <Grid >
            {/* email */}
            {!regexEmail.test(values.email) ? (<Grid item xs={12}>
              <TextField
                error
                placeholder="Email * "
                label="Email * "
                onChange={handleChange('email')}
                defaultValue={values.email}
                variant="outlined"
                autoComplete="email"
                fullWidth
              />
            </Grid>) : (

              <Grid item xs={12}>
                <TextField
                  placeholder="Email * "
                  label="Email * "
                  onChange={handleChange('email')}
                  defaultValue={values.email}
                  variant="outlined"
                  autoComplete="email"
                  fullWidth
                />
              </Grid>
            )}

            <br />
            <br />
            {/* password */}
            {!regexPassword.test(values.password) ? (<Grid item xs={12}>
              <TextField
                error
                helperText='Le mot de passe doit contenir au moins 8 caractères dont 1 chiffre et une majuscule'
                placeholder="Mot de passe *"
                label="Mot de passe *"
                onChange={handleChange('password')}
                defaultValue={values.password}
                variant="outlined"
                autoComplete="password"
                fullWidth
                type={passwordVisible ? "text" : "password"}
              />
              <IconButton
                aria-label="toggle password visibility"
                onMouseOver={() => setPasswordvisible(true)}
                onMouseOut={() => setPasswordvisible(false)}
              // onMouseOver={() => setPasswordvisible((prevState) => !prevState)}

              >
                {passwordVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </Grid>) : (<Grid item xs={12}>
              <TextField
                placeholder="Mot de passe *"
                label="Mot de passe *"
                onChange={handleChange('password')}
                defaultValue={values.password}
                variant="outlined"
                autoComplete="password"
                fullWidth
                type={passwordVisible ? "text" : "password"} />
              <IconButton
                aria-label="toggle password visibility"
                // onMouseOver={() => setPasswordvisible((prevState) => !prevState)}
                onMouseOver={() => setPasswordvisible(true)}
                onMouseOut={() => setPasswordvisible(false)}

              >
                {passwordVisible ? <Visibility /> : <VisibilityOff />}
              </IconButton>
            </Grid>)}

            <br />
            <br />
          </Grid>
          <br />
          <br />
          {values.password && values.email && values.lastname && values.firstname && regexEmail.test(values.email) && regexPassword.test(values.password) ?
            <Button className={classes.button}
              onClick={Continue}
              type="submit"
              fullWidth
              variant="contained">   Suivant
            </Button> : <>
              <Button className={classes.button}
                type="submit"
                fullWidth
                disabled={true}
                variant="contained">
                Suivant
              </Button></>}

        </form>
      </div>
    </Container>
  );
}