import type { Metadata, Viewport } from "next";
import { Playfair_Display, Plus_Jakarta_Sans, Cinzel, Outfit } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

const cinzel = Cinzel({
  variable: "--font-cinzel-var",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "The Grove Reserve — LOT 001 | Hand-Crafted Luxury Pre-Roll Tubes",
  metadataBase: new URL("https://reservegrove.shop"),
  description:
    "Limited-run hand-crafted pre-roll tubes. White Widow • AAA — nitrogen-purged, tactile brushed vinyl, gold foil serialized. LOT SECTION: 001. Reserved for the few.",
  keywords: [
    "The Grove Reserve",
    "luxury pre-rolls",
    "pre-roll tubes",
    "White Widow AAA",
    "LOT 001",
    "heritage reserve",
    "private allocation",
    "Johannesburg delivery",
    "premium cannabis",
    "South Africa dispensary",
  ],
  openGraph: {
    title: "The Grove Reserve — LOT 001 Hand-Crafted Pre-Roll Tubes",
    description:
      "White Widow • AAA. Nitrogen-purged, tactile brushed vinyl pop-top tubes with gold foil serial authentication. Reserved for connoisseurs.",
    url: "https://reservegrove.shop",
    siteName: "The Grove Reserve",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/images/preroll-single.png",
        width: 1200,
        height: 1200,
        alt: "The Grove Reserve Pre-Roll Tube — LOT 001",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Grove Reserve — LOT 001",
    description:
      "White Widow • AAA. Hand-crafted pre-roll tubes. Gold foil serialized. Private allocation now open.",
    images: ["/images/preroll-single.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0A231C",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${playfair.variable} ${jakarta.variable} ${cinzel.variable} ${outfit.variable} h-full antialiased`}
    >
      <head>
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />
      </head>
      <body
        suppressHydrationWarning
        className="min-h-full flex flex-col bg-grove-deep text-grove-silk font-sans selection:bg-[#C5A059]/30 selection:text-white"
      >
        {children}
      </body>
    </html>
  );
}
