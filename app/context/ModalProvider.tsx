"use client";

import { ReactNode, createContext, useEffect, useState } from "react";

type DefaultValueType = {
  //   isProductModalOpen: boolean;
  //   isDashboardModalOpen: boolean;
  isOpen: boolean;
  setOpenModal: () => void;
  setCloseModal: () => void;
};

export const ModalContext = createContext<undefined | DefaultValueType>(
  undefined
);

function ModalProvider({ children }: { children: ReactNode }) {
  // const [isDashModalOpen, setIsDashOpen] = useState(false);
  // const [isProdModalOpen, setIsProdOpen] = useState(false);
  const [isOpen, setOpenModal] = useState(false);

  const defaultValue = {
    isOpen,
    setOpenModal: () => setOpenModal(true),
    setCloseModal: () => setOpenModal(false),
  };

  return (
    <ModalContext.Provider value={defaultValue}>
      {children}
    </ModalContext.Provider>
  );
}

export default ModalProvider;
