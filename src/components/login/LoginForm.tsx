"use client";

import { useState } from "react";
import { loginCUS } from "@/services/cusService";
import { useRouter } from "next/navigation";

export default function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");

    console.log("📌 Enviando datos:", username, password);

    const usuario = await loginCUS(username, password);
    console.log(usuario)
    if (usuario) {
      alert(`Bienvenido, ${usuario.nombre} ${usuario.apellido}`);
      router.push("/tramites"); // ✅ Redirige al panel de trámites
    } else {
      setError("Credenciales incorrectas o usuario no encontrado.");
    }
  };

  return (
    <form onSubmit={handleLogin} className="space-y-6 mt-6">
      {error && <p className="text-red-500">{error}</p>}

      <div>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="mt-1 block w-full px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          placeholder="Username"
          required
        />
      </div>

      <div>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 block w-full px-4 py-3 border rounded-full shadow-sm focus:outline-none focus:ring-primary focus:border-primary"
          placeholder="Contraseña"
          required
        />
      </div>

      <button
        type="submit"
        className="w-full bg-[#0b3b60] text-white py-3 rounded-full hover:bg-blue-800 transition"
      >
        Iniciar Sesión
      </button>
    </form>
  );
}
