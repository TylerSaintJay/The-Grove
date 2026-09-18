"use client";

import { useState } from "react";
import AgeGate from "./components/AgeGate";
import ScarcityTicker from "./components/ScarcityTicker";
import HeroSection from "./components/HeroSection";
import Catalog from "./components/Catalog";
import FulfillmentInfo from "./components/FulfillmentInfo";
import VaultAuthenticate from "./components/VaultAuthenticate";
import VerifyDrawer from "./components/VerifyDrawer";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import RefOverlay from "./components/RefOverlay";

export default function Home() {
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);

  return (
    <>
      {/* Age Verification Gate */}
      <AgeGate />

      {/* Navigation */}
      <Navbar />

      {/* Live Scarcity Ticker */}
      <ScarcityTicker />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section */}
        <HeroSection onOpenVerify={() => setIsVerifyOpen(true)} />

        {/* Catalog & Offer Section */}
        <Catalog />

        {/* Fulfillment & Delivery */}
        <FulfillmentInfo />

        {/* Vault Authentication */}
        <VaultAuthenticate />
      </main>

      {/* QR Reference Overlay */}
      <RefOverlay />

      {/* Footer */}
      <Footer />

      {/* Serial Verification Drawer */}
      <VerifyDrawer
        isOpen={isVerifyOpen}
        onClose={() => setIsVerifyOpen(false)}
      />
    </>
  );
}
