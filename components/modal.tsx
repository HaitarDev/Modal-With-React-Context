"use client";
import { ModalContext } from "@/app/context/ModalProvider";
import React, {
  ReactNode,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { createPortal } from "react-dom";
import { motion } from "framer-motion";

type Props = {
  children: ReactNode;
};

function Modal({ children }: Props) {
  const ref = useRef(null);
  const context = useContext(ModalContext);
  const [isMount, setIsMount] = useState(false);
  useEffect(() => {
    setIsMount(true);
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        context?.setCloseModal();
      }
    };
    addEventListener("keydown", handleKeyPress);
    return () => removeEventListener("keydown", handleKeyPress);
  }, [isMount, context]);

  if (!isMount) return null;
  return createPortal(
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      ref={ref}
      id="overlay"
      className="absolute top-0 left-0 backdrop-blur-[1px] bg-slate-300/10 min-w-full min-h-full flex items-center justify-center z-30"
      onClick={(e) => {
        if (e.currentTarget.id === "overlay") {
          console.log(e.currentTarget.id);
          context?.setCloseModal();
        }
      }}
    >
      <motion.div
        initial={{ opacity: 0, width: 0 }}
        animate={{ opacity: 1, width: "200px" }}
        transition={{ delay: 0.2 }}
        className="p-4 bg-white rounded-md text-black size-44 z-50 shadow-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </motion.div>
    </motion.div>,
    document.body
  );
}

export default Modal;
