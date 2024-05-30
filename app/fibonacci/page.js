"use client";

export default function serieFibonacci() {
  const fibonacci = (n) => {
    const sequence = [0, 1];
    for (let i = 2; i < n; i++) {
      sequence.push(sequence[i - 1] + sequence[i - 2]);
    }
    return sequence;
  };

  return (
    <div className="w-full flex flex-col justify-center items-center gap-5 py-8">
      <h1 className="font-semibold text-3xl">Serie de Fibonacci</h1>
      <p className="w-1/2 text-xl">{fibonacci(50).join(' - ')}</p>
    </div>
  );
}
