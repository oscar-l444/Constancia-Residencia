import { TramiteInfo } from "@/services/tramitesService";

interface Props {
  info: TramiteInfo;
}

export default function TramitesInfo({ info }: Props) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md mb-4">
      <h3 className="text-lg font-bold mb-2">Información del Usuario</h3>
      <p><strong>Nombre:</strong> {info.nombre} {info.apellido}</p>
      <p><strong>CURP:</strong> {info.curp}</p>
      <p><strong>Email:</strong> {info.email}</p>
      <p><strong>Teléfono:</strong> {info.telefono}</p>
      <p><strong>Dirección:</strong> {info.direccion}</p>
      <p><strong>Rol:</strong> {info.role}</p>
      <p><strong>Permisos:</strong> {info.permisos.join(", ")}</p>
    </div>
  );
}
