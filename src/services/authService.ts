// 📌 Archivo: /services/authService.ts

export interface Usuario {
  id_usuario_general: string;
  permisos: string[];
  role: string;
  sub: string;
  token: string;
}

// 👉 API Key de tu aplicación (colocarla en un .env.local es lo más seguro)
const API_KEY = process.env.NEXT_PUBLIC_API_KEY || "27dcb99e08e3f400ca1cae39c145dafa1e8dbac1b70cc2005c666c16b4485a18";

// ✅ **Inicio de sesión**
export const loginCUS = async (username: string, password: string): Promise<Usuario | null> => {
  try {
    console.log("📌 Enviando datos al servidor...");
    console.log("👤 Username:", username);
    console.log("🔑 Password:", password);

    const response = await fetch("https://sanjuandelrio.gob.mx/tramites-sjr/Api/principal/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-API-KEY": API_KEY
      },
      body: JSON.stringify({ username, password })
    });

    console.log("📌 Response Status:", response.status);

    if (!response.ok) {
      const errorData = await response.json();
      console.error("❌ Error en la respuesta del servidor:", errorData.message);
      return null;
    }

    // 🔍 Verificamos cómo viene el JSON
    const result = await response.json();
    console.log("📌 Respuesta de la API:", result);

    // ✅ Verificamos si viene `token` y datos del usuario
    if (result.success) {
      const token = result.token;

      if (token) {
        console.log("✅ Token recibido:", token);

        // 👇 Aquí seleccionamos solo los datos necesarios
        const usuarioData: Usuario = {
          id_usuario_general: result.id_usuario_general, // <-- Se saca directo del JSON
          permisos: result.permisos,                    // <-- No está dentro de "data"
          role: result.role,                            // <-- No está dentro de "data"
          sub: result.sub,                              // <-- No está dentro de "data"
          token: token
        };

        // ✅ Guardar el token y los datos del usuario
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(usuarioData));

        // ✅ Devolver el usuario autenticado
        return usuarioData;
      } else {
        console.error("❌ Error: No se encontró el token en la respuesta");
        return null;
      }
    } else {
      console.error("Error en la autenticación:", result.message);
      return null;
    }
  } catch (error) {
    console.error("Error al conectar con la API:", error);
    return null;
  }
};


// ✅ **Obtener datos del usuario autenticado**
export const getAuthData = (): Usuario | null => {
  const data = localStorage.getItem("user");
  if (!data) {
    console.error("❌ No hay datos del usuario en localStorage");
    return null;
  }
  return JSON.parse(data) as Usuario;
};