import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AOW Jiu-Jitsu | Treine com propósito",
  description:
    "Disciplina, técnica e comunidade em cada faixa. Encontre o polo mais perto de você.",
  openGraph: {
    title: "[AOW-Jiu-jitsu] ",
    description: "Treine com propósito. Evolua com a gente.",
    type: "website",
    locale: "pt_BR",
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
