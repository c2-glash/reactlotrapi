import React from 'react';
//import des composants
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
//import avant utilisation pour fichier .txt
import keyFile from './apikey.txt'; 

//par défaut sur les livres
let urlBase = 'https://the-one-api.dev/v2/';
//l'endpoint de l'api à accéder
let apiEndpoint = '';
//url complete pour faire la requete vers l'api
let urlFetch = '';

export class LotrApiCall extends React.Component{
    state = {
        apiKey : '',           //clé api 
        apiDataType : '',      //type de données recherchées (endpoint api)
        apiData : [],          //data liste items
        apiItems : [],         //data items
        apiIdRequest : '',     //id de l'item demandé
        apiRequestResult : '', //data de l'item demandé
    };
    
    //gestion menu et récupération des données de l'API en fonction du menu item cliqué
    menuManagement = () => {
        //recuperation des menuItems
        let menuSelect = document.getElementsByClassName('menuItem');

        //pour chaque element récupéré par le getElementsByClassName
        for(let i = 0; i < menuSelect.length; i++) {
            //creation d'une fonction au click
            menuSelect[i].addEventListener('click', function() {
                //recuperation de l'apiEndPoint
                apiEndpoint = menuSelect[i].getAttribute('data-type');
                //generation de l'url complete avec urlBase + apiEndPoint + tri par ordre alphabétique
                urlFetch = urlBase + apiEndpoint + '?sort=name:asc';
                //fonction pour aller fetch les nouvelles données
                fetch(urlFetch, {
                    headers: {
                        'Authorization': 'Bearer ' + this.state.apiKey
                    },
                })
                //conversion du json pour le rendre exploitable
                .then(jsonData => jsonData.json())
                //stockage des données exploitables dans le state
                .then(jsonData => {
                    this.setState({
                        apiDataType : apiEndpoint,
                        apiData : jsonData,
                        apiItems : jsonData.docs,
                    })
                })
            }.bind(this))
        }
    }

    //au chargement de la page : 
    componentDidMount() {
        //fetch de la key api
        fetch(keyFile)
        //conversion du texte pour le rendre exploitable
        .then(keyString => {
            return keyString.text()
        })
        //stockage de la clé dans state
        .then(keyString => {
            this.setState({
                apiKey : keyString,
            })
        })
    };

    render(){
        const menuManagement = this.menuManagement();
        return(
            <div id="react-lotr-base">
                { menuManagement }
                <Header />
                <Main
                    dataType =  { this.state.apiDataType }
                    total =     { this.state.apiData.total }
                    limit =     { this.state.apiData.limit }
                    offset =    { this.state.apiData.offset }
                    page =      { this.state.apiData.page }
                    pages =     { this.state.apiData.pages }
                    docsData =  { this.state.apiItems }
                ></Main>
                <Footer />
            </div>
        )
    }
}