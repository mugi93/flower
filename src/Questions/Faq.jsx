import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({

  faq1: {
    width: "1000px",
    [theme.breakpoints.down("sm")]: {
      width: "774px",


    },
    [theme.breakpoints.down("xs")]: {
      width: "483px",


    },
  },
  faq: {
    width: "1000px",
    [theme.breakpoints.down("sm")]: {
      width: "774px",
      marginTop: "-30px"

    },
    [theme.breakpoints.down("xs")]: {
      width: "483px",
      marginTop: "-30px"

    },
  },
  detail: {
    [theme.breakpoints.down("sm")]: {
      width: "650px",
      marginTop: "-22px"

    },
    [theme.breakpoints.down("xs")]: {
      width: "450px",
      marginTop: "-22px"

    },
  },
  div: {
    margin: "0 auto", width: "1000px", fontFamily: "Lust Regular", height: "1000px",
    [theme.breakpoints.down("sm")]: {
      width: "774px",
      height: "1000px",
      height: "1000px"

    },
    [theme.breakpoints.down("xs")]: {
      width: "483px",
      height: "800px",
      height: "1087px"

    },
  },
  accordion: {
    [theme.breakpoints.down("xs")]: {
      width: "483px",

    },
  },
  typo: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: "10px"

    },
  }

}));

export default function Faq() {
  const classes = useStyles();
  return (
    <div>

      <h1 style={{ color: "#04670C", fontSize: "2.5em", textAlign: "center", fontFamily: "Lust Regular", marginTop: "40px", fontFamily: "Lust Regular" }}>À propos de nous</h1>
      <div className={classes.div}>
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ backgroundColor: "#FFF752" }}
            className={classes.faq1}
          >
            <Typography className={classes.typo}>Qu’est-ce-que Plant&Flower ?</Typography>
          </AccordionSummary>
          <br />
          <AccordionDetails className={classes.detail}>
            <Typography>
              Plant&Flower est une jeune Start-up qui souhaite révolutionner la vente de végétaux entre particuliers. En la rendant sûr par un paiement en ligne sécurisé et en profitant de l’expédition (via Mondial Relay) pour pouvoir vendre des végétaux à travers toute la France. Faites des économies et réduisez considérablement le gaspillage chez vous de vos végétaux !
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ backgroundColor: "#FFF752" }}
            className={classes.faq}
          >
            <Typography className={classes.typo}>Comment utiliser le site ?</Typography>
          </AccordionSummary>
          <br />

          <AccordionDetails className={classes.detail}>
            <Typography>
              Connecte-toi sur notre site, cherche le végétal que tu souhaites.  Découvre les offres et procède à la réservation puis l’achat directement sur notre site via notre solution de paiement sécurisé MANGOPAY, et profite si tu le souhaites de l’expédition via Mondial Relay.. Après confirmation de ta commande, tu recevras les coordonnés du vendeur ainsi que les informations du suivi de colis.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ backgroundColor: "#FFF752" }}
            className={classes.faq}
          >
            <Typography className={classes.typo}>Plant & Flower, c’est gratuit ?</Typography>
          </AccordionSummary>
          <br />

          <AccordionDetails className={classes.detail}>
            <Typography>
              Le site Plant&Flower est un site totalement gratuit pour les particuliers et vendeurs particuliers (pas d’abonnement à payer, ni de frais cachés). Des frais de service sont appliqués pour les utilisateurs clients. Cette commission sert à financer la maintenance du service (hébergement, domaines, équipes, matériel...).
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
        <Accordion className={classes.accordion}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
            style={{ backgroundColor: "#FFF752" }}
            className={classes.faq}
          >
            <Typography className={classes.typo}>La qualité des végétaux :</Typography>
          </AccordionSummary>
          <br />

          <AccordionDetails className={classes.detail}>
            <Typography>
              Tous les particuliers présents sur notre plate-forme sont des amoureux des végétaux comme vous ! Les offres promotionnelles ou « anti-gaspillages » seront détaillées sur l’annonce des végétaux, ainsi à l’aide des photos disponibles, vous pourrez avoir un rendu de votre achat.
            </Typography>
          </AccordionDetails>
        </Accordion>
        <br />
        <br />
      </div>
    </div>
  )
};
