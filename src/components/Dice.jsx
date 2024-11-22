import PropTypes from "prop-types";
import GameStatus from "./GameStatus";

function Dice(props) {
  const handleClick = (event) => {
    props.onClic(event);
  };
  return (
    <section>
      <button onClick={handleClick} className="dice">
        Lanzar Dado
      </button>
      <GameStatus textGameStatus={props.textGameStatus} />
    </section>
  );
}
export default Dice;

Dice.prototype = {
  onClic: PropTypes.func.isRequired,
  textGameStatus: PropTypes.string.isRequired,
};
