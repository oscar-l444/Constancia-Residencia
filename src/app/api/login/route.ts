import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";

// Clave secreta (en un entorno real, debería estar en una variable de entorno)
const SECRET_KEY = "mi_clave_secreta_super_segura";

interface LoginRequest {
  curp: string;
  password: string;
}

export async function POST(request: Request) {
  try {
    const body: LoginRequest = await request.json();

    // Aquí haces la validación contra tu base de datos:
    if (body.curp === "PERJ890112HDFLRN09" && body.password === "12345") {
      // Generar un token JWT
      const token = jwt.sign({ curp: body.curp }, SECRET_KEY, { expiresIn: "1h" });

      return NextResponse.json({
        success: true,
        token,
        message: "Inicio de sesión exitoso",
      });
    } else {
      return NextResponse.json(
        { success: false, message: "Credenciales incorrectas" },
        { status: 401 }
      );
    }
  } catch (error) {
    return NextResponse.json(
      { success: false, message: "Error en el servidor" },
      { status: 500 }
    );
  }
}
