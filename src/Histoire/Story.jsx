// Onglet Notre Histoire

import { makeStyles } from "@material-ui/core/styles";
import React from 'react';

const useStyles = makeStyles((theme) => ({
    who: {
        height: 150,
        width: 1200,
        textAlign: "justify",
        [theme.breakpoints.down("sm")]: {
            width: "464px",



        },
    },
    idea: {
        height: 125,
        width: 694,
        textAlign: "justify",
        marginLeft: "500px",
        marginBottom: "5%",
        marginTop: "-29%",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "230%",
            width: "464px",
            marginTop: "10px"


        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: "15%",
            width: "464px",
            marginTop: "10px"


        },

    },
    particulier: {
        height: 200,
        width: 702,
        textAlign: "justify",
        marginLeft: "500px",
        marginBottom: "5%",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "226%",
            marginTop: "32px",
            width: "464px"

        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: "16%",
            marginTop: "32px",
            width: "464px"

        },

    },
    equipe: {
        height: 325,
        width: "920px",
        textAlign: "justify",
        marginBottom: "55%",
        marginLeft: "501px",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "223px",
            marginBottom: "2%",
            marginTop: "50px",
            width: "392px"
        },

        [theme.breakpoints.down("xs")]: {
            marginLeft: "15px",
            marginBottom: "2%",
            marginTop: "50px",
            width: "392px"
        },

    },
    image: {
        width: "436px", height: "400px", marginLeft: "-2%", marginTop: "-7%", position: "absolute",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "-6%",
            marginTop: "-2%",
            width: "275px",
            height: "234px"
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: "-9%",
            marginTop: "-3%",
            width: "275px",
            height: "234px"
        },

    },
    h2: {
        fontSize: "2em", color: "#4C9A62", marginTop: "10%", marginLeft: "500px", fontFamily: "Lust Regular",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "230px",
            marginTop: "27px",
            width: "278px"
        },
        [theme.breakpoints.down("xs")]: {
            marginLeft: "200px",
            marginTop: "27px",
            width: "278px"
        },


    },
    pWho: {
        marginLeft: "500px",
        [theme.breakpoints.down("sm")]: {

            width: "460px",
            marginLeft: "231px",
            marginTop: "18%"

        },
        [theme.breakpoints.down("xs")]: {

            width: "263px",
            marginLeft: "215px",
            marginTop: "1%",

        },

    },
    pPa1: {
        [theme.breakpoints.down("sm")]: {

            width: "464px",


        },
    },
    pPa2: {
        [theme.breakpoints.down("sm")]: {

            width: "464px",
            marginTop: "-2%"

        },
    },
    pF1: {
        marginRight: "500px",
        width: "710px",
        [theme.breakpoints.down("sm")]: {

            width: "464px",



        },
    },
    pF3: {
        width: "702px",
        [theme.breakpoints.down("sm")]: {

            width: "464px",

            marginTop: "-1%"

        },
    },
    pF4: {
        marginRight: "500px", fontFamily: "Lust Regular",
        width: "640px",
        [theme.breakpoints.down("sm")]: {

            width: "464px",
            marginTop: "-12px"

        },
    },
    h2Idea: {
        fontSize: "2em", color: "#4C9A62", marginTop: "78px", fontFamily: "Lust Regular",
        [theme.breakpoints.down("sm")]: {

            marginTop: "74px"

        },

    },
    div: {
        width: "250px",
        [theme.breakpoints.down("sm")]: {

            height: "1074px",
            width: "100px"

        },
    },
    pIdea: {
        [theme.breakpoints.down("sm")]: {

            width: "464px"

        },
    },
    particuliers: {
        [theme.breakpoints.down("sm")]: {

            width: "464px"

        },
    }




}));

export default function Story(props) {
    const classes = useStyles();
    return (
        <div className={classes.div}>
            <div>
                <img
                    className={classes.image}
                    src={"/carte_histoire.png"}
                    alt="carte de france des végétaux"
                />
            </div>
            <div className={classes.who}>
                <h2 className={classes.h2}>Qui sommes-nous ?</h2>
                <p className={classes.pWho}>PLANT&FLOWER est une plate-forme novatrice, qui permet de mettre en relation des particuliers
                    entre eux pour les aider à vendre des végétaux en toute sécurité ainsi que de réduire le gaspillage des végétaux chez les
                    particuliers.</p>
            </div>
            <div className={classes.idea}>
                <h2 className={classes.h2Idea}>Notre idée</h2>
                <p className={classes.pIdea}>Sauver des milliers de végétaux des poubelles en France,<br /> ainsi qu'offrir à tout le monde la possibilité d'acheter des fleurs, des plantes, des bouquets, à prix doux entre particuliers.</p>
            </div>
            <div className={classes.particulier}>
                <h2 style={{ fontSize: "2em", color: "#4C9A62", fontFamily: "Lust Regular" }}>Particuliers</h2>
                <p className={classes.pPa1}>Rejoignez dès maintenant notre communauté PLANT&FLOWER et vendez ou achetez des végétaux partout en France en profitant de l’expédition par Mondial Relay. </p>
                <p className={classes.pPa2}>Besoin de précisions ? Pas de soucis, un service dédié répondra le plus vite possible à toutes vos questions. Pour vous inscrire, rendez-vous dans la barre du menu en haut du site et cliquer sur "INSCRIPTION".</p>
            </div>
            <div className={classes.equipe}>
                <h2 style={{ fontSize: "2em", color: "#4C9A62", fontFamily: "Lust Regular" }}>Le mot du fondateur</h2>
                <p className={classes.pF1}>Véritable épicurien, et passionné par l'univers des végétaux, je décidais fin 2019 de me lancer dans la création d'une aventure entrepreneuriale
                    tout à fait excitante. Lassé de voir l'écologie et les invendus au second plan dans des milliers de foyers français,
                    j'étais convaincu que l'on pouvait remédier en faisant autrement.</p>

                <p className={classes.pF1}>Il fallait proposer une solution par l’intermédiaire d’une plate-forme gratuite
                    qui aiderait les particuliers à se mettre en relation. </p>

                <p className={classes.pF3}>Bouleverser notre façon de consommer, en achetant des végétaux revalorisés
                    et sauvés, préparés avec soin par des particuliers qui comme vous sont de véritables passionnés à travers toute la France.</p>

                <p className={classes.pF4}>Voilà, notre mission, agissons ensemble pour sauver nos végétaux des poubelles !</p>
            </div>
        </div>
    );
}

