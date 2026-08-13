import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Баня — школа рисования для взрослых и подростков в Москве",
  description: "Школа рисования для взрослых и подростков 14+: учим понимать рисунок, а не срисовывать. Бесплатное пробное занятие в Чертаново и Свиблово.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ru"><body>{children}</body></html>;
}
