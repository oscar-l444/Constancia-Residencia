"use client";
import Logo from "./Logo";
import UserButton from "./UserButton";
import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#0b3b60] text-white p-4">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Logo - Redirige a Home */}
        <Link href="/" className="flex items-center">
          <Logo />
        </Link>

        {/* Botón de Usuario */}
        <Link href="/login">
          <UserButton />
        </Link>
      </div>
    </header>
  );
}


