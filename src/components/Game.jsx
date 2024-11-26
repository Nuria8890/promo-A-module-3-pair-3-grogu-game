import Form from "./Form";
import Board from "./Board";
import Goods from "./Goods";
import Dice from "./Dice";


function Game(props) {
  return (
    <>
    <Form name={props.name} setName={props.setName} updateName={props.updateName} />
    <Board />
    <Dice onClic={props.rollDice} textGameStatus={props.textGameStatus} />
    <Goods />
    <section>
        <button className="restart-button">Reiniciar Juego</button>
    </section>
      
    </>
  )
}

export default Game
