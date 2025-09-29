"use client";

import AdminModal from "@/app/(root)/stores/_components/admin-modal";
import React from "react";

function ModalProvider() {
  const [isMounted, setIsMounted] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <>
      <AdminModal title="Create Store" description="Add your first e-commerce store"/>
    </>
  );
}

export default ModalProvider;
