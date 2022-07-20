import React from "react"
import { Button, makeStyles } from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "25px",
        fontSize: "large",
        backgroundColor: "#62A675",
        color: "black",
        width: "13%",
        height: "30px",
        marginLeft: "43%",
        marginBottom: "23%",
        marginTop: "-923px",
        [theme.breakpoints.down("sm")]: {

            width: "19%",
            marginTop: "-450px",
            marginBottom: "13%",

        },
        [theme.breakpoints.down("xs")]: {

            width: "28%",
            marginTop: "-338px",
            marginLeft: "37%"

        },

    },
}))
export default function Erreur() {
    const classes = useStyles();
    return (
        <div>
            <div style={{ textAlign: "center", marginTop: "5%", marginBottom: "50%" }}>
                <h3>Une erreur c'est produit veulliez recommencer </h3>
            </div>
            <Button className={classes.button} href="/inscription">Inscription</Button>
        </div>
    )
}