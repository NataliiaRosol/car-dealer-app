"use client";
import Link from "next/link";
import React, { useContext } from "react";
import { CarContext } from "../context/CarContext";

function NextButton() {
  const { selectedCarModel, selectedYear } = useContext(CarContext);
  const isDisabled = !selectedCarModel || !selectedYear;

  return (
    <div className="flex items-center justify-center pb-4">
      <Link
        href={`/result/${selectedCarModel}/${selectedYear}`}
        className={`inline-block px-6 min-w-[200px] text-center py-3 rounded-md text-white transition duration-300 ${
          isDisabled
            ? "bg-violet-200 cursor-not-allowed"
            : "bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-violet-500 focus:ring-offset-2"
        }`}
        aria-disabled={isDisabled}
      >
        {isDisabled ? "Select Model and Year" : "Next"}
      </Link>
    </div>
  );
}

export default NextButton;
