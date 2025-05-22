import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";



export const metadata: Metadata = {
  title: "Portal de Trámites",
  description: "Portal de Tramites digitalizados",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className="font-sans bg-background text-foreground">
      <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
