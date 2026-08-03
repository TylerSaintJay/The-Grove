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

export default function Home() {
  const [isVerifyOpen, setIsVerifyOpen] = useState(false);

  return (
    <>
      {/* Age Verification Gate */}
      <AgeGate />

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
