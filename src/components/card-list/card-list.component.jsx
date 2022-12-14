// import { Component } from "react";
import Card from "../card/card.component";
import "./card-list.styles.css";

const CardList = ({ monsters }) => {
  return (
    <div className="card-list">
      {monsters.map((monster) => (
        <Card monster={monster} className="card-container" />
      ))}
    </div>
  );
};

// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;
//     return (
//       <div className="card-list">
//         {monsters.map((monster) => (
//           <Card monster={monster} className="card-container" />
//         ))}
//       </div>
//     );
//   }
// }
export default CardList;
