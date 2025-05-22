import Image from "next/image";

export default function LoginHeader() {
  return (
    <header className="bg-primary text-white p-3 rounded-t-lg text-center relative">
      <div className="flex justify-center">
        <Image
          src="/heraldica.png" // Asegúrate de colocarlo en public/logo-sjr.png
          alt="Logo SJR"
          width={100}
          height={100}
          className="rounded-full "
        />
      </div>
      <h2 className="text-2xl text-[#0b3b60] font-bold mb-2">INICIAR SESIÓN</h2>
      <p className="text-[#0b3b60]">Inserta los datos de acceso de la Clave Unica Sanjuanense</p>

    </header>
  );
}
