"use client";

import React, { useContext } from "react";
import { ModalContext } from "../context/ModalProvider";
import Modal from "@/components/modal";

type Props = {};

function Dashboard({}: Props) {
  // get isProductmodal is true !
  const context = useContext(ModalContext);
  function openDashboardModal() {
    context?.setOpenModal();
  }

  return (
    <div className="h-screen max-w-screen-2xl flex pt-20 items-start justify-center mx-auto">
      <button
        className="p-2 rounded-md bg-slate-600"
        onClick={openDashboardModal}
      >
        openDashboardModal
      </button>
      {context?.isOpen && (
        <Modal>
          <div onClick={() => context.setCloseModal()}>X</div>
          <div>dashboard modal</div>
        </Modal>
      )}
    </div>
  );
}

export default Dashboard;
