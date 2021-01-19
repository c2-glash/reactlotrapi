//import de react obligatoire
import React from 'react';

//export de la classe pour pouvoir l'importer plus tard
export class Header extends React.Component{
    render(){
        return (
            <header>
                <section className="container">
                    <h1>React.js LOTR API</h1>
                </section>
                <nav className="container">
                    <ul>
                        <li data-type="book" className="menuItem">Livres<span className="bullNav">&bull;</span></li>
                        <li data-type="movie" className="menuItem">Films<span className="bullNav">&bull;</span></li>
                        <li data-type="character" className="menuItem">Personnages</li>
                    </ul>
                </nav>
            </header>
        );
    }
}