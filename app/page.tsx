"use client";

import { useState } from "react";
import AgeGate from "./components/AgeGate";
import ScarcityTicker from "./components/ScarcityTicker";
import HeroSection from "./components/HeroSection";
import CanisterShowcase from "./components/CanisterShowcase";
import VaultAuthenticate from "./components/VaultAuthenticate";
import CheckoutModal from "./components/CheckoutModal";
import Footer from "./components/Footer";

export default function Home() {
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  return (
    <>
      {/* Age Verification Gate */}
      <AgeGate />

      {/* Live Scarcity Ticker */}
      <ScarcityTicker />

      {/* Main Content */}
      <main className="flex-1">
        {/* Hero Section with Countdown */}
        <HeroSection onOpenCheckout={() => setIsCheckoutOpen(true)} />

        {/* Canister Bento Showcase & Product Catalog */}
        <CanisterShowcase onOpenCheckout={() => setIsCheckoutOpen(true)} />

        {/* Vault Authenticate Engine */}
        <VaultAuthenticate />
      </main>

      {/* Footer */}
      <Footer />

      {/* WhatsApp Checkout Modal */}
      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
}
