// 📌 Archivo: /services/tramitesService.ts

const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "27dcb99e08e3f400ca1cae39c145dafa1e8dbac1b70cc2005c666c16b4485a18";

export interface TramiteInfo {
  nombre: string;
  apellido: string;
  curp: string;
  email: string;
  telefono: string;
  direccion: string;
  permisos: string[];
  role: string;
  sub: string;
}

export const getTramitesInfo = async (): Promise<TramiteInfo | null> => {
  try {
    const token = localStorage.getItem("token");

    if (!token) {
      console.error("No hay token disponible");
      return null;
    }

    const response = await fetch("https://sanjuandelrio.gob.mx/tramites-sjr/Api/principal/info_general", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        "X-API-KEY": API_KEY
      },
    });

    if (!response.ok) {
      console.error("Error en la respuesta del servidor", response.status, response.statusText);
      return null;
    }

    const result = await response.json();
    console.log("📌 Respuesta de la API (Trámites):", result);

    if (result.success) {
      return {
        ...result.data,
        permisos: result.data.permisos ?? [], // 👈 Si no existe permisos, colocamos un array vacío
      } as TramiteInfo;
    } else {
      console.error("Error al obtener los trámites:", result.message);
      return null;
    }
  } catch (error) {
    console.error("Error al conectar con la API:", error);
    return null;
  }
};
