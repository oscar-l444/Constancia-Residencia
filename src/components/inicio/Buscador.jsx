"use client";
import { useState } from "react";

export default function Buscador() {
  const [busqueda, setBusqueda] = useState("");

  const handleBuscar = () => {
    alert(`Buscando: ${busqueda}`);
  };

  return (
    <section className="bg-white rounded-xl shadow-lg p-6 my-6 max-w-5xl mx-auto text-center">
      <h3 className="font-sans text-2xl font-bold text-[#0b3b60] mb-4">Buscador de Trámites.</h3>
      <div className="flex justify-center items-center gap-2">
        <input
          type="text"
          placeholder="Ingresa nombre de trámite"
          value={busqueda}
          onChange={(e) => setBusqueda(e.target.value)}
          className="px-4 py-2 rounded-full border outline-none w-80"
        />
        <button
          onClick={handleBuscar}
          className="bg-[#0b3b60] text-white px-6 py-2 rounded-full hover:bg-blue-800"
        >
          Buscar... 
        </button>
      </div>

      <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-0 text-center">
        {[
          { cantidad: 0, texto: "Trámites y Servicios" },
          { cantidad: 0, texto: "Inspecciones" },
          { cantidad: 0, texto: "Inspectores" },
          { cantidad: 0, texto: "Regulaciones" },
        ].map((item, index) => (
          <div key={index}>
            <h4 className="text-2xl font-bold text-green-700">{item.cantidad}</h4>
            <p className="text-sm text-rosaInstitucional">{item.texto}</p>
          </div>
        ))}
      </div>
    </section>
  );
}