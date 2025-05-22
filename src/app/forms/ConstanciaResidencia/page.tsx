'use client';

import { useState } from 'react';

export default function Home() {
  const [formData, setFormData] = useState({
    aceptaManifiesto: false,
  });

  const handleFileChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.files,
    }));
  };

  const handleChange = (e) => {
    const { name, type, checked, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleEnviarRevision = () => {
    if (!formData.aceptaManifiesto) {
      alert('Debes aceptar el manifiesto de veracidad.');
      return;
    }
    alert('Documentos enviados a revisión');
  };

  return (
    <main className="min-h-screen bg-blue-100 flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-3xl bg-gradient-to-br from-blue-50 to-blue-200 p-10 shadow-2xl rounded-2xl border border-blue-900">
        <div className="flex justify-center mb-6">
          <img src="sjr.jpg" alt="Logo SJR" className="h-16" />
        </div>

        <h1 className="text-3xl font-bold text-blue-900 text-center mb-4">
          Solicitud de Constancia de Residencia
        </h1>

        <div className="flex justify-center mb-8">
          <img
            src="/docs-necesarios.png"
            alt="Guía de Documentos"
            className="max-w-full h-auto rounded-lg border border-blue-300"
          />
        </div>

        <form className="space-y-6">
          {/* Datos personales */}
          {[
            { label: 'Nombre completo del solicitante', placeholder: 'Escribe tu nombre completo' },
            { label: 'Lugar de nacimiento', placeholder: 'Lugar de nacimiento' },
            { label: 'Fecha de nacimiento', type: 'date' },
            { label: 'Domicilio actual', placeholder: 'Calle, número, colonia' },
            { label: 'Tiempo de residencia en el domicilio actual', placeholder: 'Ejemplo: 2 años, 8 meses' },
            { label: 'Teléfono de contacto', placeholder: 'Número telefónico', type: 'tel' },
          ].map((item, i) => (
            <div key={i}>
              <label className="block font-semibold text-blue-900">{item.label}</label>
              <input
                type={item.type || 'text'}
                className="mt-1 w-full border border-blue-400 bg-white rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-700"
                placeholder={item.placeholder}
              />
            </div>
          ))}

          {/* Domicilio anterior */}
          <div className="border-t border-blue-300 pt-6">
            <label className="block font-semibold text-blue-800">Domicilio anterior (si aplica)</label>
            <input type="text" className="mt-1 w-full border border-blue-300 bg-blue-50 rounded-md px-4 py-2" />
          </div>
          <div>
            <label className="block font-semibold text-blue-800">Tiempo que viviste en el domicilio anterior</label>
            <input type="text" className="mt-1 w-full border border-blue-300 bg-blue-50 rounded-md px-4 py-2" />
          </div>

          {/* Ocupación */}
          <div>
            <label className="block font-semibold text-blue-900">Ocupación actual</label>
            <input type="text" className="mt-1 w-full border border-blue-400 bg-white rounded-md px-4 py-2" />
          </div>

          {/* Lugar y firma */}
          <div>
            <label className="block font-semibold text-blue-900">Lugar y fecha</label>
            <input
              type="text"
              className="mt-1 w-full border border-blue-300 bg-white rounded-md px-4 py-2"
              placeholder="San Juan del Río, Qro., a ___ de _________ de 20___"
            />
          </div>
          <div>
            <label className="block font-semibold text-blue-900">Firma del solicitante (e-firma)</label>
            <input
              type="text"
              className="mt-1 w-full border border-blue-300 bg-white rounded-md px-4 py-2"
              placeholder="Campo de firma electrónica"
            />
          </div>

          {/* Documentos */}
          <div className="space-y-4 mt-10">
            <h2 className="text-blue-900 font-bold text-xl">Documentos a Subir</h2>

            {[
              { label: 'Acta de nacimiento', name: 'actaNacimiento' },
              { label: 'Credencial para votar', name: 'credencial' },
              { label: 'Comprobante de domicilio', name: 'comprobante' },
              { label: 'Escrito de Testigo 1', name: 'testigo1' },
              { label: 'Escrito de Testigo 2', name: 'testigo2' },
              { label: 'Fotografía', name: 'foto' },
            ].map((doc, i) => (
              <div key={i}>
                <label className="block font-medium text-gray-700">{doc.label} <span className="text-red-500">*</span></label>
                <label className="bg-cyan-500 text-white font-bold px-4 py-2 rounded cursor-pointer hover:bg-cyan-600 inline-block mt-1">
                  Seleccionar archivo
                  <input type="file" name={doc.name} onChange={handleFileChange} className="hidden" />
                </label>
              </div>
            ))}
          </div>

          {/* Manifiesto de Veracidad */}
          <section className="pt-8">
            <h2 className="text-xl font-semibold text-cyan-800 mb-2">Manifiesto de Veracidad</h2>
            <div className="flex items-start gap-2">
              <input
                type="checkbox"
                name="aceptaManifiesto"
                checked={formData.aceptaManifiesto}
                onChange={handleChange}
                className="mt-1"
              />
              <label className="text-gray-800 text-sm">
                Declaro que toda la información proporcionada en esta solicitud y los documentos adjuntos son verídicos y auténticos.
                Entiendo que proporcionar información falsa puede tener consecuencias legales. <span className="text-rose-600">*</span>
              </label>
            </div>
          </section>

      {/* Botones */}
<div className="flex justify-between mt-6">
  <button
    type="submit"
    className="bg-blue-800 hover:bg-blue-900 text-white px-6 py-2 rounded shadow-md"
  >
    Enviar solicitud
  </button>

  <button
    type="button"
    className="bg-gray-400 hover:bg-gray-500 text-white px-6 py-2 rounded shadow-md"
    onClick={() => window.location.reload()}
  >
    Cancelar
  </button>
</div>

        </form>
      </div>
    </main>
  );
}
