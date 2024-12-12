"use client";

import { useContext } from "react";
import { CarContext } from "../context/CarContext";

function VehicleMakes() {
  const {
    carMakes,
    selectedCarModel,
    loading,
    handleSelectChange,
  } = useContext(CarContext);

  return (
    <div className="flex flex-col items-center justify-center p-6">
      <label
        htmlFor="car-make-dropdown"
        className="mb-2 text-lg font-medium text-gray-700"
      >
        Select Car Model
      </label>
      {loading ? (
        <div className="text-violet-600">Loading car models...</div>
      ) : (
        <select
          id="car-make-dropdown"
          className="w-64 p-4 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:border-gray-500 bg-white text-gray-700"
          value={selectedCarModel}
          onChange={handleSelectChange}
        >
          <option className="bg-violet-100" value="" disabled>
            -- Select a Car Model --
          </option>
          {carMakes.map((make) => (
            <option className="bg-violet-100" key={make.id} value={make.id}>
              {make.name}
            </option>
          ))}
        </select>
      )}
      {selectedCarModel && (
        <div className="mt-4 text-gray-700">
          Selected Car Id:{" "}
          <span className="font-semibold">{selectedCarModel}</span>
        </div>
      )}
    </div>
  );
}

export default VehicleMakes;
