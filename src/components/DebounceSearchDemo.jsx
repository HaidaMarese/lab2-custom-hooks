import React, { useState, useEffect } from "react";
import useDebounce from "../hooks/useDebounce";

const DebounceSearchDemo = () => {
  const [input, setInput] = useState("HaidaM");
  const [delay, setDelay] = useState(500);
  const debouncedValue = useDebounce(input, delay);

  useEffect(() => {
    if (debouncedValue) {
      console.log("Searching for:", debouncedValue);
    }
  }, [debouncedValue]);

  return (
    <div className="bg-emerald-900 text-white shadow-2xl rounded-2xl p-6 w-full max-w-xl">

      <h2 className="text-center text-2xl font-semibold mb-4">Debounce Search Demo</h2>

      <div className="mb-4">
        <label htmlFor="delayInput" className="mr-2 font-medium">
          Delay (ms):
        </label>
        <input
          id="delayInput"
          type="number"
          min="0"
          step="100"
          value={delay}
          onChange={(e) => setDelay(Number(e.target.value))}
          className="border p-2 w-24 rounded"
        />
      </div>

      <input
        type="text"
        placeholder="Type to search..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full border p-3 rounded mb-4"
      />

      <p className="mb-2 font-medium">Current Input: <span className="text-white-700">{input}</span></p>
      <p className="mb-2 font-medium">
        Debounced Value (after {delay}ms): <span className="text-white-700">{debouncedValue}</span>
      </p>
    </div>
  );
};

export default DebounceSearchDemo;
