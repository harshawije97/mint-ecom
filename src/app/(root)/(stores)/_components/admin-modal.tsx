"use client";

import Modal from "@/components/shared/modal";
import { Form } from "@/components/ui/form";
import { useStoreModal } from "@/hooks/use-store-modal";
import React from "react";

interface AdminModalInterface {
  title: string;
  description: string;
}

function AdminModal({ title, description }: AdminModalInterface) {
  const { isOpen, onClose } = useStoreModal();
  return (
    <>
      <Modal
        title={title || "Create Feature"}
        description={description || "Create a new feature with description"}
        isOpen={isOpen}
        onClose={onClose}
      >
        <div>
          <div className="space-y-4 py-2 pb-4">
            {/* 
            //TODO: Add a form with following fields
             - Name
             - Description (optional)
             - Image (optional)  
             - Store Category
             */}
          </div>
        </div>
      </Modal>
    </>
  );
}

export default AdminModal;
