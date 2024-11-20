import "../styles/App.scss";
import { useState } from "react";
import Header from "./Header";
import Board from "./Board";
import Goods from "./Goods";
import Dice from "./Dice";

function App() {
  const [dice, setDice] = useState(["grogu", "galleta", "huevo", "rana"]);
  let diceResult = "";
  let indexFeet = 0;

  const [groguPosition, setGroguPosition] = useState(0);

  const [merchan, setMerchan] = useState([
    ["galleta", "galleta", "galleta"],
    ["huevo", "huevo", "huevo"],
    ["rana", "rana", "rana"],
  ]);

  const [textGameStatus, setTextGameStatus] = useState("En curso");

  function rollDice() {
    const position = Math.round(Math.random() * (dice.length - 1 - 0) + 0);
    console.log("La posición del dado es", position);
    console.log("Acabo de tirar el dado, contiene", dice);
    diceResult = dice[position];
    console.log("El resultado del dado es", diceResult);
    setTextGameStatus(`Se ha descargado un/a ${diceResult}`);
    movingGrogu(grogu);
    downloadMerchan(merchan);
    console.log("El dado contiene:", dice);
  }

  function movingGrogu(grogu) {
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
    setGrogu(grogu);
    console.log("grogu:", grogu);
  }

  function downloadMerchan(merchan) {
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

      if (merchan[indexArrayDiceResultInMerchan].length === 1) {
        merchan.splice(indexArrayDiceResultInMerchan, 1);
        console.log("merchan es:", merchan);

        console.log("Eliminando elementos del dado");
        const indexDiceResultInDice = dice.indexOf(diceResult);
        dice.splice(indexDiceResultInDice, 1);
        setDice(dice);
      } else {
        merchan[indexArrayDiceResultInMerchan].pop();
        setMerchan(merchan);
        console.log("merchan es:", merchan);
      }
    }

    if (merchan.length === 0) {
      setTextGameStatus("MANDO GANA");
    }
  }

  return (
    <>
      <Header />
      <main className="page">
        <Board />

        <Dice onClic={rollDice} textGameStatus={textGameStatus} />

        <Goods />
        <section>
          <button className="restart-button">Reiniciar Juego</button>
        </section>
      </main>
    </>
  );
}

export default App;
