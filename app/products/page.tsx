"use client";

import React, { useContext } from "react";
import { ModalContext } from "../context/ModalProvider";
import Modal from "@/components/modal";

type Props = {};

function Products({}: Props) {
  // get isProductmodal is true !
  const context = useContext(ModalContext);
  function openProductsModal() {
    // setproductmodal o true
    context?.setOpenModal();
  }

  return (
    <div className="h-screen max-w-screen-2xl flex pt-20 items-start justify-center mx-auto">
      <button
        className="p-2 rounded-md bg-slate-600"
        onClick={openProductsModal}
      >
        openProductsModal
      </button>
      {/* if true show Modal with children of Products */}
      {context?.isOpen && (
        <Modal>
          <div onClick={() => context.setCloseModal()}>X</div>
          <div>asd</div>
        </Modal>
      )}
    </div>
  );
}

export default Products;
