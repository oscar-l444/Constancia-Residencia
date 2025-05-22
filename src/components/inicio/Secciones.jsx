"use client";
import {
  FaFileAlt,
  FaClipboardCheck,
  FaGavel,
  FaBullhorn,
} from "react-icons/fa";

const servicios = [
  {
    titulo: "Trámites y Servicios",
    descripcion:
      "Consulta información sobre requisitos, pasos, costos y tiempos para solicitar un trámite o servicio.",
    icono: <FaFileAlt size={28} />,
  },
  {
    titulo: "Inspecciones e inspectores",
    descripcion:
      "Conoce el padrón de servidores públicos facultados para realizar inspecciones y el listado de estas.",
    icono: <FaClipboardCheck size={28} />,
  },
  {
    titulo: "Regulaciones",
    descripcion:
      "Infórmate sobre leyes, reglamentos, códigos, acuerdos, lineamientos y otros documentos jurídicos.",
    icono: <FaGavel size={28} />,
  },
  {
    titulo: "Protesta Ciudadana",
    descripcion:
      "Preséntala si se incumple con la información de trámites e inspecciones establecida en este catálogo.",
    icono: <FaBullhorn size={28} />,
  },
];

export default function ServiciosGrid() {
  return (
    <section className="py-12 bg-gray-50">
      <h3 className="font-sans text-3xl font-bold text-primary text-center mb-10">
        Consulta por categoría
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 max-w-7xl mx-auto px-4">
        {servicios.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md  hover:shadow-xl transform hover:scale-105 transition-all duration-300 p-6 flex flex-col items-center text-center"
          >
            <div className="bg-blue-900 p-4 rounded-full mb-4 text-white shadow">
              {item.icono}
            </div>
            <h4 className="font-sans text-blue-900 text-lg font-semibold mb-2">
              {item.titulo}
            </h4>
            <p className="font-sans text-sm text-gray-700">{item.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
