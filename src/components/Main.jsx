//import de react obligatoire
import React from 'react';

//export de la classe pour pouvoir l'importer plus tard
export class Main extends React.Component{
    render(){
        //map de docs, gen du html pour le générer dans la liste du composant
        const docsList = this.props.docsData.map((elementApiItem, index) => {
        return <li key={ index } data-id={ elementApiItem._id }>
                    { elementApiItem.name }

                    {/* Si le datatype est movie, on ajoute les détails */}
                    {this.props.dataType == 'movie' ?
                        <ul className="details">
                            <li>Academy award nominations: { elementApiItem.academyAwardNominations }</li>
                            <li>Academy award wins: { elementApiItem.academyAwardWins }</li>
                            <li>Box office revenue in millions: { elementApiItem.boxOfficeRevenueInMillions }</li>
                            <li>Budget in millions: { elementApiItem.budgetInMillions }</li>
                            <li>Rotten Tomates score: { elementApiItem.rottenTomatesScore }</li>
                            <li>Runtime in minutes: { elementApiItem.runtimeInMinutes }</li>
                        </ul>
                    : null }
                </li>
        });
        
        return (
            <main>
                <section className="container">
                    <h5>Data</h5>
                    <ul>
                        <li className="details">Results : { this.props.total }, Pages : { this.props.pages }, Page : { this.props.page }, Offset : { this.props.offset }, Limit : { this.props.limit }</li>
                        { docsList }
                    </ul>
                </section>
            </main>
        );
    }
}