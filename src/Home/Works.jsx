// Sur l'accueil, partie comment ça fonctionne ?

import { makeStyles } from '@material-ui/core';
import { Card } from '@mui/material';
import React from 'react';

const useStyles = makeStyles((theme) => ({
    container: {
        display: "flex",
        justifyContent: "space-around",
        [theme.breakpoints.down("sm")]: {
            display: "block",
            justifyContent: "column",


        },
    },
    card: {
        height: "500px", width: "350px", boxShadow: "none", backgroundColor: "inherit", fontFamily: "Lust Regular",

        [theme.breakpoints.down("sm")]: {

            width: "473px",
            marginLeft: "20%"

        },
        [theme.breakpoints.down("xs")]: {

            width: "476px",
            marginLeft: "1%"


        },
    },
    p: {
        fontSize: "1.2em", textAlign: "justify",
        [theme.breakpoints.down("sm")]: {

            width: "463px",
            marginLeft: "8px"

        },
        [theme.breakpoints.down("xs")]: {

            width: "452px",
            marginLeft: "8px"

        },
    }
}));

export default function Works() {

    const classes = useStyles();

    return (
        <div style={{ marginBottom: "10%" }}>
            <h1 style={{ color: "#33FF93", fontSize: "3.25em", textAlign: "center", fontFamily: "Lust Regular" }}>Comment ça fonctionne ?</h1>
            <div className={classes.container}>
                <Card className={classes.card}>
                    <img style={{ height: "225px", width: "310px", marginLeft: "auto", marginRight: "auto", display: "block" }} src='/decouvre.png' />
                    <h2 style={{ color: "green", fontSize: "1.45em", textAlign: "center" }}>DÉCOUVRE LES VÉGÉTAUX</h2>
                    <p className={classes.p}>Connecte-toi et trouve les végétaux à vendre entre particuliers dans toute la France. À des prix imbattables ! Tu peux aussi vendre tes végétaux. Inscription gratuite et sans aucuns engagements ! Livraison possible via Mondial Relay !</p>
                </Card>
                <Card className={classes.card}>
                    <img style={{ height: "225px", width: "310px", marginLeft: "auto", marginRight: "auto", display: "block" }} src='/reserve.png' />
                    <h2 style={{ color: "green", fontSize: "1.45em", textAlign: "center", fontFamily: "Lust Regular" }}>RÉSERVE TON VÉGÉTAL</h2>
                    <p className={classes.p}>En quelques clics, trouve et réserve le végétal de tes rêves! Paie en toute sécurité via la solution de paiement sécurisé Mangopay. <a style={{ color: "#4C9A62" }} href="https://www.mangopay.com/fr" target="_blank">(https://www.mangopay.com/fr)</a>, sinon avec ta propre carte bancaire ! Une confirmation de commande ainsi que les coordonnés du vendeur pour ce mettre en relation.</p>
                </Card>
                <Card className={classes.card}>
                    <img style={{ height: "225px", width: "310px", marginLeft: "auto", marginRight: "auto", display: "block" }} src='/receptionne.png' />
                    <h2 style={{ color: "green", fontSize: "1.45em", textAlign: "center", fontFamily: "Lust Regular" }}>RÉCEPTIONNE TON VÉGÉTAL</h2>
                    <p className={classes.p}>Pars à la rencontre du vendeur ou réceptionne directement chez toi le végétal grâce à notre collaboration avec Mondial Relay !  Et voilà, ton végétal et chez toi, le sourire revient !</p>
                </Card>
            </div>
        </div>
    );
}

