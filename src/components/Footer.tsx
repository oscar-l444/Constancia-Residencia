import Image from "next/image";
import FooterColumn from "./FooterColumn";

export default function Footer() {
  return (
    <footer className="bg-[#073a4c] text-white p-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8">
        {/* Logo y descripción */}
        <div className="flex flex-col items-start">
          <Image
            src="/heraldica_blanca.png" // Asegúrate de que esté en public/logo-sjr.png
            alt="San Juan del Río"
            width={100}
            height={100}
          />

        </div>

        {/* Sitios de Interés */}
        <FooterColumn
          title="Sitios de Interés"
          links={[
            { name: "DIF Municipal", href: "https://www.dif.sanjuandelrio.gob.mx/" },
            { name: "IMM", href: "https://imm.sanjuandelrio.gob.mx/" },
            { name: "JAPAM", href: "https://www.japam.gob.mx/" },
            { name: "Gobierno del Estado", href: "https://www.queretaro.gob.mx/" },
            { name: "Gobierno Federal", href: "https://www.gob.mx/" },
          ]}
        />

        {/* Contacto */}
        <FooterColumn
          title="Contáctanos"
          links={[
            {
              name: "Blvd. Paso de los Guzmán No. 24, Barrio de la Concepción. C.P. 76803, San Juan del Río Querétaro.",
              href: "#",
            },
            {
              name: "Teléfono: (427) 689 0012",
              href: "tel:+524276890012",
            },
          ]}
        />

        {/* Atención Ciudadana */}
        <FooterColumn
          title="Atención Ciudadana"
          links={[{ name: "Escríbenos un correo.", href: "#" }]}
        />

        {/* Legal */}
        <FooterColumn
          title="Legal"
          links={[{ name: "Aviso de Privacidad", href: "#" }]}
        />

        {/* Quejas y Denuncias */}
        <FooterColumn
          title="Quejas o Sugerencias para portal Web"
          links={[{ name: "Escríbenos un correo.", href: "#" }]}
        />
        <FooterColumn
          title="Denuncia Ciudadana"
          links={[{ name: "Llenar Formulario.", href: "#" }]}
        />
      </div>
      <div></div>
     
    </footer>
  );
}
