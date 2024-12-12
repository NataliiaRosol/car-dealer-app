"use client";
import React, { createContext, useEffect, useState } from "react";
const apiUrl = process.env.NEXT_PUBLIC_GET_CAR_BY_TYPE;

export const CarContext = createContext(null);

function CarContextProvider({ children }) {
  const [carMakes, setCarMakes] = useState([]);
  const [selectedCarModel, setSelectedCarModel] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedYear, setSelectedYear] = useState("");

  const currentYear = new Date().getFullYear();

  const years = Array.from(
    { length: currentYear - 2015 + 1 },
    (_, index) => 2015 + index
  );

  const fetchCarMakes = async () => {
    setLoading(true);
    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      const formattedMakes = data.Results.map((car) => ({
        id: car.MakeId,
        name: car.MakeName,
      }));
      // console.log(formattedMakes);

      setCarMakes(formattedMakes);
    } catch (error) {
      throw new Error("Error fetching car models:", error);
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
