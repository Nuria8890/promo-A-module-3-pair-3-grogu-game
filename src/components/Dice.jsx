import PropTypes from "prop-types";

function Dice(props) {
  const handleClick = (event) => {
    props.onClic(event);
  };
  return (
    <section>
      <button onClick={handleClick} className="dice">
        Lanzar Dado
      </button>
      <div className="game-status">{props.textGameStatus}</div>
    </section>
  );
}
export default Dice;

Dice.prototype = {
  onClic: PropTypes.func.isRequired,
  textGameStatus: PropTypes.string.isRequired,
};
