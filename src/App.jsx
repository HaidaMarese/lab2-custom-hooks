import React from "react";
import DebounceSearchDemo from "./components/DebounceSearchDemo";
import PaginationDemo from "./components/PaginationDemo";

const App = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white flex flex-col items-center justify-center p-8 space-y-12 font-sans">

      <h1 className="text-4xl font-bold text-center mb-4">Lab 2: Custom Hooks</h1>

      <DebounceSearchDemo />
      <PaginationDemo />

      <footer className="mt-12 text-center text-sm text-gray-400 border-t pt-4 w-full max-w-4xl">
        Built with  React + Tailwind by <span className="font-semibold text-white">HaidaM</span> — © 2025
      </footer>
    </div>
  );
};

export default App;
