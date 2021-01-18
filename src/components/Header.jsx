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
                        <li data-type="book" className="menuItem"><i className="fas fa-book"></i></li>
                        <li data-type="movie" className="menuItem"><i className="fas fa-film"></i></li>
                        <li data-type="character" className="menuItem"><i className="fas fa-users"></i></li>
                    </ul>
                </nav>
            </header>
        );
    }
}