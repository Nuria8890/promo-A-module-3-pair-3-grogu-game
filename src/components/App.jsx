import "../styles/App.scss";
import Header from "./Header";
import Board from "./Board";

function App() {
  const dice = ["grogu", "galleta", "huevo", "rana"];

  let diceResult = "";

  function rollDice() {
    const position = Math.round(Math.random() * (dice.length - 1 - 0) + 0);
    console.log("position es", position);
    diceResult = dice[position];
    console.log("El resultado del dado es", diceResult);
    return diceResult;
  }

  return (
    <>
      <Header />
      <main className="page">
        <Board />

        <section>
          <button onClick={rollDice} className="dice">
            Lanzar Dado
          </button>
          <div className="game-status">En curso</div>
        </section>

        <section className="goods-container">
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
          <div className="goods-item">🍪</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
          <div className="goods-item">🥚</div>
        </section>
        <section className="goods-container">
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
          <div className="goods-item">🐸</div>
        </section>
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;
