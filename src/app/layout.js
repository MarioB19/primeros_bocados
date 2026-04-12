import { Nunito } from "next/font/google";
import Script from "next/script";
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

// META PIXEL ID — reemplaza este valor cuando lo tengas
const META_PIXEL_ID = "TU_PIXEL_ID_AQUI";

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={nunito.variable}>
      <body className="overflow-x-hidden antialiased text-foreground bg-background">
        {children}

        {/* ── Meta Pixel ── */}
        <Script
          id="meta-pixel"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              !function(f,b,e,v,n,t,s)
              {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
              n.callMethod.apply(n,arguments):n.queue.push(arguments)};
              if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
              n.queue=[];t=b.createElement(e);t.async=!0;
              t.src=v;s=b.getElementsByTagName(e)[0];
              s.parentNode.insertBefore(t,s)}(window, document,'script',
              'https://connect.facebook.net/en_US/fbevents.js');
              fbq('init', '${META_PIXEL_ID}');
              fbq('track', 'PageView');
            `,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height="1"
            width="1"
            style={{ display: "none" }}
            src={`https://www.facebook.com/tr?id=${META_PIXEL_ID}&ev=PageView&noscript=1`}
            alt=""
          />
        </noscript>
      </body>
    </html>
  );
}
