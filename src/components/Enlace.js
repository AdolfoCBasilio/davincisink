// Enlace.js
import React, { useState } from "react";

export const Enlace = ({ url, texto, imagenUrl }) => {
  const [seleccionado, setSeleccionado] = useState(false);

  const redirigir = () => {
    window.location.href = url;
  };

  const handleClick = () => {
    setSeleccionado(true);
    redirigir();
  };

  return (
    <div
      className="enlace"
      onClick={handleClick}
      style={{
        color: seleccionado ? "black" : "white",
        background: seleccionado ? "#946B00" : "black",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        margin: "2px",
        marginTop: "10px",
        padding: "25px",
        borderRadius: "10px",
        borderBottom: "5px solid #FEB801",
        transition: "all 0.1s ease",
        cursor: "pointer",
      }}
    >
      <span>{texto}</span>
      <img src={imagenUrl} alt="Logo" style={{ height: "50px" }} />
    </div>
  );
};
