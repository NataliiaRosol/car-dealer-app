"use client";
import React, { createContext, useEffect, useState } from "react";

export const CarContext = createContext(null);

function CarContextProvider({ children }) {
  const [carMakes, setCarMakes] = useState([]);
  const [selectedCarModel, setSelectedCarModel] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");

  // Поточний рік
  const currentYear = new Date().getFullYear();

  // Створення списку років
  const years = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, index) => 2015 + index
  );

  const fetchCarMakes = async () => {
    setLoading(true);
    try {
      const response = await fetch(GET_CAR_BY_TYP);
      const data = await response.json();

      const formattedMakes = data.Results.map((car) => ({
        id: car.MakeId,
        name: car.MakeName,
      }));
      // console.log(formattedMakes);

      setCarMakes(formattedMakes);
    } catch (error) {
      console.error("Error fetching car makes:", error);
    } finally {
      setLoading(false);
    }
  };
  const handleSelectChange = (event) => {
    setSelectedCarModel(event.target.value);
  };

  useEffect(() => {
    fetchCarMakes();
  }, []);

  return (
    <CarContext.Provider
      value={{
        carMakes,
        setCarMakes,
        selectedCarModel,
        setSelectedCarModel,
        loading,
        setLoading,
        handleSelectChange,
        currentYear,
        years,
        selectedYear,
        setSelectedYear,
      }}
    >
      {children}
    </CarContext.Provider>
  );
}

export default CarContextProvider;
