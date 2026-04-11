import { Nunito } from "next/font/google";
import "./globals.css";

// Cargamos la fuente Nunito por ser amigable, redonda, transmite calma.
const nunito = Nunito({ 
  subsets: ["latin"],
  weight: ['400', '600', '700', '800'],
  variable: '--font-nunito'
});

export const metadata = {
  title: "Primeros Bocados | Guía paso a paso",
  description: "Una guía práctica para mamás que están empezando la alimentación complementaria, con instrucciones claras, en español y adaptadas a la edad exacta de tu bebé.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  openGraph: {
    title: "Primeros Bocados | Guía paso a paso",
    description: "Una guía práctica para mamás que están empezando la alimentación complementaria.",
    images: ["/favicon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={nunito.variable}>
      <head>
        {/* Aquí puedes inyectar tu código de Meta Pixel Script una vez que lo tengas */}
        {/* <script dangerouslySetInnerHTML={{ __html: `...`}} /> */}
      </head>
      <body className="overflow-x-hidden antialiased text-foreground bg-background">
        {children}
      </body>
    </html>
  );
}
