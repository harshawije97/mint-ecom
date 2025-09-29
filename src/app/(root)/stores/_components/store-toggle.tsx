"use client";

import { Aperture } from "lucide-react";
import React from "react";

function StoreToggle() {
  return (
    <header className="flex items-center gap-2">
      <div className="bg-blue-500 p-[7px] rounded-lg w-max">
        <Aperture size={25} color="white" />
      </div>
      <>
        <p className="font-medium text-blue-700 overflow-hidden transform duration-200 ease-in-out">
          Mint
        </p>
        <p className="text-slate-500 overflow-hidden transform duration-200 ease-in-out">
          Ecommerce
        </p>
      </>
    </header>
  );
}

export default StoreToggle;
