import Link from "next/link";

export default function LoginFooter() {
  return (
    <footer className="text-center mt-4 text-sm text-gray-500">
      ¿Olvidaste tu contraseña?{" "}
      <Link href="/recuperar-password" className="text-primary hover:underline">
        Recuperar
      </Link>
    </footer>
  );
}
