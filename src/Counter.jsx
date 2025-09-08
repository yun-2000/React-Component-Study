import { useEffect, useRef, useState } from "react";

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const { counter, increment, decrement } = useCounter(0);
  return (
    <div className="flex flex-col items-center justify-center min-h-screen space-y-10 text-center">
      <p className="min-w-3xs min-h-50 leading-50 text-7xl bg-gray-400 rounded-3xl">
        {counter}
      </p>
      <div className="flex space-x-15">
        <button
          className="border-2 bg-green-500 min-w-25 rounded-2xl"
          onClick={increment}
        >
          +
        </button>
        <button
          className="border-2 bg-red-500 min-w-25 rounded-2xl"
          onClick={decrement}
        >
          -
        </button>
      </div>
    </div>
  );
}

function useCounter({ initValue = 0 }) {
  const [counter, setCounter] = useState(() => {
    return Number(localStorage.getItem("counter")) || initValue;
  });
  const isFirstRender = useRef(true);
  function increment() {
    return setCounter((c) => c + 1);
  }
  function decrement() {
    return setCounter((c) => c - 1);
  }
  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    localStorage.setItem("counter", counter);
  }, [counter]);

  return { counter, increment, decrement };
}
