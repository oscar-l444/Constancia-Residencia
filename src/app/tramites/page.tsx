// 📌 Archivo: /app/tramites/page.tsx
"use client";

import { useEffect, useState } from "react";
import TramitesInfo from "@/components/tramites/TramitesInfo";
import UserHeader from "@/components/tramites/UserHeader";
import TramitesLista from "@/components/tramites/TramitesLista";
import { getTramitesInfo, TramiteInfo } from "@/services/tramitesService";
import DocumentosBaseResidencia from "@/components/form/ConstanciaResidencia/DocumentosBaseResidencia";


export default function TramitesPage() {
  const [info, setInfo] = useState<TramiteInfo | null>(null);

  useEffect(() => {
    const fetchInfo = async () => {
      const data = await getTramitesInfo();
      if (data) {
        setInfo(data);
      }
    };

    fetchInfo();
  }, []);

  return (
    <main className="max-w-7xl mx-auto p-6 space-y-6">
      <UserHeader />
      {info ? (
        <>
          <TramitesInfo info={info} />
          <TramitesLista />
        </>
      ) : (
        <p className="text-gray-600">Cargando información...</p>
      )}
    </main>
  );
}
