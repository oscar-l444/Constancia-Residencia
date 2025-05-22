import { NextResponse } from 'next/server';
import { Pool } from 'pg';

const pool = new Pool({
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: Number(process.env.PGPORT),
});

export async function POST(req: Request) {
  try {
    const data = await req.json();

    const {
      nombre,
      lugarNacimiento,
      fechaNacimiento,
      domicilioActual,
      tiempoResidencia,
      telefono,
      domicilioAnterior,
      ocupacion,
      lugarFecha,
      manifiesto
    } = data;

    const result = await pool.query(
      `INSERT INTO constancia_residencia (
        nombre, lugar_nacimiento, fecha_nacimiento,
        domicilio_actual, tiempo_residencia, telefono,
        domicilio_anterior, ocupacion, lugar_fecha, manifiesto
      ) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *`,
      [nombre, lugarNacimiento, fechaNacimiento, domicilioActual, tiempoResidencia, telefono, domicilioAnterior, ocupacion, lugarFecha, manifiesto]
    );

    return NextResponse.json({ success: true, data: result.rows[0] });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ success: false, error: 'Error al guardar la solicitud' }, { status: 500 });
  }
}
