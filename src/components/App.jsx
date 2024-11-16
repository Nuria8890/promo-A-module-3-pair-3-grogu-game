import "../styles/App.scss";
import Header from "./Header";
import Board from "./Board";
import { useState } from "react";

function App() {
  const dice = ["grogu", "galleta", "huevo", "rana"];
  let diceResult = "";
  let indexFeet = 0;
  const grogu = ["feet", "", "", "", "", "", ""];
  const [merchan, setMerchan] = useState([
    ["galleta", "galleta", "galleta"],
    ["huevo", "huevo", "huevo"],
    ["rana", "rana", "rana"],
  ]);
  const [textGameStatus, setTextGameStatus] = useState("En curso");

  function rollDice() {
    const position = Math.round(Math.random() * (dice.length - 1 - 0) + 0);
    console.log("La posición del dado es", position);

    diceResult = dice[position];
    console.log("El resultado del dado es", diceResult);

    movingGrogu(grogu);
    downloadMerchan(merchan);
    console.log(merchan);
  }

  function movingGrogu(grogu) {
    console.log("Ejecuta movingGrogu");
    indexFeet = grogu.indexOf("feet");
    if (diceResult === "grogu" && indexFeet < 5) {
      grogu.splice(indexFeet, 2, "", "feet");
      indexFeet++;
      setTextGameStatus("GROGU avanza una casilla");
    } else if (diceResult === "grogu" && indexFeet === 5) {
      grogu.splice(indexFeet, 2, "", "feet");
      indexFeet++;
      setTextGameStatus("HA GANADO GROGU");
    }
  }

  function downloadMerchan(merchan) {
    console.log("Ejecuta downloadMerchan");

    if (
      diceResult != "grogu" &&
      merchan.findIndex((array) => array.includes(diceResult)) === -1
    ) {
      const indexDiceResultInDice = dice.indexOf(diceResult);
      dice.splice(indexDiceResultInDice, 1);
    }

    if (
      diceResult !== "grogu" &&
      merchan.findIndex((array) => array.includes(diceResult)) !== -1
    ) {
      const indexArrayDiceResultInMerchan = merchan.findIndex((array) =>
        array.includes(diceResult)
      );
      console.log(
        "El índice del array merchan es",
        indexArrayDiceResultInMerchan
      );
      const indexDiceResultInMerchan =
        merchan[indexArrayDiceResultInMerchan].indexOf(diceResult);

      merchan[indexArrayDiceResultInMerchan].splice(
        indexDiceResultInMerchan,
        1
      );
      setMerchan(merchan);

      console.log(
        "El índice del índice del array merchan es",
        indexDiceResultInMerchan
      );
      setTextGameStatus(`Se ha descargado un/a ${diceResult}`);
    }

    if (
      merchan[0].length === 0 &&
      merchan[1].length === 0 &&
      merchan[2].length === 0
    ) {
      setTextGameStatus("MANDO GANA");
    }
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
          <div className="game-status">{textGameStatus}</div>
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
