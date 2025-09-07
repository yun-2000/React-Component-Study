import { useState } from "react";

export default function App() {
  return (
    <>
      <Counter />
    </>
  );
}

function Counter() {
  const [counter, setCounter] = useState(0);
  function addCounter() {
    setCounter(counter + 1);
  }
  function minuesCounter() {
    setCounter(counter - 1);
  }
  return (
    // center the counter vertically and horizontally using Tailwind CSS classes, full height screen
    <div className="flex flex-col items-center justify-center min-h-screen">
      <p>{counter}</p>
      <div>
        <button className="border-2" onClick={() => addCounter()}>
          +
        </button>
        <button onClick={() => minuesCounter()}>-</button>
      </div>
    </div>
  );
}
