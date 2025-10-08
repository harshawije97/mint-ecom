"use client";

import { useAuth } from "@/hooks/use-auth";
import { useStoreModal } from "@/hooks/use-store-modal";
import React from "react";
import StoreList from "./_components/store-list";

function AdminPage() {
  const onOpen = useStoreModal((state) => state.onOpen);
  const isOpen = useStoreModal((state) => state.isOpen);

  // standalone hook to check if user is logged in & redirect if not
  useAuth();

  return (
    <div className="container mx-auto">
      <div className="w-full flex py-8 px-16">
        <div className="w-fit flex-col flex gap-y-1">
          <h2 className="text-2xl font-medium capitalize">all stores</h2>
          <p className="text-sm text-slate-600">No stores found</p>
          <>
            <StoreList />
          </>
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
