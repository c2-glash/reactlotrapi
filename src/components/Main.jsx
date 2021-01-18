//import de react obligatoire
import React from 'react';

//export de la classe pour pouvoir l'importer plus tard
export class Main extends React.Component{
    render(){
        //map de docs, gen du html pour le générer dans la liste du composant
        const docsList = this.props.docsData.map((elementApiItem, index) => {
        return <li key={ index } data-id={ elementApiItem._id }>
                    { elementApiItem.name }
                </li>
        });
        
        /*const docsListDetails = this.props.docsMovies.map((elementApiItem, index) => {
        return <li key={ index } data-id={ elementApiItem._id }>
                    { elementApiItem.name }
                        <ul className="details">
                            <li>academyAwardNominations: { elementApiItem.academyAwardNominations }</li>
                            <li>academyAwardWins: { elementApiItem.academyAwardWins }</li>
                            <li>boxOfficeRevenueInMillions: { elementApiItem.boxOfficeRevenueInMillions }</li>
                            <li>budgetInMillions: { elementApiItem.budgetInMillions }</li>
                            <li>rottenTomatesScore: { elementApiItem.rottenTomatesScore }</li>
                            <li>runtimeInMinutes: { elementApiItem.runtimeInMinutes }</li>
                        </ul>
                </li>
        });*/

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