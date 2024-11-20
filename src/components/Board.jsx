import "../styles/layout/Board.scss";
import Grogu from "./Grogu.jsx";

function Board() {
  const cells = Array(7)
    .fill("")
    .map((_, index) => {
      return <div key={index} className="cell"></div>;
    });

  return <section className="board">{cells}</section>;
}
export default Board;
// solo escribir una vez el div, y con map pintamos ese div 7 veces
// Array(7).fill().map("pinta cada div con la clase cell")
