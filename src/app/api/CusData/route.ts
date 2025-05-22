import { NextResponse } from "next/server";

// ✅ Interfaz para los datos del usuario
interface CusData {
  id: number;
  nombre: string;
  apellido: string;
  curp: string;
  email: string;
  telefono: string;
  direccion: string;
}

// ✅ Simulación de datos (esto podría venir de una DB real)
const cusData: CusData = {
  id: 1,
  nombre: "Juan Pérez",
  apellido: "García",
  curp: "PERJ890112HDFLRN09",
  email: "juan.perez@correo.com",
  telefono: "4271234567",
  direccion: "Calle 123, San Juan del Río, Querétaro",
};

// ✅ Método GET para obtener la información del usuario
export async function GET() {
  try {
    return NextResponse.json({ success: true, data: cusData });
  } catch (error) {
    console.error("Error al obtener los datos:", error);
    return NextResponse.json(
      { success: false, error: "Error al obtener los datos" },
      { status: 500 }
    );
  }
}
