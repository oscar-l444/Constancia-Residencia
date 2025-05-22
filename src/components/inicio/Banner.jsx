"use client";
import Image from "next/image";

export default function Banner() {
  return (
    <section className="relative h-[320px] w-full overflow-hidden">
      <Image
        src="/banner-bg.png" 
        alt="Banner trámites"
        fill
        className="object-cover"
        priority
      />

      <div className="absolute inset-0 bg-primary bg-opacity-60 backdrop-blur-sm" />

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-white text-center px-4">
        <h1 className="text-3xl font-bold mb-2">Bienvenido a Trámites San Juan del Río.</h1>
        <p className="max-w-2xl text-sm sm:text-base">
          El portal oficial de los trámites del municipio de San Juan del Río, aquí se encuentran los trámites que ofrecen las distintas dependencias.
        </p>
      </div>
    </section>
  );
}