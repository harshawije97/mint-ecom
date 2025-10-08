"use client";

import React from "react";
import StorePreview from "./store-preview";

function StoreList() {
  return (
    <div className="max-w-6xl grid grid-cols-4 gap-6 my-10">
      <StorePreview />
      <StorePreview />
      <StorePreview />
      <StorePreview />
    </div>
  );
}

export default StoreList;
