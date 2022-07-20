import React from 'react';
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    button: {
        borderRadius: "25px",
        backgroundColor: "#33FF93",
        color: "black",
        width: "35%",
        height: "50px",
        marginTop: "10px",
        marginBottom: "10px",
        marginRight: "10px",
        marginLeft: "30%"
    },
}));

export default function ErreurInscription() {


    return (
        <div>
            <h3 style={{ textAlign: "center" }}>Cette adresse Email existe déjà veuillez vous connecter</h3>
        </div>
    )
}

