import React, { useState } from "react";
import usePagination from "../hooks/usePagination";

function PaginationDemo() {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const allItems = Array.from({ length: 123 }, (_, i) => `Item ${i + 1}`);

  const {
    currentPage,
    totalPages,
    currentItems,
    setPage,
    nextPage,
    prevPage,
    canNextPage,
    canPrevPage,
  } = usePagination(allItems, itemsPerPage);

  const handleItemsPerPage = (e) => {
    const value = Number(e.target.value);
    if (value > 0) {
      setItemsPerPage(value);
      setPage(1);
    }
  };

  return (
    <div className="bg-gray-100 text-black shadow-2xl rounded-2xl p-6 w-full max-w-xl">
      <h2 className="text-center text-2xl font-semibold mb-4">Pagination Demo</h2>

      <div className="mb-4">
        <label htmlFor="perPage" className="mr-2 font-medium">
          Items per page:
        </label>
        <select
          value={itemsPerPage}
          onChange={handleItemsPerPage}
          className="border p-2 rounded"
        >
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="25">25</option>
        </select>
      </div>

      <ul className="mb-4 list-disc list-inside">
        {currentItems.map((item, index) => (
          <li key={index} className="font-medium">{item}</li>
        ))}
      </ul>

      <div className="flex items-center justify-center space-x-4 mb-4">
        <button
          className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300"
          onClick={prevPage}
          disabled={!canPrevPage}
        >
          Prev
        </button>

        <span className="font-medium">
          Page {currentPage} of {totalPages}
        </span>

        <button
          className="px-3 py-1 border rounded bg-gray-200 hover:bg-gray-300"
          onClick={nextPage}
          disabled={!canNextPage}
        >
          Next
        </button>
      </div>

      <div className="mt-4 flex flex-wrap justify-center gap-1">
        {Array.from({ length: totalPages }, (_, i) => (
          <button
            key={i}
            onClick={() => setPage(i + 1)}
            className={`px-3 py-1 rounded font-medium ${
              currentPage === i + 1
                ? "bg-blue-500 text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {i + 1}
          </button>
        ))}
      </div>
    </div>
  );
}

export default PaginationDemo;
