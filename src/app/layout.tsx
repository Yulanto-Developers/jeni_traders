
import "@css/swiper-bundle.min.css";
import "@css/animate.css";
import "@css/bootstrap.min.css";
import "@css/font-awesome.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
import "@css/magnific-popup.css";
import "@css/meanmenu.css";
import "@css/nice-select.css";
import "@css/main.css";
import "@css/custome.css";
import type { Metadata } from "next";
import { Chelsea_Market, DM_Sans } from "next/font/google";
import "./globals.css";
// import Preloader from "@/layout/Preloader";
import "bootstrap/dist/css/bootstrap.min.css";
import ClientPreloader from "@/components/ClientPreloader";
import { FloatingWhatsApp, FloatingCall } from "@/components/FloatingWhatsApp";
import Script from "next/script";
import { Suspense } from "react";
import GoogleAnalytics from "@/components/GoogleAnalytics";


// const Preloader = dynamic(() => import("@/layout/Preloader"), {
//   ssr: false,
// });

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
});
const chelsea_market = Chelsea_Market({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-chelsea_market",
});

export const metadata: Metadata = {
  other: {
    "geo.region": "IN-TN",
    "geo.placename": "Chennai",
    "geo.position": "12.9606;80.1967",
    ICBM: "12.9606, 80.1967",
  },
  verification: {
    google: "o9S07-qh1TRIFJ7QtvAYLGJCkHTW7QES_JihQo2SePY"
  },
  icons: {
    icon: "/assets/img/logo/Logo-6.png",
  }
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {/* Google Analytics */}
      <Script
        src="https://www.googletagmanager.com/gtag/js?id=G-ZZVM9Q3B5F"
        strategy="afterInteractive"
      />

      <Script id="ga-init" strategy="afterInteractive">
        {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-ZZVM9Q3B5F');
          `}
      </Script>
      <Script id="gtm-head" strategy="afterInteractive">
        {`
    (function(w,d,s,l,i){w[l]=w[l]||[];
    w[l].push({'gtm.start': new Date().getTime(),event:'gtm.js'});
    var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';
    j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;
    f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-WV4PS5GB');
  `}
      </Script>


      <body className={`${chelsea_market.variable} ${dmSans.variable}`}>

        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-WV4PS5GB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* {children} */}
        <Suspense fallback={null}>
          <GoogleAnalytics />
        </Suspense>
        <ClientPreloader />
        <FloatingWhatsApp />
        <FloatingCall />
        {children}
      </body>
    </html>
  );
}
