"use client";

import { useEffect, useState } from "react";
import { getAuthData } from "@/services/authService"; // <-- Aquí cambiamos al servicio correcto

export default function TramitesPermisos() {
  const [permisos, setPermisos] = useState<string[]>([]);

  useEffect(() => {
    const userData = getAuthData();
    if (userData && userData.permisos) {
      setPermisos(userData.permisos);
    } else {
      setPermisos([]); // Si no hay permisos, ponemos un arreglo vacío
    }
  }, []);

  if (permisos.length === 0) {
    return <p>No se encontraron permisos.</p>;
  }

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <h3 className="text-lg font-bold mb-2">Permisos del Usuario</h3>
      <ul className="list-disc pl-6">
        {permisos.map((permiso, index) => (
          <li key={index} className="text-gray-700">
            {permiso}
          </li>
        ))}
      </ul>
    </div>
  );
}
