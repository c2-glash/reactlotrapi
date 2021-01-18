//import de react obligatoire
import React from 'react';

//export de la classe pour pouvoir l'importer plus tard
export class Footer extends React.Component{
    render(){
        return (
            <footer>
                <section className="container">
                    <center><small>Site utilisant l'api disponible sur le site https://the-one-api.dev/</small></center>
                </section>
            </footer>
        );
    }
}