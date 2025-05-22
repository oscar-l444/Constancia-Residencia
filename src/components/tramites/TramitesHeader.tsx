"use client";

import { useEffect, useState } from "react";
import  {Usuario}  from "@/services/authService";
import { getUsuarioAutenticado } from "@/services/cusService";



export default function TramitesHeader() {
  const [usuario, setUsuario] = useState<Usuario | null>(null);

  useEffect(() => {
    const userData = getUsuarioAutenticado();
    if (userData) {
      setUsuario(userData);
    }
  }, []);

  if (!usuario) {
    return <p>Cargando datos del usuario...</p>;
  }

  return (
    <div className="bg-primary text-white p-6 rounded-lg shadow-md mb-6">
      <h2 className="text-2xl font-bold">
        Bienvenido, {usuario.role}
      </h2>
      <p><strong>ID Usuario General:</strong> {usuario.id_usuario_general}</p>
      <p><strong>Sub ID:</strong> {usuario.sub}</p>
    </div>
  );
}
