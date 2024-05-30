"use client";

import { useState } from "react";

export default function Primes() {
  const [range, setRange] = useState("");
  const [twinPrimes, setTwinPrimes] = useState([]);

  const isPrime = (num) => {
    // verificar si hay numeros negativos
    if (num <= 1) return false;
    //Si el modulo del numero termina en 0 quiere decir que no es primo
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  const findTwinPrimes = (max) => {
    const twins = [];
    // son gemelos cuando el primer numero es primo y ese mismo + 2 igual es primo
    for (let i = 2; i <= max - 2; i++) {
      if (isPrime(i) && isPrime(i + 2)) {
        twins.push([i, i + 2]);
      }
    }
    return twins;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // paserInt recibe dos parametros el string a hacer numero y el sistema numerico
    const rangeInt = parseInt(range, 10);
    if (!isNaN(rangeInt)) {
      setTwinPrimes(findTwinPrimes(rangeInt));
    }
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 py-8">
      <h1 className="font-semibold text-3xl">Números primos gemelos</h1>
      {/* Aqui el evento se ejecuta cuando se envia */}
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          className="text-black px-2 rounded border-none text-xl focus:outline-none"
          type="number"
          value={range}
          onChange={(event) => setRange(event.target.value)}
          placeholder="Introduce el rango"
        />
        <button className="bg-slate-500 rounded text-xl py-1" type="submit">
          Buscar primos gemelos
        </button>
      </form>
      <ul className="">
        <p className="text-xl">Hay {twinPrimes.length} gemelos</p>
        {twinPrimes.map((num, index) => (
          // cuando usamos map debemos poner un indice
          <li className="text-xl" key={index}>
            {index+1}.- 
            ({num[0]}, {num[1]})
          </li>
        ))}
      </ul>
    </div>
  );
}
