
import React from 'react';
import { makeStyles } from "@material-ui/core/styles";


const useStyles = makeStyles((theme) => ({
    infos:{
        
        display: "flex",
        flexDirection: "column",
        textAlign: "justify",
        margin: "0 auto",
        width: "1000px",
        marginTop: "10px",
    },
    preambule:{
        
        display: "flex",
        flexDirection: "column",
        textAlign: "justify",
        margin: "0 auto",
        width: "1000px",
        marginTop: "10px",
    },
    fonction:{
        
        display: "flex",
        flexDirection: "column",
        textAlign: "justify",
        margin: "0 auto",
        width: "1000px",
        marginTop: "10px",
    },
    achat:{
        
        display: "flex",
        flexDirection: "column",
        textAlign: "justify",
        margin: "0 auto",
        width: "1000px",
        marginTop: "10px",
    },
    direct:{
        
        display: "flex",
        flexDirection: "column",
        textAlign: "justify",
        margin: "0 auto",
        width: "1000px",
        marginTop: "10px",  
    }
}));

export default function Cgu() {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.infos}>
                <h1 style={{color: "#4C9A62", textAlign:"center"}}>Conditions Générales d’Utilisation (CGU) </h1>
                <h3>Informations légales</h3>
                <p>
                Le site Internet www.plantetflower.com, ci-après dénommé « plantetflower.com » propose un service de dépôt et de consultation de petites annonces destinées à la vente de végétaux entre particuliers sur Internet plus spécifiquement destiné aux particuliers.<br/><br/>
                L'accès au site, sa consultation et son utilisation sont subordonnés à l'acceptation sans réserve des présentes Conditions Générales d'Utilisation de plantetflower.com<br/><br/>
                Le site est édité par PLANT & FLOWER SAS au capital de 1000 euros, immatriculée au registre du commerce et des sociétés de BORDEAUX sous le numéro 888834637.<br/> Siège social : 46 RUE MONSARRAT 33000 BORDEAUX<br/>
                Le Directeur de Publication de plantetflower.com est Monsieur Erwann Huet.
                </p>
                <p>
                Pour les Réquisitions judiciaires et les Droits de communication, merci de nous faire parvenir le droit de communication (sur papier à en-tête daté, signé et tamponné) ou la réquisition (datée, signée et tamponnée) précisant la référence de l'annonce, l'adresse email de l'annonceur et/ou son numéro de téléphone, en pièce jointe par mail à contact@plantetflower.com (le délai de réponse est d'environ 24h les jours ouvrés).
                La référence de l'annonce est le numéro figurant dans l'adresse internet de la page de présentation de l'annonce.
                </p>
                <p>
                Nous vous transmettrons les informations demandées dans les meilleurs délais. Ces recherches sont effectuées à titre gracieux.
                Pour simplifier nos procédures, merci de bien vouloir indiquer dans votre réquisition l'adresse email à laquelle vous faire parvenir notre réponse.
                </p>
            </div>
            <div className={classes.preambule}>
                <h3>Préambule</h3>
                <p>
                Chacun des termes mentionnés ci-dessous aura dans les présentes Conditions Générales d'Utilisation du Service PLANT & FLOWER SAS (ci-après dénommées les " CGU ") la signification suivante :
                </p>
                <li>
                Achat Direct : permet à l’Acheteur d’acheter, via le Service de Paiement Sécurisé, le Bien au prix indiqué dans l’Annonce du Vendeur en cliquant sur “Acheter” depuis l’Annonce et ainsi d’accepter directement l’offre du Vendeur. L’Achat Direct, pour les Vendeurs Particuliers, est disponible dans la catégorie principale que sont les végétaux.
                </li>
                <br/>
                <li>
                Acheteur : désigne tout Utilisateur personne physique majeure titulaire d’un Compte Personnel qui achète ou souhaite acheter un ou plusieurs Biens sur le Site à un Vendeur.
                </li>
                <br/>
                <li>
                Annonce : désigne l'ensemble des éléments et données (visuelles, textuelles, sonores, photographies), déposé par un Annonceur sous sa responsabilité éditoriale, en vue d'acheter, de louer ou de vendre un bien ou de proposer ou de rechercher un service ou un emploi et diffusé sur le Site et les Applications.
                </li>
                <br/>
                <li>
                L'Annonceur "Particulier" : qui s'entend de toute personne physique majeure, agissant exclusivement à des fins privées établie en France (exclus les DOM à l'exclusion de Mayotte et des COM) et ayant déposé et mis en ligne une Annonce à partir du Site Internet, et/ou des Applications. Tout Annonceur Particulier doit impérativement être titulaire d’un Compte Personnel pour déposer et gérer sa ou ses Annonces.   
                </li>
                <br/>
                <li>
                Bien : désigne tout produit dont la vente n’est pas interdite par la réglementation française applicable ni par les règles du Site et qui est proposé à la vente par le Vendeur sur le Site via le Service de Paiement Sécurisé.
                </li>
                <br/>
                <li>
                Bon d’Envoi : désigne l’étiquette d’envoi prépayée générée automatiquement par Mondial Relay, portant l’adresse du point relais choisi par l’Acheteur lors de l’acceptation de l'Offre de Vente par ce dernier. Cette étiquette doit être collée sur le Colis par le Vendeur.
                </li>
                <br/>
                <li>
                Colis : désigne le paquet précautionneusement emballé par le Vendeur, conformément aux conditions d’admission des colis de Mondial Relay  sur lequel est collé le Bon d’Envoi pour le Service de Livraison Mondial Relay, les Biens achetés par l’Acheteur via le Service de Paiement Sécurisé, destiné à être envoyé via le Service de Livraison.
                </li>
                <br/>
                <li>
                Compte PLANT & FLOWER : fonctionnant comme un compte séquestre il est attribué à chaque Utilisateur utilisant le Service de Paiement Sécurisé pour une Transaction portant sur l’achat/vente d’un végétal. Les fonds crédités sur le Compte d’un Utilisateur ne peuvent être utilisés pour le paiement d’une autre Transaction que celle au titre de laquelle ils ont été crédités (en vue d’un achat ou suite à une vente de Véhicule).
                </li>
                <br/>
                <li>
                Compte Personnel : désigne l'espace gratuit, accessible depuis le Site Internet et les Applications, que tout Annonceur Particulier doit se créer, et à partir duquel il peut diffuser, gérer, visualiser ses Annonces, souscrire à une ou des option(s) payante(s) et acheter des crédits.   
                </li>
                <br/>
                <li>
                Frais de Livraison : désigne selon le Service de Livraison sélectionné les frais d’expédition fixés par PLANT & FLOWER sur la base des tarifs Mondial Relay.    
                </li>
                <br/>
                <li>
                Frais de Service (Protection PLANT & FLOWER) : désigne les frais facturés par LBC France aux Acheteurs ou aux Vendeurs, via le Service de Paiement Sécurisé.   
                </li>
                <br/>
                <li>
                PLANT & FLOWER: désigne la société qui édite et exploite le Site et les Applications : PLANT & FLOWER, SASU au capital de 1000 euros, immatriculée au registre du commerce et des sociétés de BORDEAUX sous le numéro 888834637 , dont le siège social est situé 46 rue monsarrat 33000 Bordeaux.   
                </li>
                <br/>
                <li>
                Notifications : désigne les notifications reçues par les Utilisateurs et les Annonceurs Particuliers et Pro dans le cadre du Service PLANT & FLOWER dans les cas définis à l’article 3.2.2 des présentes CGU. Les Notifications sont uniquement accessibles aux Utilisateurs et aux Annonceurs disposant d’un Compte Personnel.   
                </li>
                <br/>
                <li>
                Offre d'Achat : désigne l'offre émise par un Acheteur à l’égard d’un Vendeur Particulier afin de lui proposer l'achat de son Bien via le Service de Paiement Sécurisé. L’Offre d'Achat doit être émise depuis l'Annonce du Vendeur Particulier et/ou depuis la conversation avec le Vendeur Particulier dans la Messagerie et contenir le prix d'achat du Bien et le type d’échange (en main propre ou livraison). L'Offre d'Achat peut être annulée par l’Acheteur tant que le Vendeur Particulier ne l’a pas acceptée.   
                </li>
                <br/>
                <li>
                Offre de Vente : désigne l'Offre par un Vendeur Particulier à l’égard d’un Acheteur afin de lui proposer la vente de son Bien via le Service de Paiement Sécurisé. L'Offre de Vente doit être émise depuis la Messagerie du Vendeur Particulier et contenir le prix de vente du Bien, le type d’échange (en main propre ou livraison) et les coûts de livraison du Bien. L'Offre de Vente peut être annulée par le Vendeur Particulier tant que l’Acheteur ne l’a pas acceptée et n’a pas procédé au paiement du prix du Bien.   
                </li>
                <br/>
                <li>
                Remise en main propre : option proposée au Vendeur Particulier lorsqu’il dépose son Annonce et qui peut être sélectionnée par l’Acheteur, dans le cadre de l’Achat Direct, en vue de se faire remettre le Bien en main propre par le Vendeur Particulier, faisant ainsi l’économie du montant des Frais de livraison. La Remise en main propre, pour les Vendeurs Particuliers, est disponible pour tous produits vendus sur le site www.plantetflower.com   
                </li>
                <br/>
                <li>
                Service de Livraison : Le Service de Livraison Mondial Relay désigne le service intégré optionnel d’envoi, de transport et de livraison, depuis et à destination de la France métropolitaine, intégré proposé par le partenaire de PLANT & FLOWER, Mondial Relay, à la charge de l’Acheteur, permettant au Vendeur, Particulier ou Professionnel, d’envoyer le Bien vendu dans le cadre d’une Transaction via le Service de Paiement Sécurisé et dont le transport n’est pas interdit par Mondial Relay. Le Service de Livraison est disponible pour tous les végétaux vendus sur notre site.
                </li>
                <br/>
                <li>
                Service de Paiement Sécurisé : désigne le service de paiement en ligne mis à disposition du Vendeur, de l’Acheteur sur tous les produits vendus sur notre site www.plantetflower.com 
                </li>
                <br/>
                <li>
                Service PLANT & FLOWER : désigne les services PLANT & FLOWER mis à la disposition des Utilisateurs et des Annonceurs sur le Site Internet et les Applications tels que décrits à l'article 2 des présentes CGU.
                </li>
                <br/>
                <li>
                Site : désigne le site internet exploité par PLANT & FLOWER accessible principalement depuis l'URL www.plantetflower.com et permettant aux Utilisateurs et aux Annonceurs d'accéder via internet au Service PLANT & FLOWER  décrit à l'article 2 des présentes CGU.
                </li>
                <br/>
                <li>
                Utilisateur : désigne tout visiteur, ayant accès au Service PLANT & FLOWER via le Site et les Applications et consultant le Service PLANT & FLOWER, accessible depuis les différents supports.
                </li>
                <br/>
                <li>
                Transaction : désigne les transactions qui transfèrent la propriété d’un Bien d’un Vendeur à un Acheteur, à compter de la validation du paiement et la réception du Bien par l’Acheteur, en vertu du contrat de vente conclu entre eux via l’utilisation du Service de Paiement Sécurisé.
                </li>
                <br/>
                <li>
                Vendeur : désigne tout Annonceur Particulier ou Professionnel qui propose un ou plusieurs Biens à la vente et choisit d’utiliser le Service de Paiement Sécurisé.
                </li>
                <br/>
                <li>
                Vendeur Particulier : Annonceur Particulier, disposant d’un Compte Personnel qui propose un ou plusieurs Biens à la vente et choisit d’utiliser le Service de Paiement Sécurisé.
                </li>
                <br/>
                <p>
                Utilisation du site www.plantetflower.com
                </p>
                <p>
                Tout Utilisateur – tout Annonceur déclare être informé qu’il devra, pour accéder au Service PLANT & FLOWER, disposer d’un accès à l’Internet souscrit auprès du fournisseur de son choix, dont le coût est à sa charge, et reconnaît que :
                </p>
                <br/>
                <li style={{marginLeft: "50px"}}>
                La fiabilité des transmissions est aléatoire en raison, notamment, du caractère hétérogène des infrastructures et réseaux sur lesquelles elles circulent et que, en particulier, des pannes ou saturations peuvent intervenir.
                </li>
                <br/>
                <li style={{marginLeft: "50px"}}>
                Il appartient à l’Annonceur de prendre toute mesure qu’il jugera appropriée pour assurer la sécurité de son équipement et de ses propres données, logiciels ou autres, notamment contre la contamination par tout virus et/ou de tentative d’intrusion dont il pourrait être victime.
                </li>
                <br/>
                <li style={{marginLeft: "50px"}}>
                Tout équipement connecté au Site est et reste sous l’entière responsabilité de l’Annonceur, la responsabilité de PLANT & FLOWER  ne pourra pas être recherchée pour tout dommage direct ou indirect qui pourrait subvenir du fait de leur connexion au Site Internet.
                </li>
                <br/>
                <p>
                L’Annonceur s’engage, le cas échéant, à respecter et à maintenir la confidentialité des Identifiants de connexion à son Compte Personnel et reconnaît expressément que toute connexion à son Compte Personnel ainsi que toute transmission de données depuis son Compte Personnel sera réputée avoir été effectuée par l’Annonceur.
                </p>
                <p>
                L'Annonceur est informé et accepte que pour des raisons d'ordre technique, son Annonce ne sera pas diffusée instantanément après son dépôt sur le Site et les Applications.
                </p>
                <p>
                L'Annonceur est informé qu'en publiant son Annonce sur le Site, celle-ci est susceptible d'être partagée par tout Utilisateur et/ou tout Annonceur sur le réseau social Facebook, via le bouton de partage concerné intégré dans les pages.
                </p>
                <p>
                Toute annonce publiée sera diffusée sur le Site et les Applications.
                </p>
                <p>
                Tout annonceur est informé que PLANT & FLOWER, sa société mère et ses sociétés sœurs sont susceptibles d’éditer des services de petites Annonces dédiés à une ou plusieurs catégories de dépôt. 
                </p>
                <p>
                Tout annonceur accepte que PLANT & FLOWER, sa société mère et/ou ses sociétés sœurs puissent diffuser ses Annonces sur ces services dédiés, dans la limite de leur durée de vie ou jusqu’à leur suppression.
                </p>
            </div>
            <div className={classes.fonction}>
                <h3>Fonctionnement du site :</h3>
                <p>
                Le Service PLANT & FLOWER propose aux Utilisateurs et aux Annonceurs varie en fonction de la qualité de "Particulier" de l'Annonceur et du support de communication utilisé (Site Internet ou Applications).
                </p>
                <p>
                1 - Fonctionnalités accessibles aux Annonceurs et aux Utilisateurs non logués depuis le Site et les Applications :
                </p>
                <div style={{marginLeft: "50px"}}>
                <li>La consultation de toutes les Annonces diffusées.</li>
                <li>La mise en contact avec les Annonceurs.</li>
                <li>La possibilité de conseiller l'Annonce à un ami.</li>
                <li>Signaler un abus.</li>
                <li>La sauvegarde d'Annonce.</li>
                <li>La géolocalisation des Annonces déposées dans toutes les catégories (uniquement depuis les Applications)</li>
                </div>
                <p>
                2 - Fonctionnalités accessibles depuis le Site et les Applications aux Annonceurs Particuliers logués :
                </p>
                <li style={{marginLeft: "50px"}}>Le dépot d'annonce</li>
                <br/>
                <li style={{marginLeft: "50px"}}>L'accès à l'espace "Mes favoris"</li>
                <br/>
                <li style={{marginLeft: "70px"}}>La sauvegarde d'annonces</li>
                <li style={{marginLeft: "70px"}}>La recherche automatique</li>
                <br/>
                <li style={{marginLeft: "50px"}}>La gestion d'annonce via l'onglet "Mes annonces" du Compte Personnel :</li>
                <br/>
                <li style={{marginLeft: "70px"}}>la suppression d'annonce</li>
                <li style={{marginLeft: "70px"}}>la modification d'annonce</li>
                <li style={{marginLeft: "70px"}}>la géolocalisation du bien</li>
                <li style={{marginLeft: "70px"}}>la souscription d'Option(s) Payante(s) par carte bancaire et/ou par crédits </li>
                <li style={{marginLeft: "70px"}}>l'achat de crédits par carte bancaire (fonctionnalité non disponible depuis les Applications)</li>
                <br/>
                <li style={{marginLeft: "50px"}}>L'accès et la gestion du Compte Personnel</li>
                <br/>
                <li style={{marginLeft: "50px"}}>La gestion (actualisation, modification etc.), à tout moment, des informations personnelles renseignées lors de la création du Compte Personnel :</li>
                <br/>
                <li style={{marginLeft: "70px"}}>Informations obligatoires : nom, prénom, email, mot de passe</li>
                <li style={{marginLeft: "70px"}}>Informations facultatives : civilité, âge, centre d'intérêt, secteur d'activité, numéro de téléphone etc.</li>
                <br/>
                <li style={{marginLeft: "50px"}}>
                L'ajout d'une photographie de profil dans l'onglet "Profil" du Compte Personnel, la possibilité de la modifier et de la supprimer. Celle-ci sera visible par les autres Utilisateurs sur le profil public de l'utilisateur concerné et sur chacune de ses annonces en ligne.
                </li>
                <br/>
                <li style={{marginLeft: "50px"}}>
                La réception de Notifications depuis les Applications dans les cas suivants : Réception de nouveaux messages via la Messagerie
                </li>
                <br/>
                <li style={{marginLeft: "70px"}}>Nouveaux résultats correspondant aux recherches sauvegardées.</li>
                <li style={{marginLeft: "70px"}}>Renouvellement/ prolongation/ expiration de votre (vos) annonce(s).</li>
                <br/>
                <li style={{marginLeft: "50px"}}>
                Le suivi des :
                </li>
                <br/>
                <li style={{marginLeft: "70px"}}>Options payantes souscrites.</li>
                <li style={{marginLeft: "70px"}}>Crédits achetés et utilisés.</li>
                <br/>
            </div>
            <div className={classes.achat}>
                <h3>ACHAT :</h3>
                <p>
                L'Acheteur peut choisir d'utiliser le Service de Paiement Sécurisé en envoyant une Offre d'Achat au Vendeur Particulier en cliquant sur "Acheter" depuis l'Annonce du Vendeur. Il doit être connecté à son Compte Personnel pour envoyer une Offre d'Achat et ne peut envoyer qu'une seule Offre d'Achat à la fois concernant un même Bien.   
                <br/>
                
                L'Acheteur doit compléter le formulaire d'Offre d'Achat en indiquant le prix d'achat. 
                </p>
                <p style={{textDecoration:"underline"}}>
                Annulation d'une Offre d'Achat :
                </p>
                <p>
                Après envoi de l'Offre d'Achat, l'Acheteur a la possibilité d'annuler son Offre tant que le Vendeur Particulier n'a pas accepté l'Offre en cliquant sur "Annuler l'offre" depuis sa Messagerie.
                </p>
                <p style={{textDecoration:"underline"}}>
                Modification d'une Offre d'Achat :
                </p>
                <p>
                L'Acheteur ne peut pas modifier une Offre d'Achat. S'il souhaite apporter des modifications à son Offre d'Achat, l'Acheteur doit l'annuler depuis sa Messagerie si elle n'a pas encore été acceptée par le Vendeur Particulier, puis renvoyer au Vendeur Particulier une nouvelle Offre d'Achat.
                </p>
                <p style={{textDecoration:"underline"}}>
                Envoi de l'Offre de Vente par le Vendeur Particulier
                </p>
                <p>
                Le Vendeur Particulier peut choisir d’utiliser le Service de Paiement Sécurisé en envoyant une Offre de Vente depuis sa conversation avec un potentiel Acheteur dans la Messagerie en cliquant sur "Lancer le Service de Paiement". Le Vendeur Particulier ne peut envoyer qu’une seule Offre de Vente à la fois concernant un même Bien. Le montant total de l'Offre de Vente doit être inférieur à 2500 euros.
                </p>
                <p style={{textDecoration:"underline"}}>
                Vérification d’identité du Vendeur Particulier   
                </p>
                <p>
                Afin de valider l’envoi de son Offre de Vente, le Vendeur Particulier devra renseigner les informations suivantes qui feront l’objet d’une vérification par notre prestataire de paiement :
                </p>
                <li style={{marginLeft: "70px"}}>Ses nom et prénom</li>
                <li style={{marginLeft: "70px"}}>Son adresse postale</li>
                <li style={{marginLeft: "70px"}}>Son adresse email</li>
                <li style={{marginLeft: "70px"}}>Sa date de naissance</li>
                <li style={{marginLeft: "70px"}}>Au-delà d’un certain volume de Transactions, une pièce d’identité en cours de validité (Carte nationale d'identité ou passeport) et un RIB seront demandés au Vendeur Particulier.</li>
                <p>
                Le Vendeur Particulier est seul responsable de l’exactitude des informations renseignées.
                </p>
                <p style={{textDecoration:"underline"}}>
                Formulaire de l'Offre de Vente   
                </p>
                <p>
                Une fois ces informations renseignées, le Vendeur Particulier doit compléter le formulaire d'Offre de Vente en indiquant :
                </p>
                <li style={{marginLeft: "70px"}}>le prix du végétal</li>
                <li style={{marginLeft: "70px"}}>le type d’échange (en main propre ou livraison, étant entendu qu’à ce jour seul le choix de la livraison est possible via le Service de Paiement Sécurisé)</li>
                <li style={{marginLeft: "70px"}}>le mode de livraison (Mondial Relay) </li>
                <li style={{marginLeft: "70px"}}>le coût de livraison du Bien si celui-ci est pris en charge par l’Acheteur.</li>
                <p>Dès validation d’une Offre de Vente par le Vendeur Particulier, ce dernier s’engage à la respecter.</p>
                <p style={{textDecoration:"underline"}}>
                Annulation d’une Offre de Vente   
                </p>
                <p>
                Le Vendeur Particulier a la possibilité d’annuler son Offre de Vente uniquement tant que celle-ci n’a pas été acceptée par l’Acheteur, via le bouton correspondant accessible dans sa conversation avec l’Acheteur sur la Messagerie.
                </p>
                <p style={{textDecoration:"underline"}}>
                Modification d’une Offre de Vente  
                </p>
                <p>Le Vendeur Particulier ne peut pas modifier une Offre de Vente. S’il souhaite apporter des modifications à une Offre de Vente, le Vendeur Particulier doit l’annuler depuis sa Messagerie si elle n’a pas encore été acceptée par l’Acheteur, puis renvoyer à l’Acheteur une nouvelle Offre de Vente.</p>
                <p style={{textDecoration:"underline"}}>
                Acceptation de Vente et Paiement
                </p>
                <p>
                Dès validation de Vente par un Vendeur Particulier, l’Acheteur en est informé par un mail dans sa boite mail.<br/>
                Le traitement du paiement et des données de carte bancaire de l’Acheteur est effectué par notre prestataire de paiement. Afin d’utiliser le Service de Paiement Sécurisé, l’Acheteur déclare avoir pris connaissance et accepté les conditions générales de MangoPay.<br/>
                L’Acheteur est seul responsable de la transmission des données de sa carte de crédit ou de débit.
                Les montants versés par l’Acheteur sont conservés de manière sécurisée sur un compte séquestre via notre prestataire de paiement le temps de la finalisation de la Transaction.<br/>
                L'Acheteur donne mandat à PLANT & FLOWER, seule habilitée à donner ordre au compte séquestre de procéder au paiement au bénéfice du Vendeur Particulier du montant du Bien dès lors que l’Acheteur aura confirmé la bonne réception du Bien ou est réputé l’avoir reçu et accepté.<br/>
                Le Vendeur Particulier peut annuler la transaction tant qu’il n’a pas envoyé le Bien à l’Acheteur.
                </p>
            <br/>
            </div>
            <div className={classes.direct}>
            <h3>ACHAT DIRECT :</h3>
            <p>
            Le choix du Vendeur lors du dépôt de son Annonce d’opter pour le ou les modes de remise de son Bien parmi les Services de Livraison Mondial Relay, La Poste, "Autres moyens de livraison" ou "Remise en main propre" constitue une offre de vente dudit Bien par le Vendeur via le Service de Paiement Sécurisé, pouvant être acceptée par un Acheteur sans qu’il soit nécessaire d’envoyer une Offre de Vente ou une Offre d’Achat.
            </p>
            <p>Afin d’accepter une telle offre de vente, l'Acheteur peut choisir d'utiliser le Service de Paiement Sécurisé en cliquant sur "Acheter" depuis l'Annonce du Vendeur en étant connecté à son Compte Personnel. Avant de procéder au paiement du Bien, d'éventuels Frais de Livraison et Frais de service via le Service de Paiement Sécurisé en ligne, l’Acheteur doit ensuite choisir le mode de remise qu'il souhaite et :</p>
            <li style={{marginLeft: "50px"}}> dans le cas d'une livraison via le Service de Livraison Mondial Relay : choisir son point relais de livraison puis renseigner ses informations d’identité.</li>
            <br/>
            <li style={{marginLeft: "50px"}}> pour tout autre mode de livraison choisi par le Vendeur lors du dépôt de son Annonce : renseigner son identité et son adresse de livraison qui sera transmise au Vendeur pour l'envoi du Bien acheté.</li>
            <br/>
            <li style={{marginLeft: "50px"}}> dans le cas d’une Remise en main propre : convenir d’un rendez-vous avec le Vendeur Particulier via les coordonnés transmis par mail à l’acheteur et au vendeur pour la remise du Bien. Le jour du rendez-vous, l’Acheteur devra se munir d’un téléphone portable disposant d’une connexion Internet et connecté à son Compte Personnel afin d’effectuer les actions nécessaires au sein de la Messagerie.</li>
            <br/>
            <p>
            L’Acheteur est réputé accepter l’offre du Vendeur dès lors qu’il clique sur “Valider” après avoir renseigné son numéro de carte bancaire sur la page de paiement. Le paiement du Bien par l'Acheteur vaut engagement ferme de contracter avec le Vendeur en considération de la description du Bien dans l’Annonce et dans ses éventuels échanges avec le Vendeur.
            </p>
            <p>
            Le traitement du paiement et des données de carte bancaire de l’Acheteur est effectué par notre prestataire de paiement. Afin d’utiliser le Service de Paiement Sécurisé, l’Acheteur déclare avoir pris connaissance et accepté les conditions générales dudit prestataire.
            </p>
            <p>
            L’Acheteur est seul responsable de la transmission des données de sa carte de crédit ou de débit.
            Les montants versés par l’Acheteur sont conservés de manière sécurisée sur un compte séquestre via notre prestataire de paiement le temps de la finalisation de la Transaction.
            </p>
            <p>
            L'Acheteur donne mandat à PLANT & FLOWER, seule habilitée à donner ordre au compte séquestre de procéder au paiement au bénéfice du Vendeur du montant du Bien dès lors que l’Acheteur aura confirmé la bonne réception du Bien ou est réputé l’avoir reçu et accepté.
            </p>
            <p>
            Afin de recevoir le paiement du prix du Bien, le Vendeur devra préalablement avoir renseigné son IBAN, ainsi que les informations suivantes :
            </p>
            <li style={{marginLeft: "50px"}}>Si le Vendeur est un Particulier : il devra renseigner son nom, prénom, adresse postale, adresse email, date de naissance et, le cas échéant, joindre sa pièce d’identité et son RIB.</li>
            <p>
            Le Vendeur peut annuler la transaction tant qu’il n’a pas envoyé le Bien à l’Acheteur.
            Si le Vendeur ne procède pas à l’envoi de son colis et ne confirme pas l'expédition via le mail envoyé dans les trois (3) jours ouvrés suivant le paiement par l’Acheteur, la vente sera automatiquement annulée et l’Acheteur sera remboursé du prix total versé (montant du Bien et Frais de livraison PLANT & FLOWER,  ne pourra être tenue responsable des suites de la transaction et ne sera plus en mesure d’intervenir auprès de l’Acheteur et du Vendeur après annulation automatique de la vente pour non respect du délai d’envoi du colis par le Vendeur).
            </p>
            <p style={{textDecoration: "underline"}}>Réception du Bien dans le cas d'une livraison:</p>
            <p>Afin de sécuriser les Transactions et arotéger les Acheteurs, la somme versée pour l’achat du Bien est conservée, sans frais pour l’Acheteur, de manière sécurisée sur un compte séquestre via notre prestataire de paiement jusqu’à confirmation par l’Acheteur de la réception du Bien. Afin de recevoir le prix du Bien sur son compte bancaire, le Vendeur devra préalablement renseigner son IBAN dans la page "Mes informations personnelles" de son compte PLANT & FLOWER.</p>
            <p style={{textDecoration: "underline"}}>Délai de confirmation de la réception du Bien lorsque le Vendeur est un Particulier</p>
            <p>L’Acheteur a 10 jours, à compter de la confirmation d'expédition du Bien par le Vendeur Particulier, pour confirmer la réception du Bien.
            A défaut de confirmation au terme de ce délai de 10 jours, l’Acheteur sera réputé avoir reçu et accepté le Bien, et le paiement du prix du Bien sera automatiquement transféré sur le compte bancaire du Vendeur Particulier, sous réserve pour ce dernier d'avoir préalablement renseigné son IBAN dans la page "Mes informations personnelles" de son Compte Personnel. Le montant apparaîtra sur le compte bancaire du Vendeur Particulier dans un délai compris entre 3 et 6 jours ouvrés (délais moyens de traitement par notre prestataire de paiement et de traitement bancaire).
            L’Acheteur est tenu d’accepter le Bien dans la mesure où il est conforme à l’Annonce du Vendeur Particulier et à la description éventuelle faite par ce dernier dans le cadre de ses échanges avec l’Acheteur. 
            </p>
            <p>Le défaut de conformité d’un Bien signifie que le Bien ne correspond pas substantiellement à la description faite par le Vendeur Particulier dans l’Annonce et/ou dans le cadre de ses échanges avec l’Acheteur (ex : le Bien n’est pas celui identifié dans l'Offre de de Vente, le Bien est endommagé ou défectueux sans que cela ait été précisé dans l’Annonce du Vendeur Particulier et/ou dans le cadre de ses échanges avec l’Acheteur).</p>
            <p style={{textDecoration: "underline"}}>Contestation du Bien lorsque le Vendeur est un Particulier</p>
            <p>Si l’Acheteur n’a pas reçu le Bien acheté au Vendeur Particulier ou que le Bien reçu par l’Acheteur n’est pas substantiellement conforme à l’Annonce du Vendeur Particulier, l’Acheteur peut, avant l’expiration du délai de 10 jours à compter de la confirmation de l'expédition du Bien, obtenir plus d’informations afin de résoudre son litige directement avec le Vendeur Particulier en cliquant sur “ J’ai reçu un colis ou J’ai un problème” dans sa conversation avec le Vendeur Particulier, puis sur "Que faire en cas de problème ?". Dans le cas où l'Acheteur ne parviendrait pas à résoudre son litige directement avec le Vendeur Particulier, il pourra, à l'expiration d'un délai de 6 jours à compter de la confirmation d'expédition du Bien et ce pour une durée de 4 jours, cliquer sur "Faire intervenir PLANT & FLOWER, " puis remplir le formulaire de litige l'invitant à choisir le motif du litige (article non reçu, non conforme ou endommagé), décrire le problème rencontré et à autoriser PLANT & FLOWER, à consulter ses échanges avec le Vendeur Particulier. La demande d'intervention des équipes PLANT & FLOWER,  ne pourra pas aboutir si l'Acheteur n'autorise pas PLANT & FLOWER,  à consulter ses échanges avec le Vendeur Particulier.</p>
            <br/>
            <p>
            Passé le délai de 10 jours à compter de la confirmation de l'expédition du Bien, aucune contestation de l’Acheteur ne sera recevable et le prix du Bien sera transféré au Vendeur Particulier.
            A compter de l’ouverture du litige et l’intervention des équipes PLANT & FLOWER, l’Acheteur et le Vendeur Particulier s’engagent à apporter leur concours afin de trouver une solution amiable. En l’absence de réponse de l’Acheteur ou du Vendeur Particulier aux sollicitations des équipes PLANT & FLOWER,  ces dernières se réservent le droit de trancher le litige à l’encontre de la partie non diligente.
            </p>
            <p>En outre, dans l’hypothèse où aucune solution amiable n’aurait été trouvée dans un délai de 10 jours à compter de l’intervention des équipes PLANT & FLOWER,, ces dernières se réservent le droit de trancher le litige en faveur de l’Acheteur ou du Vendeur Particulier au regard des éléments en leur possession.</p>
            <p>Il est précisé qu'en cas de réclamation de l’Acheteur dans les délais impartis et dans les cas précités (article non reçu, non conforme ou abîmé), le prix du Bien est conservé sur le compte séquestre pendant le délai d’examen de ladite réclamation par PLANT & FLOWER, ce que le Vendeur Particulier accepte. Le Vendeur Particulier est informé par une notification dans sa Messagerie du fait que l'Acheteur a demandé l'intervention des équipes PLANT & FLOWER, et que son paiement est suspendu jusqu'à la résolution du litige. Il est également invité à autoriser PLANT & FLOWER, à consulter ses échanges avec l'Acheteur en cliquant sur "Autoriser la consultation des échanges" afin de faciliter la résolution du litige et peut contacter PLANT & FLOWER, via le formulaire de contact en choisissant le motif “Paiement Sécurisé” afin de présenter ses observations.</p>
            <p>Les équipes PLANT & FLOWER,  se réservent le droit de demander à tout moment à l’Acheteur et au Vendeur Particulier des photos, vidéos ou tout autre élément permettant de faciliter la résolution du litige.</p>
            <p>A l’issue de l’examen de ladite réclamation, le prix du Bien conservé sur le compte séquestre sera alors transféré en faveur du Vendeur Particulier ou de l’Acheteur.</p>
            <p>PLANT & FLOWER, ne propose pas de conditions de retour du Bien et ne prend pas en charge les frais de retour du Bien.</p>
            <p>La Transaction ayant lieu entre deux particuliers, l’Acheteur ne peut se prévaloir d’un droit de rétractation. Ainsi, l’Acheteur ne pourra pas demander le remboursement ou l’échange du Bien. Toutefois, en cas de non-conformité, l’Acheteur et le Vendeur Particulier sont libres de convenir d’un accord quant aux conditions de retour du Bien. Les frais de port de retour du Bien restent à la charge de l’Acheteur et le retour du Bien se fait sous sa responsabilité.</p>
            <p>Si l'Acheteur effectue un retour au Vendeur Particulier, il est invité à effectuer des photos du Bien avant renvoi rendant visibles le défaut de conformité du Bien.</p>
            <p>En cas de réclamation d'un Acheteur, dans les délais impartis, remettant en cause l’authenticité du Bien reçu, si le Vendeur Particulier n’est pas en mesure de prouver l’authenticité dudit Bien, l’Acheteur s’engage à faire expertiser le Bien auprès d’un professionnel. En cas de contrefaçon avérée, le Vendeur Particulier s'engage à s’acquitter des frais de retour du Bien par l’Acheteur.
            Le Vendeur Particulier et l’Acheteur devront définir ensemble le transporteur de leur choix pour le retour du Bien. Le Bien devra être retourné sous 3 jours ouvrés (uniquement en suivi ou en recommandé), en l’état (ne doit pas avoir été réparé, porté, utilisé ou lavé) et précautionneusement emballé. A défaut, PLANT & FLOWER, décline toute responsabilité.
            </p>
            <p>Le Vendeur Particulier dispose d’un délai de 72 heures à compter de la livraison effective du Bien par le transporteur choisi pour déclarer sa réception via notre formulaire de contact.
            Sans confirmation de réception par le Vendeur Particulier dans le délai de 72 heures et après vérification des informations de suivi du Colis sur le site du transporteur, PLANT & FLOWER, se réserve le droit de procéder au remboursement du prix du Bien à l’Acheteur.
            A la suite de l’accord trouvé entre l’Acheteur et le Vendeur Particulier sur le retour du Bien au Vendeur Particulier, le remboursement de l'Acheteur se fera sous 3 à 8 jours (hors délais de traitement bancaire) à compter de la date de réception du Bien par le Vendeur Particulier.
            </p>
            <p style={{textDecoration: "underline"}}>Remise en main propre du Bien</p>
            <p>Afin de sécuriser les Transactions et protéger les Acheteurs, la somme versée pour l’achat du Bien est conservée, sans frais pour l’Acheteur, de manière sécurisée sur un compte séquestre via notre prestataire de paiement jusqu’à confirmation par l’Acheteur de la remise du Bien, une fois que ce dernier aura déclenché le paiement du Vendeur Particulier. Afin de recevoir le prix du Bien sur son compte bancaire, le Vendeur Particulier devra préalablement renseigner son IBAN dans la page "Mes informations personnelles" de son Compte Personnel. Le Vendeur Particulier a la possibilité d'annuler la Transaction jusqu'à la confirmation de la disponibilité du Bien dans l'onglet Mes Transactions.</p>
            <p>Lors du rendez-vous convenu entre l’Acheteur et le Vendeur Particulier, il appartient à l’Acheteur de vérifier que le Bien est conforme et lui convient, avant de déclencher le paiement du Vendeur Particulier. Une fois le paiement déclenché, l’Acheteur sera réputé avoir accepté le Bien, et le prix du Bien sera automatiquement transféré sur le compte bancaire du Vendeur Particulier, sous réserve pour ce dernier d'avoir préalablement renseigné son IBAN dans la page "Mes informations personnelles" de son Compte Personnel. Le montant apparaîtra sur le compte bancaire du Vendeur Particulier dans un délai compris entre 3 et 6 jours ouvrés (délais moyens de traitement par notre prestataire de paiement et de traitement bancaire).</p>
            <p>L’Acheteur est tenu d’accepter le Bien dans la mesure où il est conforme à l’Annonce du Vendeur Particulier et à la description éventuelle faite par ce dernier dans le cadre de ses échanges avec l’Acheteur. Dans ce cas, l’Acheteur s’engage à confirmer la bonne remise du Bien en cliquant sur le bouton correspondant dans sa conversation avec le Vendeur Particulier dans la Messagerie.
            Le défaut de conformité d’un Bien signifie que le Bien ne correspond pas substantiellement à la description faite par le Vendeur Particulier dans l’Annonce et/ou dans le cadre de ses échanges avec l’Acheteur (ex : le Bien n’est pas celui identifié dans l’Annonce, le Bien est endommagé ou défectueux sans que cela ait été précisé dans l’Annonce du Vendeur Particulier et/ou dans le cadre de ses échanges avec l’Acheteur).
            </p>
            <p>Si le Bien n’était pas conforme, il appartient à l’Acheteur d’annuler la transaction dans sa conversation avec le Vendeur Particulier en cliquant sur “Annuler l’achat” et de confirmer l’annulation. Une fois le paiement du Vendeur Particulier déclenché en cliquant sur “Déclencher le paiement de XX€”, la Transaction est finalisée et aucune contestation de l’Acheteur n’est possible. PLANT & FLOWER, ne pourra être tenue responsable des suites de la transaction et ne sera plus en mesure d’intervenir auprès de l’Acheteur et du Vendeur Particulier après la Remise en main propre du Bien et le déclenchement du paiement par l’Acheteur.</p>
            <p style={{textDecoration: "underline"}}>Frais de Service (Protection PLANT & FLOWER,)</p>
            <p>En contrepartie de l'utilisation du Service de Paiement Sécurisé et de la protection ainsi apportée à l'Acheteur, les Acheteurs devront s'acquitter de Frais de Service, au moment de la finalisation de leur achat en ligne, qui viendront s'ajouter au prix d'achat du Bien convenu avec le Vendeur. Le montant total de ces Frais de Service sera indiqué à l'Acheteur sur le Site avant le paiement en ligne de la Transaction et s'élève à différentes fourchettes de tarifs du Bien convenu entre l'Acheteur et le Vendeur (hors coût d'expédition), avec un minimum de 0,99 euros</p>
            <p>Lorsque le Vendeur opte pour un envoi via le Service de Livraison Mondial Relay, l’Acheteur est invité à choisir son point relais de livraison puis à renseigner ses informations d’identité avant de procéder au paiement du Bien et des Frais de Livraison en ligne via le Service de Paiement Sécurisé.</p>
            <p style={{textDecoration: "underline"}}>Frais de livraison</p>
            <p>Le montant des Frais de livraison varie selon le poids et la catégorie du Bien envoyé.
            Le Service de Livraison est disponible dans toutes les catégories, aux tarifs suivants :
            </p>
            <li style={{marginLeft: "50px"}}>Poids jusqu'à 500 grammes : 2,88 €</ li>
            <li style={{marginLeft: "50px"}}>Poids jusqu'à 1 kg : 4,10 €</li>
            <li style={{marginLeft: "50px"}}>Poids jusqu'à 2 kg : 4,99 €</li>
            <li style={{marginLeft: "50px"}}>Poids jusqu'à 5 kg : 6,50 €</li>
            <li style={{marginLeft: "50px"}}>Poids jusqu'à 10 kg : 10,99 €</li>
            <li style={{marginLeft: "50px"}}>Poids jusqu'à 30kg : 15,10 €</li>
            <p style={{textDecoration: "underline"}}>Envoi du colis</p>
            <p>Une fois le paiement réalisé par l’Acheteur, un Bon d’Envoi est automatiquement adressé par email au Vendeur comportant les instructions d’envoi.
            Le Vendeur s’engage impérativement à suivre les instructions d’envoi qui lui seront communiquées et à envoyer le Colis dans les trois (3) jours ouvrés suivant le paiement par l’Acheteur.
            Dans le cas d’un Achat Direct, si le Vendeur ne procède pas à l’envoi de son Colis dans les trois (3) jours ouvrés suivant le paiement par l’Acheteur, la vente sera automatiquement annulée et l’Acheteur sera remboursé du prix total versé (montant du Bien et Frais de livraison). PLANT & FLOWER ne pourra être tenue responsable des suites de la transaction et ne sera plus en mesure d’intervenir auprès de l’Acheteur et du Vendeur après annulation automatique de la vente pour non respect du délai d’envoi du Colis par le Vendeur.</p>
            <p>Le Vendeur s’engage à emballer convenablement le Colis, en respectant notamment les conditions d’admission des Colis de Mondial Relay, et à coller le Bon d’Envoi sur le Colis avant dépôt du Colis dans le point relais de son choix. A défaut de respecter ces conditions, le Colis pourra être refusé par ledit point relais de dépôt. Par ailleurs, le Vendeur s’engage à utiliser exclusivement le Bon d’Envoi transmis par PLANT & FLOWER pour l’envoi du Colis à l’Acheteur. En cas d’utilisation d’une étiquette d’envoi autre que le Bon d’Envoi adressé au Vendeur par PLANT & FLOWER, les frais d’envoi seront à la charge exclusive du Vendeur et PLANT & FLOWER ne procédera à aucun remboursement.</p>
            <p>L’Acheteur est informé par email par PLANT & FLOWER et par Mondial Relay de la disponibilité de son Colis dans le point relais de livraison choisi, ou en cas de changement, dans le point relais qui lui aura été indiqué par Mondial Relay.</p>
            <p>Le Colis est disponible durant sept (7) jours calendaires, ce délai pouvant aller jusqu'à quatorze (14) jours calendaires, audit point relais de livraison et sera remis contre une pièce d’identité et contre une signature numérisée. Si le Colis n’est pas récupéré, il sera renvoyé au point relais de départ et sera par la suite, disponible durant un délai de dix (10) jours calendaires. A l’issue de ce délai, le Colis sera expédié au Service Expertise de Mondial Relay et sera disponible durant un délai de trente (30) jours. Passé ce délai, Mondial Relay pourra disposer librement du Colis et les Utilisateurs n’auront plus la possibilité de le récupérer.</p>
            <p>Une fois la Transaction validée et la bonne réception du Bien confirmée par l’Acheteur ou l’expiration du délai de 10 jours (voir article 3.5 Délai de confirmation de la réception du Bien), le Vendeur perçoit le prix du Bien conservé sous séquestre et PLANT & FLOWER perçoit les Frais de Livraison.
            Le Service de Livraison Mondial Relay n’est pas disponible pour les Biens dont le montant total (hors Frais de Livraison) excède 399 euros.
            </p>
            <p>Les Utilisateurs s’engagent à prendre connaissance et à accepter les conditions générales de Mondial Relay en cliquant sur le lien suivant : https://www.mondialrelay.fr/envoi-de-colis/conditions-generales-de-vente/</p>
            <li style={{marginLeft: "50px"}}>Pour contacter le Service Client de Mondial Relay, différents moyens sont mis à disposition de l’Utilisateur :</li>
            <li style={{marginLeft: "50px"}}>Pour suivre votre Colis en temps réel : https://www.mondialrelay.fr/suivi-de-colis/</li>
            <li style={{marginLeft: "50px"}}>Pour toute question, contactez l’adresse mail suivante : suividecolis@mondialrelay.fr (temps de réponse 2 jours ouvrés)</li>
            <li style={{marginLeft: "50px"}}>Par téléphone au 09 69 32 23 32 du lundi au vendredi de 9h à 12h et de 14h à 17h30</li>
            <li style={{marginLeft: "50px"}}>Avarie ou perte du colis</li>
            <p>Dans le cadre du Service de Livraison, Mondial Relay engage sa responsabilité en cas de perte du Colis ou d’avarie constatée. En cas d’anomalie constatée quant à l’état du Colis lors de sa réception, l’Acheteur doit impérativement refuser le Colis.
            Dans l’hypothèse d’un Colis perdu, une enquête interne au sein de Mondial Relay est ouverte au dixième jour suivant la dernière mise à jour du statut du Colis sur demande préalable de l’Utilisateur.
            La durée moyenne d’une enquête est de vingt (20) jours.
            </p>
            <p>En cas de perte ou d'avarie (dommage apparent rendant le Colis non livrable à l’Acheteur) constatée, PLANT & FLOWER remboursera l'Acheteur du montant de son bien, sous réserve que ce dernier ait signalé un litige auprès des équipes PLANT & FLOWER entre le 6ème et le 10ème jour à compter de l'expédition du Colis par le Vendeur.
            Passé le délai de 10 jours à compter de la confirmation de l'expédition du Colis par le Vendeur, aucun remboursement ne sera accordé à l'Acheteur.
            En outre, PLANT & FLOWER indemnisera le Vendeur d'une somme pouvant aller jusqu’à vingt-cinq (25) euros maximum par Colis.
            </p>
            <p>
            Dans l’hypothèse où le Colis est déclaré à tort “réceptionné par l’Acheteur”, il appartient à l’Acheteur d’engager une procédure en contestation. Pour ce faire, l’Acheteur doit contacter le Service Client de Mondial Relay dans un délai de trois (3) jours maximum suivant la dernière mise à jour du statut du Colis.
            Le Vendeur s’engage à respecter le Service de Livraison sélectionné et proposé à l’Acheteur, à défaut, la vente pourrait ne pas être finalisée. En outre en cas de litige et en l’absence de confirmation de réception du Bien par l’Acheteur ou en cas d’envoi d’un Bien non conforme à l’Annonce par le Vendeur via le Service de Livraison, PLANT & FLOWER se réserve le droit d’annuler la vente et de procéder au remboursement de l’Acheteur. Dans un tel cas, PLANT & FLOWER se réserve le droit de réclamer au Vendeur le montant correspondant aux Frais de livraison remboursés à l'Acheteur.
            Le Vendeur peut choisir de ne pas recourir au Service de Livraison. En tout état de cause, le Vendeur sera seul responsable de l'expédition du Bien.
            </p>
            <p style={{textDecoration: "underline"}}>Modération des annonces sur le site </p>
            <p>PLANT & FLOWER se réserve le droit de supprimer, sans préavis ni indemnité ni droit à remboursement, toute Annonce qui ne serait pas conforme aux règles de diffusion du Service PLANT & FLOWER et/ou qui serait susceptible de porter atteinte aux droits d'un tiers.</p>
            <p style={{textDecoration: "underline"}}>Engagements communs aux Vendeurs et Acheteurs :</p>
            <p>Le Vendeur et l’Acheteur utilisant le Service de Paiement Sécurisé déclarent :
            être des personnes physiques âgées de 18 ans ou plus et utiliser le Service de Paiement Sécurisé dans le cadre de leurs besoins personnels, non liés à une activité professionnelle (s’agissant des Vendeurs Particuliers), et disposer de l’entière capacité et de tous les droits nécessaires pour réaliser des Transactions sur le Site, assumer l’entière responsabilité des Transactions réalisées sur le Site, notamment l’engagement du Vendeur à vendre le Bien à l’Acheteur et l’engagement de l’Acheteur à payer le Bien acheté au Vendeur.
            </p>
            <p>Par ailleurs, le Vendeur et l’Acheteur s’engagent à :</p>
            <li style={{marginLeft: "50px"}}>Fournir des informations véridiques les concernant,</li>
            <li style={{marginLeft: "50px"}}>Fournir des informations exactes et exhaustives concernant le Bien faisant l’objet d’une Transaction,</li>
            <li style={{marginLeft: "50px"}}>Ne pas proposer à la vente des Biens portant atteinte aux droits de propriété intellectuelle de tiers, notamment des propriétaires de la marque déposée, ou dont la vente est interdite par la réglementation française ou les règles de diffusion de PLANT & FLOWER</li>
            <li style={{marginLeft: "50px"}}>Ne pas usurper l’identité ou le moyen de paiement d’un tiers pour réaliser des Transactions via le Service de Paiement Sécurisé,</li>
            <li style={{marginLeft: "50px"}}>Ne pas utiliser le Service de Paiement Sécurisé en vue de réaliser des Transactions illicites ou des actes frauduleux.</li>
            <p>En cas de suspicion d’une fraude quelconque par un Vendeur ou Acheteur, PLANT & FLOWER se réserve le droit de suspendre immédiatement le compte du Vendeur/Acheteur concerné ainsi que les Transactions en cours.</p>
            <p>Le Vendeur reconnaît qu’il est seul responsable de l’exactitude des informations renseignées à l’étape de vérification de son identité et qu’en cas d’informations inexactes il ne pourra valider l’envoi de son Offre de Vente.
            Il appartient au Vendeur d’expédier le Bien acheté à l’Acheteur dans les plus brefs délais dès l’acceptation par l’Acheteur de l'Offre de Vente. Le Vendeur est seul responsable de la livraison d’un Bien conforme à son Annonce et, en cas de litige, devra démontrer par tous moyens que le Bien a été expédié (numéro de suivi du colis, reçu de paiement de l’envoi, messages échangés via la Messagerie…).
            La responsabilité de PLANT & FLOWER ne pourra en aucun cas être engagée en cas d’absence de livraison du Bien ou en cas de livraison d’un Bien non conforme.
            Le Vendeur et l’Acheteur sont seuls responsables d’organiser les conditions éventuelles de retour du Bien avant le début de la Transaction.
            </p>
            <p>Propriété intellectuelle</p>
            <p>Tous les droits de propriété intellectuelle (tels que notamment droits d'auteur, droits voisins, droits des marques, droits des producteurs de bases de données) portant tant sur la structure que sur les contenus du Site et des Applications et notamment les images, sons, vidéos, photographies, logos, marques, éléments graphiques, textuels, visuels, outils, logiciels, documents, données, etc. (ci-après désignés dans leur ensemble " Eléments ") sont réservés. Ces Eléments sont la propriété PLANT & FLOWER. Ces Eléments sont mis à disposition des Utilisateurs et des Annonceurs, à titre gracieux, pour la seule utilisation du Service PLANT & FLOWER, du Service de Paiement Sécurisé et du Service de Livraison, et dans le cadre d'une utilisation normale de ses fonctionnalités. Les Utilisateurs et les Annonceurs s'engagent à ne modifier en aucune manière les Eléments.
            Toute utilisation non expressément autorisée des Eléments du Site Internet et des Applications entraîne une violation des droits d'auteur et constitue une contrefaçon. Elle peut aussi entraîner une violation des droits à l'image, droits des personnes ou de tous autres droits et réglementations en vigueur. Elle peut donc engager la responsabilité civile et/ou pénale de son auteur.
            </p>
            <p> 
            Il est interdit à tout Utilisateur et Annonceur de copier, modifier, créer une œuvre dérivée, inverser la conception ou l'assemblage ou de toute autre manière tenter de trouver le code source, vendre, attribuer, sous licencier ou transférer de quelque manière que ce soit tout droit afférent aux Eléments.
            Tout Utilisateur et Annonceur du Service PLANT & FLOWER s'engagent notamment à ne pas :
            utiliser ou interroger le Service PLANT & FLOWER, le Service de Paiement Sécurisé et/ou le Service de Livraison pour le compte ou au profit d'autrui ;
            extraire, à des fins commerciales ou non, tout ou partie des informations ou des petites Annonces présentes sur le Service PLANT & FLOWER et sur le Site et les Applications ;
            reproduire sur tout autre support, à des fins commerciales ou non, tout ou partie des informations ou des petites Annonces présentes sur le Service PLANT & FLOWER et sur le Site Internet et les Applications permettant de reconstituer tout ou partie des fichiers d'origine ;
            </p>
            <p>utiliser un robot, notamment d'exploration (spider), une application de recherche ou récupération de sites Internet ou tout autre moyen permettant de récupérer ou d'indexer tout ou partie du contenu du Site Internet et des Applications, excepté en cas d'autorisation expresse et préalable de PLANT & FLOWER copier les informations sur des supports de toute nature permettant de reconstituer tout ou partie des fichiers d'origine.
            Toute reproduction, représentation, publication, transmission, utilisation, modification ou extraction de tout ou partie des Éléments et ce de quelque manière que ce soit, faite sans l'autorisation préalable et écrite de PLANT & FLOWER est illicite. Ces actes illicites engagent la responsabilité de ses auteurs et sont susceptibles d'entraîner des poursuites judiciaires à leur encontre et notamment pour contrefaçon.
            </p>
            <p style={{textDecoration: "underline"}}>Divers</p>
            <p>PLANT & FLOWER se réserve le droit, à tout moment, de modifier ou interrompre l'accessibilité de tout ou partie du Service PLANT & FLOWER et/ou du Site Internet ou des Applications.
            Le fait que PLANT & FLOWER ne se prévale pas à un moment donné de l’une quelconque des dispositions des présentes CGU ne peut être interprété comme valant renonciation à se prévaloir ultérieurement de l’une quelconque desdites conditions.
            PLANT & FLOWER se réserve la possibilité de modifier, à tout moment, en tout ou partie des CGU. Les Utilisateurs et les Annonceurs sont invités à consulter régulièrement les présentes CGU afin de prendre connaissance de changements éventuels effectués. L'Utilisation du Site par les Utilisateurs et les Annonceurs constitue l'acceptation par ces derniers des modifications apportées aux CGU.
            Si une partie des CGU devait s'avérer illégale, invalide ou inapplicable, pour quelque raison que ce soit, les dispositions en question seraient réputées non écrites, sans remettre en cause la validité des autres dispositions qui continueront de s'appliquer entre les Utilisateurs ou les Annonceurs et PLANT & FLOWER . Les présentes CGU sont soumises au droit français.
            En cas de difficultés dans l’application des présentes CGU, l’Utilisateur s’adressera en priorité à PLANT & FLOWER en vue de rechercher une solution amiable avant tout contentieux devant les juridictions compétentes.<br/>
            Conformément aux dispositions du Code de la consommation concernant le règlement amiable des litiges, PLANT & FLOWER adhère au Service du Médiateur du e-commerce de la FEVAD (Fédération du e-commerce et de la vente à distance) dont les coordonnées sont les suivantes : 60 rue de La Boétie – 75008 PARIS – http://www.mediateurfevad.fr. 
            </p>
            </div>
        </div>
    );
}
