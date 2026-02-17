"use client";

import { useMemo, useState } from "react";

// Dummy prices (baad me API ke hisaab se change kar sakte ho)
const ADULT_PRICE = 3000;
const CHILD_PRICE = 2000;
const INFANT_PRICE = 500;

export default function GuestFareBox() {
  const [adults, setAdults] = useState(1);
  const [children, setChildren] = useState(0);
  const [infants, setInfants] = useState(0);

  // Dummy total calculation
  const totalFare = useMemo(
    () =>
      adults * ADULT_PRICE +
      children * CHILD_PRICE +
      infants * INFANT_PRICE,
    [adults, children, infants]
  );

  const options = Array.from({ length: 10 }, (_, i) => i);

  const handleSearch = () => {
    // Abhi ke liye sirf console, baad me yaha real API call kar sakte ho
    console.log({
      adults,
      children,
      infants,
      totalFare,
    });
  };

  return (
    <section className="bg-white rounded-2xl shadow-md p-4 md:p-6 flex flex-col gap-4">
      {/* TOP: 3 boxes (Adults / Children / Infants) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {/* Adults */}
        <div className="border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500">ADULTS</span>
          <select
            className="text-sm font-semibold text-gray-800 bg-transparent outline-none cursor-pointer"
            value={adults}
            onChange={(e) => setAdults(Number(e.target.value))}
          >
            {options.slice(1).map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        {/* Children */}
        <div className="border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500">CHILDREN</span>
          <select
            className="text-sm font-semibold text-gray-800 bg-transparent outline-none cursor-pointer"
            value={children}
            onChange={(e) => setChildren(Number(e.target.value))}
          >
            {options.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>

        {/* Infants */}
        <div className="border border-gray-200 rounded-xl px-4 py-3 flex items-center justify-between">
          <span className="text-xs font-semibold text-gray-500">INFANTS</span>
          <select
            className="text-sm font-semibold text-gray-800 bg-transparent outline-none cursor-pointer"
            value={infants}
            onChange={(e) => setInfants(Number(e.target.value))}
          >
            {options.map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* BOTTOM: total + search button */}
      <div className="mt-2 flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
        <div>
          <p className="text-xs text-gray-500">Total Fare (dummy)</p>
          <p className="text-xl font-bold text-[#1E3A8A]">
            ₹ {totalFare.toLocaleString("en-IN")}
          </p>
          <p className="text-xs text-gray-500">
            {adults} Adult(s), {children} Child, {infants} Infant
          </p>
        </div>

        <button
          type="button"
          onClick={handleSearch}
          className="w-full md:w-auto bg-[#FACC15] text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-yellow-400 transition"
        >
          Search Flight
        </button>
      </div>
    </section>
  );
}
