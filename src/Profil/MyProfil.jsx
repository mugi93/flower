// visualiser son profil, ajouter une annonce, et renseigner son Iban

import React, { useContext, useEffect, useState } from 'react';
import Picture from './Picture';
import Profil from './Profil';
import { makeStyles } from "@material-ui/core/styles";
import PopupAnnonce from '../Annonce/PopupAnnonce';
import { Button } from '@material-ui/core';
import UserContext from '../Context/UserContext';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AddIcon from '@mui/icons-material/Add';
import { useCookies } from 'react-cookie';
import PopupDelete from './PopupDelete';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendIcon from '@mui/icons-material/Send';

const useStyles = makeStyles((theme) => ({
    annonce: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "25px",
        backgroundColor: "#33FF93",
        width: "20%",
        height: "70px",
        marginTop: "10%",
        marginLeft: "35%",
        [theme.breakpoints.down("sm")]: {

            marginLeft: "50%",


        },
        [theme.breakpoints.down("xs")]: {
            height: "75px",
            marginLeft: "30%",
            marginTop: "15%",
            width: "28%"


        },


    },
    bouton: {
        borderRadius: "45px",
        backgroundColor: "#33FF93",
        color: "black",
        width: "24%",
        height: "50px",
        border: "none",
        outline: "none",
        shadow: "none",
        marginTop: "20px",
        textTransform: "uppercase",
        "&:hover": {
            backgroundColor: "#1CAB2D",
        },
    },
    bouton: {
        marginTop: "-2.6%", height: "36px", width: "260px", backgroundColor: "#FFAE08",
        [theme.breakpoints.down("sm")]: {
            marginTop: "2%",
            height: "36px"
        },
    },
    iban: {
        marginLeft: "550px", marginTop: "-2.1%", marginBottom: "-2%", backgroundColor: "#FFFFFF",
        [theme.breakpoints.down("sm")]: {
            marginLeft: "0px",
            marginBottom: "10%",
            display: "block",
            justifyContent: "column"
        },

    },
    ibic: {
        marginTop: "-2.1%", marginBottom: "-2%", backgroundColor: "#FFFFFF",

        [theme.breakpoints.down("xs")]: {
            display: "block",
            justifyContent: "column"
        },
    }

}));

export default function MyProfil() {
    const [open, setOpen] = React.useState(false);
    const [ouvrir, setOuvrir] = React.useState(false);
    const [infos, setInfos] = useState("");
    const classes = useStyles();
    const history = useHistory();
    const [cookies, setCookies, removeCookies] = useCookies(["token"])
    const token = cookies.token
    const [profil, setProfil] = useState("");
    const [opens, setOpens] = useState(false)
    const [confirm, setConfirm] = useState(false)

    useEffect(async () => {
        try {
            // recuperer les informations de la personne qui c'est connecté
            if (token) {
                const findUser = await axios.get(`${process.env.REACT_APP_API_BASE_URL}create/find`, { headers: { Authorization: `Bearer ${token}` } }, {
                    withCredentials: true,
                })
                if (findUser) {

                    setInfos(findUser.data)
                }
            }
            else {
                history.push("")
            }
        } catch (error) {
            console.log(error)
        }
    }, [])
    // pour l'annonce
    const handleClose = () => {
        setOpen(false);
        window.location.reload()
    };
    // pour l'iban
    const handleClick = () => {
        setOuvrir(false);
    };
    // pour supprimer son profil 
    const handleCloses = () => {
        if (confirm) {
            setOpens(false);
            window.location.reload()
        } else {
            setOpens(false)
        }

    };

    if (infos) {


        return (
            <div component="main" maxWidth="xs">
                <div style={{ display: "flex", marginTop: "1.6%" }}>
                    <Stack sx={{ width: '100%' }} spacing={2}>
                        <Alert variant="filled" severity="warning" style={{ backgroundColor: "#FF9B42", borderRadius: "0px" }}>
                            Attention pour pouvoir vendre vos végétaux, veuillez saisir votre <strong>IBAN</strong> et votre <strong>BIC</strong>.
                            <Box
                                component="form"
                                sx={{ '& > :not(style)': { m: 1, width: '25ch' } }}
                                noValidate
                                autoComplete="off"
                            >
                                <div>

                                </div>
                                <div>

                                </div>
                                <TextField name="iban" placeholder="IBAN" type="text" variant="filled" className={classes.iban} />
                                <TextField name="bic" placeholder="BIC" type="text" variant="filled" className={classes.ibic} />
                                <Button variant="contained" endIcon={<SendIcon />} className={classes.bouton}>
                                    Ajouter mon IBAN / BIC
                                </Button>
                            </Box>
                        </Alert>
                    </Stack>

                </div>
                <div>

                    <Button style={{ backgroundColor: "red" }} onClick={() => setOpens(true)}><AddIcon /> Supprimer</Button>
                    <PopupDelete open={opens} handleClose={handleCloses} confirmation={setConfirm} />

                </div>
                <div style={{ display: "flex", marginTop: "3%" }}>
                    <h2 style={{ display: "flex", marginLeft: "40%", position: "absolute", marginTop: "4%" }}>Bonjour {infos.user.firstname} </h2>
                    <Picture />

                    <div className={classes.annonce}>

                        <Button onClick={() => setOpen(true)}><AddIcon /> Ajouter une annonce</Button>
                        <PopupAnnonce open={open} handleClose={handleClose} />

                    </div>

                </div>
                <div><Profil confirmation={setProfil} /></div>

            </div>
        );
    } else {
        return (
            <>
                <div component="main" maxWidth="xs">



                    <div style={{ display: "flex" }}>

                        <Picture />
                        <div className={classes.annonce}>
                            <Button onClick={() => setOpen(true)}>Ajouter une annonce</Button>
                            <PopupAnnonce open={open} handleClose={handleClose} />

                        </div>
                    </div>
                    {/* <div><Profil /></div> */}
                </div>
            </>
        );
    }
};