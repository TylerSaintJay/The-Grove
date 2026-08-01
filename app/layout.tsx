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
  title: "The Grove Reserve — Heritage Lot Section | Private Allocation Portal",
  metadataBase: new URL("https://reservegrove.shop"),
  description:
    "Curated 3.5g Micro-Batches. Nitrogen-sealed in 75mm × 22mm aluminum canisters with 24k gold foil and hand-textured linen labels. Reserved for the few.",
  keywords: [
    "The Grove Reserve",
    "heritage reserve",
    "luxury allocation",
    "nitrogen sealed",
    "micro batch",
    "serialized unit",
    "private member",
  ],
  openGraph: {
    title: "The Grove Reserve — Reserved for the Few",
    description:
      "Curated 3.5g Micro-Batches. Nitrogen-sealed in precision aluminum canisters with 24k gold foil.",
    url: "https://reservegrove.shop",
    siteName: "The Grove Reserve",
    type: "website",
    locale: "en_ZA",
    images: [
      {
        url: "/images/hero-canister.jpg",
        width: 1200,
        height: 630,
        alt: "The Grove Reserve Heritage Vessel",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Grove Reserve — Reserved for the Few",
    description:
      "Curated 3.5g Micro-Batches. Nitrogen-sealed in precision aluminum canisters.",
    images: ["/images/hero-canister.jpg"],
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
