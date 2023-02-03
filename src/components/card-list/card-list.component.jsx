import { Component } from "react";
import Card from "../card/card.component";
import './card-list.styles.css';

class CardList extends Component{
    render() {

        console.log(this.props);
        const { monsters } = this.props;
        return (
            <div className="card-list">
                {monsters.map((monster) => (
                    <Card key={monster.id} id={monster.id} name={monster.name} email={monster.email}/>
                ))
                }
            </div>
        );
    }
}

export default CardList;