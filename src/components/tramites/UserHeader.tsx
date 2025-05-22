// 📌 Archivo: /components/tramites/UserHeader.tsx
"use client";

import Button from "@/components/Button";
import { useRouter } from "next/navigation";
import { getUsuarioAutenticado } from "@/services/cusService";
import { getAuthData } from "@/services/authService";
import { useEffect, useState } from "react";

export default function UserHeader() {
  const router = useRouter();
  const [nombreCompleto, setNombreCompleto] = useState<string | null>(null);
  const [rol, setRol] = useState<string | null>(null);

  useEffect(() => {
    const usuarioCUS = getUsuarioAutenticado();
    
    const authData = getAuthData();

    if (usuarioCUS) {
      setNombreCompleto(`${usuarioCUS.nombre} ${usuarioCUS.apellido}`);
    } else {
      setNombreCompleto("Usuario");
    }

    if (authData) {
      setRol(authData.role ?? "Sin Rol");
    } else {
      setRol("Sin Rol");
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("user_data");
    router.push("/login");
  };

  return (
    <div className="bg-gray-100 p-4 flex justify-between items-center shadow-md">
      <div className="text-xl font-bold text-gray-700">
        Bienvenido, {nombreCompleto} <span className="text-sm text-gray-500">({rol})</span>
      </div>
      <Button text="Cerrar Sesión" onClick={handleLogout} />
    </div>
  );
}
