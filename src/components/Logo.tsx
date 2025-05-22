import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/logo-sjr.png"  // Asegúrate de que esté en public/logo-sjr.png
      alt="Portal de Trámites San Juan del Río"
      width={180}
      height={50}
      className="cursor-pointer"
    />
  );
}
