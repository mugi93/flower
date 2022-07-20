// Bouton utilser dans pour la partie Connexion

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useFormikContext } from "formik";

const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "45px",
        backgroundColor: "#33FF93",
        color: "black",
        width: "19%",
        height: "50px",
        border: "none",
        outline: "none",
        shadow: "none",
        marginTop: "20px",
        textTransform: "uppercase",
        "&:hover": {
            backgroundColor: "#1CAB2D",
        },
        [theme.breakpoints.down("sm")]: {
            width: "29%",
            marginLeft: "22px"


        },
        [theme.breakpoints.down("xs")]: {
            width: "38%",
            marginLeft: "40px"


        },

    },
}));

export default function ButtonFormik({ title }) {
    const classes = useStyles();
    const { handleSubmit } = useFormikContext();

    return (
        <button className={classes.button} onClick={handleSubmit}>
            {title}
        </button>
    );
}
