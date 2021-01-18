import React from 'react';
//import des composants
import { Header } from './components/Header';
import { Main } from './components/Main';
import { Footer } from './components/Footer';
//import avant utilisation pour fichier .txt
import keyFile from './apikey.txt'; 

//par défaut sur les livres
let urlBase = 'https://the-one-api.dev/v2/';
let urlFetch = '';
let apiKeyVar = '';

export class LotrApiCall extends React.Component{
    state = {
        apiKey : '',           //clé api 
        apiData : [],          //data liste items
        apiItems : [],         //data items
        apiIdRequest : '',     //id de l'item demandé
        apiRequestResult : '', //data de l'item demandé
    };
    
    menuManagement = () => {
        //recuperation des menuItems
        let menuSelect = document.getElementsByClassName('menuItem');

        //pour chaque element récupéré par le getElementsByClassName
        for(let i = 0; i < menuSelect.length; i++) {
            //creation d'une fonction au click
            menuSelect[i].addEventListener('click', function() {
                //ajout du data-type de l'element cliqué dans urlBase
                urlFetch = urlBase + menuSelect[i].getAttribute('data-type');

                //fonction pour aller fetch les nouvelles données
                fetch(urlFetch, {
                    headers: {
                        'Authorization': 'Bearer ' + apiKeyVar
                    },
                })
                //conversion du json pour le rendre exploitable
                .then(jsonData => jsonData.json())
                //stockage des données exploitables dans le state
                .then(jsonData => {
                    this.setState({
                        apiData : jsonData,
                        apiItems : jsonData.docs,
                    })
                })
            }.bind(this))
        }
    }

    componentDidMount() {
        //fetch de la key api
        fetch(keyFile)
        //conversion du texte pour le rendre exploitable
        .then(keyString => {
            return keyString.text()
        })
        //stockage de la clé dans state puis dans la var apiKeyVar pour utilisation en fonction hors classe
        .then(keyString => {
            this.setState({
                apiKey : keyString,
            })
            apiKeyVar = this.state.apiKey
        })
        /*
        
        //Stockage des données du fetch dans jsonData
        .then(jsonData => {
            //utilisation de l'adresse API de base (urlFetch) + ajout de la key api dans le header
            fetch(urlBase + 'book', {
                headers: {
                    'Authorization': 'Bearer ' + this.state.apiKey
                },
            })
            //conversion du json pour le rendre exploitable
            .then(jsonData => jsonData.json())
            //stockage des données exploitables dans state
            .then(jsonData => {
                this.setState({
                    apiData : jsonData,
                    apiItems : jsonData.docs,
                })
            })
        })*/
    };

    render(){
        const menuManagement = this.menuManagement();
        return(
            <div id="react-lotr-base">
                { menuManagement }
                <Header />
                <Main
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