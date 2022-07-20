

import './App.css';
import NavBarre from './Main/NavBarre';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Connexion from './Connected/Connexion';
import Minimal from './Main/Minimal';
import Home from './Home/Home';
import Inscription from './Inscription/Inscription';
import MyProfil from './Profil/MyProfil';
import NotFound from './Main/NotFound.jsx';
import Formulaire from './Contact/Formulaire';
import UserContext from './Context/UserContext';
import React, { useState } from 'react';
import Story from './Histoire/Story';
import Cgu from './Questions/Cgu';
import Faq from './Questions/Faq';
import Mentions from './Questions/Mentions';
import ConfirmMail from './Inscription/ConfirmMail';
import ExpiredMail from './Inscription/ExpiredMail';
import Description from './Home/Components/Description';
import PasswordReset from './Password/PasswordReset';
import ModifyPassword from './Profil/ModifyPassword';
import ModifyAnnonce from './Profil/ModifyAnnonce';





export default function App() {
  const [connectedUser, setConnectedUser] = useState({});
  // state pour changer la nav barre apres qu'on soit connecter 
  const [connexion, setConnexion] = useState(false);

  return (

    <div>
      <UserContext.Provider value={{ connectedUser, setConnectedUser }}>
        <Router>
          <NavBarre connect={connexion} />
          {/* <Annonce /> */}
          <Switch>
            {/* pour l' accueil  */}
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/annonce/:id" component={Description} />
            <Route exact path="/story" component={Story} />

            {/* connexion */}
            <Route exact path="/connexion">
              <Connexion connect={setConnexion} />
            </Route>

            {/* inscription */}
            <Route exact path="/inscription" component={Inscription} />
            <Route exact path="/mail" component={ConfirmMail} />
            <Route exact path="/passwordReset/:user" component={PasswordReset} />
            <Route exact path="/expiremail" component={ExpiredMail} />

            {/* profil  */}
            <Route exact path="/profil" component={MyProfil} />
            <Route exact path="/profil/annonce" component={MyProfil} />
            <Route exact path="/profil/history" component={MyProfil} />
            <Route exact path="/profil/modify" component={MyProfil} />
            <Route exact path="/profil/trophy" component={MyProfil} />
            <Route exact path="/modifyAnnonce/:id" component={MyProfil} />
            <Route exact path="/modifyPass" component={ModifyPassword} />
            {/* <Route exact path="/profil/modify/:id" component={MyProfil} /> */}

            {/* nave barre */}
            <Route exact path="/contact" component={Formulaire} />
            <Route exact path="/faq" component={Faq} />
            <Route exact path="/cgu" component={Cgu} />
            <Route exact path="/legal" component={Mentions} />
            <Route exact path="*" component={NotFound} />


          </Switch>
          <Minimal />
        </Router>

      </UserContext.Provider>
    </div>
  );
}

