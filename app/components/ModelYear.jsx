"use client";

import { useContext } from "react";
import { CarContext } from "../context/CarContext";

function ModelYear() {
  const { currentYear, years, selectedYear, setSelectedYear } =
    useContext(CarContext);

  return (
    <div className="flex flex-col items-center justify-center px-6 pb-4">
      <label
        htmlFor="year-dropdown"
        className="mb-2 text-lg font-medium text-gray-700"
      >
        Select a Year:
      </label>
      <select
        id="year-dropdown"
        value={selectedYear}
        onChange={(e) => setSelectedYear(e.target.value)}
        className="w-64 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-white text-gray-700"
      >
        <option className="bg-violet-100" value="" disabled>
          -- Choose a year --
        </option>
        {years.map((year) => (
          <option className="bg-violet-100" key={year} value={year}>
            {year}
          </option>
        ))}
      </select>

      {selectedYear && (
        <p className="mt-4 text-lg text-gray-600">
          You selected:{" "}
          <span className="font-bold text-gray-800">{selectedYear}</span>
        </p>
      )}
    </div>
  );
}

export default ModelYear;
