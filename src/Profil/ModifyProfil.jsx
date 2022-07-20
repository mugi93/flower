//Onglet du profil de l'utilisateur, ce dernier peut modifier ces informations.

import * as Yup from "yup";

import React, { useContext, useEffect, useState } from 'react';
import ButtonFormik from "../Common/ButtonFormik2";
import FormFormik from "../Common/FormFormik";
import FormField from '../Common/FormField';
import { useHistory } from "react-router-dom";
import UserContext from "../Context/UserContext";
import axios from "axios";
import { useCookies } from "react-cookie";
import { Container } from "@material-ui/core";
import { Button, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  profile: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    margin: "auto",
    marginBottom: "50px",
    width: "100%",
  },
  button: {
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    color: "black",
    width: "100%",
    height: "50px",
    marginLeft: "50px",
    marginBottom: "40px",

  },
  button2: {
    color: "black",
    width: "20%",
    height: "70px",
    display: "flex",
    alignItems: "center",
    marginLeft: "120%",
    borderRadius: "25px",
    justifyContent: "center",
    backgroundColor: "#33FF93",
    marginBottom: "60%",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "35%",
      width: "27%",
      marginTop: "3%"
    },
    [theme.breakpoints.down("sm")]: {
      marginLeft: "57%",
    },
  }
}));

export default function ModifyProfil(props) {
  const [cookies, setCookies] = useCookies(["token"]);
  const token = cookies.token
  const [user, setUser] = useState([]);
  const classes = useStyles();


  const validationSchema = Yup.object().shape({
    firstname: Yup.string(),
    lastname: Yup.string(),
    email: Yup.string(),
    password: Yup.string(),
    address: Yup.string(),
    cp: Yup.string(),
    country: Yup.string(),
    phone: Yup.string(),
  });


  const history = useHistory();

  useEffect(async () => {
    try {
      const ads = await axios.get(`${process.env.REACT_APP_API_BASE_URL}create/find`, { headers: { Authorization: `Bearer ${token}` } }, {
        withCredentials: true,
      })
      if (ads.data) {
        console.log(ads.data)
        setUser(ads.data.user)

      }
    } catch (error) {
      console.log(error)
    }
  }, [])

  return (

    <div className={classes.profile}>

      <FormFormik
        initialValues={{
          firstname: user.firstname,
          lastname: user.lastname,
          email: user.email,
          address: user.address,
          cp: user.cp,
          country: user.country,
          phone: "0" + user.phone,

        }}
        // pour modifier le profil
        validationSchema={validationSchema}
        onSubmit={(form) => {
          axios
            .patch(
              `${process.env.REACT_APP_API_BASE_URL}create/update`,
              form, { headers: { Authorization: `Bearer ${token}` } },
              {
                withCredentials: true,
              }
            )

          setUser(form);
          history.push("/profil")
          window.location.reload()
        }}
      >
        <br />
        <br />

        <FormField name="firstname" placeholder="Prénom" type="text" variant="outlined" />

        <FormField name="lastname" placeholder="Nom" type="text" variant="outlined" />

        <FormField name="email" placeholder="Email" type="text" variant="outlined" />

        <FormField name="address" placeholder="Adresse" type="text" variant="outlined" />

        <FormField name="cp" placeholder="Code postal" type="text" variant="outlined" />

        <FormField name="country" placeholder="Ville" type="text" variant="outlined" />

        <FormField name="phone" placeholder="Téléphone" type="text" variant="outlined" />

        <ButtonFormik className={classes.button} title="Modifier mon profil" type="submit" />


        <Button className={classes.button2} href="/modifyPass">Modifier son Mot de Passe</Button>



      </FormFormik>


    </div>
  );
}
