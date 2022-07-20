// Router onglet my profil

import * as React from 'react';
import Box from '@mui/material/Box';
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import RestoreIcon from '@mui/icons-material/Restore';
import PersonIcon from '@mui/icons-material/Person';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import History from './History';
import ModifyProfil from './ModifyProfil';
import { Link } from 'react-router-dom';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Trophy from './Trophy';
import MyAnnonce from './MyAnnonce';
import ModifyAnnonce from './ModifyAnnonce';
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-around",


  },
  annonce: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "25px",
    backgroundColor: "#33FF93",
    width: "15%",
    height: "40px",
    marginTop: "10px",
    marginLeft: "75px",
    marginBottom: "100px",
    border: "solid",
  },
  link: {
    color: "#4C9A62", textDecoration: "none", display: "flex", flexDirection: "column", alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "15px"
    },
  }

}))



export default function Profil(props) {
  const classes = useStyles();



  return (
    <div className={classes.root}>

      <Box sx={{ width: 800 }}>
        <Router>

          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "20px", marginTop: "10px" }}>

            <Link to="/profil/annonce" className={classes.link} >
              <LocalFloristIcon />
              Mes annonces
            </Link>

            <Link to="/profil/history" className={classes.link} >
              <RestoreIcon />
              Mon historique
            </Link>

            <Link to="/profil/modify" className={classes.link} >
              <PersonIcon />
              Modifier mon profil
            </Link>

            <Link to="/profil/trophy" className={classes.link} >
              <EmojiEventsIcon />
              Mes récompenses
            </Link>
          </div>

          <div style={{ marginBottom: "50%" }}>
            <Switch>
              {/* pour pas changer de page dans mon profil  */}
              <Route exact path="/profil/annonce" component={MyAnnonce} />
              <Route exact path="/profil/history" component={History} />
              <Route exact path="/profil/modify" component={ModifyProfil} />
              <Route exact path="/profil/trophy" component={Trophy} />
              <Route exact path="/modifyAnnonce/:id" component={ModifyAnnonce} />
            </Switch>
          </div>
        </Router>
      </Box>
    </div>
  );
}


