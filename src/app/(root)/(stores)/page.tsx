"use client";

import { useStoreModal } from "@/hooks/use-store-modal";
import React from "react";

function AdminPage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  React.useEffect(() => {
    if (!isOpen) {
      onOpen();
    }
  }, [isOpen, onOpen]);
  
  return (
    <div className="w-full flex py-6 px-4">
      <h2 className="text-2xl font-medium capitalize">all stores</h2>
    </div>
  );
}

export default AdminPage;
