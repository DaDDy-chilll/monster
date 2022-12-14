import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

class CardList extends Component {
  render() {
    const { monster } = this.props;
    return (
      <div className="card-list">
        {monster.map((monster) => (
          <Card monster={monster} className="card-container" />
        ))}
      </div>
    );
  }
}
export default CardList;
