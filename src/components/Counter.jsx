// src/components/Counter.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Counter = () => {
  const [count, setCount] = useState(0);
  const [animation, setAnimation] = useState(false);

  useEffect(() => {
    // Get saved count from localStorage on component mount
    const savedCount = localStorage.getItem("count");
    if (savedCount) {
      setCount(parseInt(savedCount));
    }
  }, []);

  useEffect(() => {
    // Save count to localStorage when it changes
    localStorage.setItem("count", count.toString());

    // Show alert for multiples of 10
    if (count !== 0 && count % 10 === 0) {
      setTimeout(() => {
        alert(`Congratulations! You reached ${count}!`);
      }, 100);
    }

    // Trigger animation when count changes
    if (count !== 0) {
      setAnimation(true);
      setTimeout(() => setAnimation(false), 300);
    }
  }, [count]);

  const incrementCount = () => setCount(count + 1);
  const decrementCount = () => count > 0 && setCount(count - 1);
  const resetCount = () => setCount(0);

  return (
    <div className="max-w-md mx-auto my-8 p-8 bg-white dark:bg-gray-800 rounded-xl shadow-lg transition-all duration-300 transform hover:shadow-xl">
      <h2 className="text-2xl font-bold text-center mb-6 text-blue-600 dark:text-blue-400">
        Counter Demo
      </h2>

      <div className="flex justify-center mb-10">
        <div className="relative">
          <motion.div
            animate={{ scale: animation ? 1.2 : 1 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
            className="text-7xl font-bold text-blue-600 dark:text-blue-400"
          >
            {count}
          </motion.div>
          {count % 10 === 0 && count !== 0 && (
            <div className="absolute -top-4 -right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full animate-bounce">
              x10!
            </div>
          )}
        </div>
      </div>

      <div className="grid grid-cols-3 gap-3">
        <button
          onClick={decrementCount}
          disabled={count <= 0}
          className="flex-1 bg-red-500 hover:bg-red-600 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-red-400 shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M20 12H4"
            />
          </svg>
        </button>

        <button
          onClick={resetCount}
          className="flex-1 bg-yellow-500 hover:bg-yellow-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>

        <button
          onClick={incrementCount}
          className="flex-1 bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg font-medium transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-green-400 shadow-md hover:shadow-lg flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Counter;
