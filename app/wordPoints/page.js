"use client";

import { useState } from "react";

export default function Points() {
  const [word, setWord] = useState("");
  const [points, setPoints] = useState(0);

  const calculatePoints = (word) => {
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let totalPoints = 0;
    // se ocupa for of para iterar sobre cada elemento del string
    for (let char of word.toUpperCase()) {
      // se suma uno porque el indice empieza en 0
      totalPoints += alphabet.indexOf(char) + 1;
    }
    return totalPoints;
  };

  const resetState = () => {
    setWord("");
    setPoints(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const score = calculatePoints(word);
    setPoints(score);
    if (score === 100) {
      alert("¡Felicitaciones! Has conseguido 100 puntos.");
    }
    setTimeout(() => resetState(), 3000); // espera 5 segundos para limpiar y restablecer los estados iniciales
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 py-8">
      <h1 className="font-semibold text-3xl">La palabra de 100 puntos</h1>
      <form className="flex flex-col gap-4">
        <input
          className="text-black px-2 rounded border-none text-xl focus:outline-none"
          type="text"
          value={word}
          onChange={(event) => setWord(event.target.value)}
          placeholder="Ingresa una palabra"
        />
        <button
          className="bg-slate-500 rounded text-xl py-1"
          onClick={handleSubmit}
        >
          Calcular puntos
        </button>
      </form>
      {points !== 0 && <p className="text-xl">{`Puntos: ${points}`}</p>}
    </div>
  );
}
