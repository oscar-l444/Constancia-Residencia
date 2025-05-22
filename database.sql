CREATE TABLE IF NOT EXISTS constancia_residencia (
  id SERIAL PRIMARY KEY,
  nombre_completo TEXT,
  lugar_nacimiento TEXT,
  fecha_nacimiento DATE,
  domicilio_actual TEXT,
  tiempo_residencia TEXT,
  telefono TEXT,
  domicilio_anterior TEXT,
  ocupacion TEXT,
  lugar_fecha TEXT,
  manifiesto BOOLEAN,
  documentos JSONB,
  fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
