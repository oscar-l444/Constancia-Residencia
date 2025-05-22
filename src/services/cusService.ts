export interface Usuario {
  id: number;
  nombre: string;
  apellido: string;
  curp: string;
  email: string;
  telefono: string;
  direccion: string;
  token?: string;
}

// 👉 API Key de tu aplicación (colocarla en un .env.local es lo más seguro)
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "27dcb99e08e3f400ca1cae39c145dafa1e8dbac1b70cc2005c666c16b4485a18";

// ✅ **Inicio de sesión**
export const loginCUS = async (username: string, password: string): Promise<Usuario | null> => {
  try {
    const response = await fetch("https://sanjuandelrio.gob.mx/tramites-sjr/Api/principal/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY
      },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      console.error("Error en la respuesta del servidor");
      return null;
    }

    const result = await response.json();
    console.log("RESULT de CUSSERVICE", result)
    if (result.success) {
      // Guardar el token en LocalStorage
      localStorage.setItem("token", result.token);

      // Devolver el usuario autenticado
      return result as Usuario;
    } else {
      console.error("Error en la autenticación:", result.message);
      return null;
    }
  } catch (error) {
    console.error("Error al conectar con la API:", error);
    return null;
  }
};


export const getUsuarioAutenticado = (): Usuario | null => {
  const data = localStorage.getItem("user");
  if (!data) {

    console.error("No hay datos del usuario en localStorage");
    return null;
  }
  return JSON.parse(data) as Usuario;
};