import { NextResponse } from 'next/server';
import { sql } from '@vercel/postgres'; // Importa la función sql

export async function GET() {
  try {
    // Realiza una consulta simple para obtener la hora actual del servidor de la BD
    // La función `sql` es una "tagged template literal" que ayuda a prevenir inyecciones SQL
    // para valores interpolados.
    const { rows } = await sql`SELECT NOW() as now;`;

    // `rows` será un array de objetos, en este caso, con un solo objeto y una propiedad `now`.
    const currentTime = rows[0]?.now;

    return NextResponse.json({
      message: 'Conexión con @vercel/postgres exitosa!',
      currentTime: currentTime,
    });
  } catch (error) {
    console.error('Error al conectar a la base de datos con @vercel/postgres:', error);
    return NextResponse.json(
      {
        message: 'Error al conectar a la base de datos con @vercel/postgres',
        error: (error as Error).message,
      },
      { status: 500 }
    );
  }
}