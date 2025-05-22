"use client";
import Image from "next/image";

export default function Beneficios() {
  const beneficios = [
    {
      src: "/fila.png",
      titulo: "No más filas",
      descripcion: "Evita filas, para hacer tus trámites y solicitudes.",
    },
    {
      src: "/tiempo.png",
      titulo: "Ahorra tiempo",
      descripcion:
        "Ya no tendrás que presentarte a las secretarías, ahorra tiempo y ocúpalo en otras actividades.",
    },
    {
      src: "/digital.png",
      titulo: "Es Digital",
      descripcion:
        "Haz los trámites en línea. Al estar enlazado con la Clave Única, ya no serán físicos.",
    },
  ];

  return (
    <section className="text-center py-10">
      <h3 className="text-2xl font-bold text-[#0b3b60] mb-6">¿Por qué usar la plataforma?</h3>
      <div className="flex justify-center gap-10 flex-wrap">
        {beneficios.map((b, i) => (
          <div key={i} className="w-64 text-center">
            <Image src={b.src} alt={b.titulo} width={64} height={64} className="mx-auto mb-3" />
            <h4 className="text-pink-700 font-semibold">{b.titulo}</h4>
            <p>{b.descripcion}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
