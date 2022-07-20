// FOOTER

import { Card } from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles((theme) => ({
  footer: {
    fontFamily: "Lust Regular",
    display: "flex",
    justifyContent: "space-between",
    marginTop: "15px",
    marginRight: "20px",
    marginLeft: "15px",
    [theme.breakpoints.down("sm")]: {
      display: "block",
      margin: "auto",
      marginLeft: "2%"
    },
  },
  flowerlife: {
    fontFamily: "Lust Regular",
    display: "flex",
    flexDirection: "column",
  },
  decouvrir: {
    fontFamily: "Lust Regular",
    display: "flex",
    flexDirection: "column",

  },
  savoir: {
    fontFamily: "Lust Regular",
    display: "flex",
    flexDirection: "column",

  },
  legal: {
    fontFamily: "Lust Regular",
    display: "flex",
    flexDirection: "column",

  },
  card: {
    backgroundColor: "#F5F5F5", position: "absolute", left: 0, right: 0, height: "280px",
    [theme.breakpoints.down("sm")]: {
      height: "650px",

    },
  }

}));


export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Card className={classes.card}>
        <div className={classes.footer}>

          <div className={classes.flowerlife}>
            <h4>PLANT&FLOWER</h4>
            <p>Echanger vos végétaux préférés partout en france</p>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <img
                style={{ width: "30px", height: "30px", marginRight: "15px" }}
                src={"/logo_fb.png"}
                alt="Logo FB"
              />
              <img
                style={{ width: "30px", height: "30px" }}
                src="/logo_insta.png"
                alt="Logo Insta"
              />

            </div>
          </div>

          <div className={classes.decouvrir}>
            <div style={{ fontFamily: "Lust Regular" }}> </div>
            <h4>DÉCOUVRIR</h4>
            <a style={{ color: "#4C9A62", textDecoration: "none", marginBottom: "15px" }} href="/" variant="text">
              Rechercher son végétal
            </a>
            <a style={{ color: "#4C9A62", textDecoration: "none", marginBottom: "15px" }} href="/connexion" variant="text">
              Connexion
            </a>
            <a style={{ color: "#4C9A62", textDecoration: "none", marginBottom: "15px" }} href="/inscription" variant="text">
              Inscription
            </a>
          </div>


          <div className={classes.savoir}>
            <h4>EN SAVOIR PLUS</h4>
            <a style={{ color: "#4C9A62", textDecoration: "none", marginBottom: "15px" }} href="/story" variant="text">
              Notre histoire
            </a>
            <a style={{ color: "#4C9A62", textDecoration: "none", marginBottom: "15px" }} href="/contact" variant="text">
              Contact
            </a>
            <a style={{ color: "#4C9A62", textDecoration: "none", marginBottom: "15px" }} href="/faq" variant="text">
              F.A.Q
            </a>
          </div>



          <div className={classes.legal}>
            <h4>LÉGAL</h4>
            <a style={{ color: "#4C9A62", textDecoration: "none", marginBottom: "15px" }} href="/legal">Mentions Légales</a>
            <a style={{ color: "#4C9A62", textDecoration: "none", marginBottom: "15px" }} href="/cgu">CGU - CGV</a>
          </div>

        </div>

        <div>
          <h6 style={{ marginLeft: "15px", fontSize: "0.7em", fontFamily: "Lust Regular" }}>© 2021-2022 Tous droits réservés — PLANT&FLOWER.COM</h6>

        </div>
      </Card>
    </div>

  );
}
