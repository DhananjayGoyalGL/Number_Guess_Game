import React, { useState } from "react";

const GuessingGame = () => {
  const [secretNumber, setSecretNumber] = useState(
    Math.floor(Math.random() * 100) + 1
  );
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");

  const handleGuess = () => {
    let guessNumber = parseInt(guess);

    if (guessNumber === secretNumber) {
      setMessage("Congratulations! You guessed the secret number!");
    } else if (guessNumber < secretNumber) {
      setMessage("Too low, try again!!");
    } else if (guessNumber > secretNumber) {
      setMessage("Too high, you need to try again...");
    }
  };

  const handleReset = () => {
    setSecretNumber(Math.floor(Math.random() * 100) + 1);
    setGuess("");
    setMessage("");
  };

  return (
    <div className="container">
      <h1>Guessing Game</h1>
      <input
        type="number"
        id="guess"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        min="1"
        max="100"
      />
      <button onClick={handleGuess} id="guess-btn">
        Guess
      </button>
      <p id="message">{message}</p>
      <button onClick={handleReset} id="reset-btn">
        Reset
      </button>
    </div>
  );
};

export default GuessingGame;
