import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from "axios";
import { Container, Typography, Grid, TextField, makeStyles, Button } from '@material-ui/core'
import MenuItem from '@mui/material/MenuItem';
import DeleteIcon from '@mui/icons-material/Delete';
import { useCookies } from 'react-cookie';
import { useHistory } from "react-router-dom";
import ButtonFormik from "../Common/ButtonFormik4";
import FormFormik from "../Common/FormFormik";
import FormField from '../Common/FormField';

const useStyles = makeStyles((theme) => ({
  delete: {
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    color: "black",
    width: "",
    height: "",
    marginLeft: "12%",
    marginBottom: "",

  },


}));


export default function ModifyAnnonce(props) {
  const classes = useStyles();
  const [info, setInfo] = useState([]);
  const photos = info.photoA;
  const { id } = useParams();
  const [cookies, setCookies] = useCookies(["token"])
  const token = cookies.token
  const [check, setCheck] = useState(false);
  const [announcement, setAnnouncement] = useState([]);
  const history = useHistory();
  const priceWanteds = eval(info.priceOrigin + "+ 2")
  const price = priceWanteds.toString()

  useEffect(async () => {
    try {
      const description = await axios.get(`${process.env.REACT_APP_API_BASE_URL}annonce/find/${id}`, {
        withCredentials: true,
      });
      if (
        description.data
      ) {

        setInfo(description.data);
      } else {
        console.log("probleme")
      }
    } catch (error) {
      console.log(error);
    }
  }, []);
  const supprimer = async (id) => {
    try {
      if (token) {

        const supp = await axios.delete(`${process.env.REACT_APP_API_BASE_URL}annonce/drop/${id}`, { headers: { Authorization: `Bearer ${token}` } }, {
          withCredentials: true,
        })
        history.push("/profil")

        setCheck("")
        const ads = await axios.get(`${process.env.REACT_APP_API_BASE_URL}annonce/get`, { headers: { Authorization: `Bearer ${token}` } }, {
          withCredentials: true,
        })
        if (ads.data) {
          setAnnouncement(ads.data)
        }
      }

    } catch (error) {
      console.log(error)
    }
  }






  const renderConfirmation = () => {
    return (
      <div>
        <h3>Voulez-vous vraiment supprimer cette annonce ?</h3>
        <div className={classes.supprimer}>
          <Button
            className={classes.delete}
            onClick={() => supprimer(check)}
          >
            OUI
          </Button>
          <Button
            className={classes.delete}
            onClick={() => setCheck("")}
          >
            NON
          </Button>
        </div>
      </div>

    );
  };

  return (
    <div>

      <Container component="main" maxWidth="xs">
        {check ? (
          renderConfirmation()
        ) : (
          <div>
            <div className={classes.profile}>

              <FormFormik
                initialValues={{
                  title: info.title,
                  category: info.category,
                  flowerPot: info.flowerPot,
                  delivery: info.delivery,
                  priceOrigin: info.priceOrigin,
                  description: info.description,
                  stock: info.stock,
                  validity: info.validity

                }}
                // pour modifier le profil
                // validationSchema={validationSchema}
                onSubmit={(form) => {
                  axios
                    .patch(
                      `${process.env.REACT_APP_API_BASE_URL}annonce/update/${id}`,
                      form, { headers: { Authorization: `Bearer ${token}` } },
                      {
                        withCredentials: true,
                      }
                    )

                  setInfo(form)
                  history.push("/profil")

                }}
              >
                <br />
                <br />

                <Typography component="h1" variant="h5" style={{ textAlign: "center", marginTop: "30px" }}>
                  Modifier votre annonce
                </Typography>
                <p>Title</p>
                <FormField name="title" placeholder="Title" type="text" variant="outlined" />
                <p>Catégorie</p>
                <FormField name="category" placeholder="Catégorie" type="select" variant="outlined" select style={{ width: "220px" }}  >

                  <MenuItem value={"Plantes d'intérieur"}>Plantes d'intérieur</MenuItem><br />
                  <MenuItem value={"Cactus et plantes d'extérieur"}>Cactus et plantes d'extérieur</MenuItem><br />
                  <MenuItem value={"Potager et arbres fruitiers"}>Potager et arbres fruitiers</MenuItem><br />
                  <MenuItem value={"Plantes carnivores"}>Plantes carnivores</MenuItem><br />
                  <MenuItem value={"Graines et bulbes"}>Graines et bulbes</MenuItem><br />
                  <MenuItem value={"Plantes d'extérieur"}>Plantes d'extérieur</MenuItem><br />
                  <MenuItem value={"Autres plante"}>Autres plante</MenuItem><br />
                  <MenuItem value={"Accéssoires"}>Accéssoires</MenuItem><br />
                </FormField>
                <p>Stock</p>
                <FormField name="stock" placeholder="Stock" type="text" variant="outlined" />
                <p>Pot</p>
                <FormField name="flowerPot" placeholder="Flowerpot" type="text" variant="outlined" select >
                  <MenuItem value={"oui"}>Oui</MenuItem><br />
                  <MenuItem value={"non"}>Non</MenuItem> </FormField>
                <p>Livraison</p>
                <FormField name="delivery" placeholder="Delivery" type="text" variant="outlined" select ><MenuItem value={"oui"}>Oui</MenuItem><br />
                  <MenuItem value={"non"}>Non</MenuItem> </FormField>
                <p>Prix souhaité</p>
                <FormField name="priceOrigin" placeholder="Priceorigin" type="text" variant="outlined" />
                <p>Prix définitif</p>
                <FormField name="priceWanted" placeholder={price} type="text" variant="outlined" disabled />
                <p>Description</p>
                <FormField name="description" placeholder="Description" type="text" variant="outlined" />
                <p>Durée de l'annonce</p>
                <FormField name="validity" placeholder="validité" type="text" variant="outlined" />

                <ButtonFormik className={classes.button} title="Modifier mon Annonce" type="submit" />


                <Button className={classes.button} onClick={() => setCheck(id)}>
                  <DeleteIcon />
                </Button>

              </FormFormik>


            </div>
          </div>
        )}</Container>

    </div>
  )
}