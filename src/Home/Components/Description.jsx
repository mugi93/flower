// Après avoir cliqué sur l'annonce en page d'acceuil, nous pouvons visualiser l'annonce sur une autre page

import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Card, CardActionArea, CardContent, Typography } from "@material-ui/core";
import { useParams } from 'react-router-dom';
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    color: "black",
    width: "14%",
    height: "50px",
    marginLeft: "616px",
    marginBottom: "40px",
    marginTop: "-2px",
    [theme.breakpoints.down("sm")]: {
      width: "17%",
      marginTop: "-3px",
      marginLeft: "327px"
    },
    [theme.breakpoints.down("xs")]: {
      width: "28%",
      marginTop: "-3px",
      marginLeft: "175px"
    },

  },
  root: {
    width: 324,
    height: 529,
    margin: 30,
    display: "flex",
    marginLeft: "auto",
    marginRight: "auto"
  },

  content: {
    backgroundColor: "#F5F5F5",
    height: 246,

  },
  image: {
    textAlign: "center",
    paddingLeft: "23px"
  }
}));

export default function Description() {
  const classes = useStyles();
  const [info, setInfo] = useState([]);
  const photos = info.photoA;
  const { id } = useParams();

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

  return (
    <div>

      <Card className={classes.root}>
        <CardActionArea>
          <div className={classes.contain}>
            <img
              className={classes.image}
              src={
                info.photoA && photos.length > 0 ? photos[0] : "/flower.png"
              }
            />
          </div>
          <CardContent className={classes.content}>
            <Typography className={classes.title} style={{ marginBottom: "5px" }}>Végétaux : {info.title}</Typography>
            <Typography className={classes.title} style={{ marginBottom: "5px" }}>Catégorie : {info.category}</Typography>
            <Typography className={classes.description} style={{ marginBottom: "10px" }}>Description : {info.description}</Typography>
            <Typography className={classes.price} style={{ marginBottom: "5px" }}>
              Prix : {info.priceWanted} €
            </Typography>
            <Typography className={classes.ville} style={{ marginBottom: "5px" }}>Ville : {info.country}</Typography>
            <Typography className={classes.delivery} style={{ marginBottom: "5px" }}>
              Livraison : {info.delivery}
            </Typography>
            <Typography className={classes.ville}>
              Validité : {info.validity}
            </Typography>
            <Typography className={classes.ville}>
              Quantité : {info.stock}
            </Typography>
          </CardContent>

        </CardActionArea>
      </Card>
      <Button className={classes.button}>Acheter</Button>
    </div>
  );
}
