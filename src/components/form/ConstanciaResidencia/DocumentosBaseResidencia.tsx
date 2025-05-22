"use client";

import React from "react";

interface DocumentoBaseProps {
  documentos: {
    nombre: string;
    etiqueta: string;
    url?: string;
    requerido?: boolean;
  }[];
  onArchivoChange: (nombre: string, archivo: File | null) => void;
}

const DocumentosBaseResidencia: React.FC<DocumentoBaseProps> = ({ documentos, onArchivoChange }) => {
  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold text-blue-800">Documentos del Solicitante</h2>

      {documentos.map((doc) => (
        <div key={doc.nombre} className="space-y-1">
          <label className="block font-medium text-gray-700">
            {doc.etiqueta} {doc.requerido && <span className="text-red-500">*</span>}
          </label>

          {doc.url && (
            <p className="text-sm text-green-600">
              Documento ya cargado: <a href={doc.url} target="_blank" className="underline text-blue-600">Ver archivo</a>
            </p>
          )}

          <input
            type="file"
            name={doc.nombre}
            onChange={(e) => onArchivoChange(doc.nombre, e.target.files?.[0] || null)}
            className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:bg-cyan-500 file:text-white hover:file:bg-cyan-600"
          />
        </div>
      ))}
    </div>
  );
};

export default DocumentosBaseResidencia;
