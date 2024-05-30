"use client";
import { useState } from "react";

export default function Anagram() {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const [isAnagram, setIsAnagram] = useState(null);

  function checkAnagram(word1, word2) {
    if (word1.length !== word2.length || word1 === word2) return false;
    // seperar cada caracter con split, ordenar respecto a UTF-16, unir el array para comparar como string
    return word1.split("").sort().join("") === word2.split("").sort().join("");
  }

  const resetState = () => {
    setWord1("");
    setWord2("");
    setIsAnagram(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsAnagram(checkAnagram(word1, word2));
    setTimeout(() => resetState(), 5000); // espera 5 segundos para limpiar y restablecer los estados iniciales
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 py-8">
      <h1 className="font-semibold text-3xl">¿Es anagrama?</h1>
      <form className="flex flex-col gap-4">
        <input
          className="text-black px-2 rounded border-none text-xl focus:outline-none"
          type="text"
          value={word1}
          onChange={(event) => setWord1(event.target.value)}
          placeholder="Palabra 1"
        />
        <input
          className="text-black px-2 rounded border-none text-xl focus:outline-none"
          type="text"
          value={word2}
          onChange={(event) => setWord2(event.target.value)}
          placeholder="Palabra 2"
        />
        <button
          className="bg-slate-500 rounded text-xl py-1"
          onClick={handleSubmit}
        >
          Verificar
        </button>
      </form>
      {/* Aquie se evalua el estado de isAnagram, evalua si es true o false y con el ternario pinta la respuesta */}
      {isAnagram !== null && (
        <p className="text-xl">
          {isAnagram ? "Son anagramas" : "No son anagramas"}
        </p>
      )}
    </div>
  );
}
