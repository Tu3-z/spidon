import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Placa.css";

export default function PlacaSuspensa() {
  const [aberta, setAberta] = useState(false);

  return (
    <div className="placa-wrapper">
      <motion.div
        className="corda-e-placa"
        animate={{ y: aberta ? 100 : 0 }}
        transition={{ type: "spring", stiffness: 80, damping: 10 }}
      >
        {/* Corda visual */}
        <div className="corda" style={{ height: aberta ? "100px" : "20px" }} />

        {/* Placa */}
        <div className="placa" onClick={() => setAberta((prev) => !prev)}>
          <p>{aberta ? "Fechar" : "Abrir"}</p>

          <AnimatePresence>
            {aberta && (
              <motion.div
                className="conteudo"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
              >
                <p>🎉 Bem-vindo ao conteúdo secreto!</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </div>
  );
}
