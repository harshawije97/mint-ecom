"use client";

import Modal from "@/components/shared/modal";
import React from "react";

function AdminPage() {
  return (
    <div className="w-full h-screen flex flex-1 justify-center items-center">
      <Modal
        title="Admin Page"
        description="This is the admin page"
        isOpen
        onClose={() => {}}
      >
        <h1>Admin Page</h1>
      </Modal>
    </div>
  );
}

export default AdminPage;
