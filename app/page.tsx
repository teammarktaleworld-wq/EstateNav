'use client';

import React, { useState, useEffect } from 'react';
import { Header } from '@/components/Header';
import { HeroFold } from '@/components/HeroFold';
import { TelemetryTicker } from '@/components/TelemetryTicker';
import { DeveloperTrustBanner } from '@/components/DeveloperTrustBanner';
import { WorkspaceEngine } from '@/components/WorkspaceEngine';
import { LeadModal } from '@/components/LeadModal';
import { MobileBottomNav } from '@/components/MobileBottomNav';
import { Footer } from '@/components/Footer';
import { Segment, Property } from '@/lib/types';
import { getProperties } from '@/lib/firebase';
import { INITIAL_PROPERTIES } from '@/lib/mockData';

export default function Home() {
  // 1. Active Segment State (Residential, Commercial, Plotted)
  const [currentSegment, setCurrentSegment] = useState<Segment>('residential');

  // 2. Active Search Console selections
  const [selectedMicroMarket, setSelectedMicroMarket] = useState<string>('All Bengaluru Corridors');
  const [selectedBudget, setSelectedBudget] = useState<string>('Any Budget');

  // 3. Properties State (loaded via Firebase abstraction)
  const [properties, setProperties] = useState<Property[]>(INITIAL_PROPERTIES);

  // 4. Modal State
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [modalProperty, setModalProperty] = useState<Property | null>(null);
  const [modalActionTitle, setModalActionTitle] = useState<string>('Inspect Allocation Deck');

  // Reactive property loading on segment change
  useEffect(() => {
    let isMounted = true;
    async function loadData() {
      const data = await getProperties(currentSegment);
      if (isMounted) {
        setProperties(data);
      }
    }
    loadData();
    return () => {
      isMounted = false;
    };
  }, [currentSegment]);

  // Handle Spotlight Inspect
  const handleInspectSpotlight = () => {
    const spotlightItem = properties.find((p) => p.isAnchorSpotlight) || properties[0];
    setModalProperty(spotlightItem || null);
    setModalActionTitle('Inspect Allocation Deck');
    setIsModalOpen(true);
  };

  // Handle Property Card Inspect
  const handleInspectProperty = (property: Property) => {
    setModalProperty(property);
    setModalActionTitle(`Inspect Allocation Deck: ${property.name}`);
    setIsModalOpen(true);
  };

  // Handle VIP Tour Booking
  const handleOpenVipTour = () => {
    setModalProperty(null);
    setModalActionTitle('Schedule Guided VIP Site Visit');
    setIsModalOpen(true);
  };

  // Handle Unlock Direct Developer Pricing
  const handleUnlockDeveloperPricing = () => {
    setModalProperty(null);
    setModalActionTitle('Unlock Direct Developer Pricing Sheet');
    setIsModalOpen(true);
  };

  // Scroll to interactive workspace
  const handleScrollToWorkspace = () => {
    const el = document.getElementById('workspace');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-canvas-950 text-slate-100">
      
      {/* Global State-Driven Navbar */}
      <Header
        currentSegment={currentSegment}
        onSegmentChange={setCurrentSegment}
        onOpenVipModal={handleOpenVipTour}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        
        {/* Fold 1: Asymmetric Hero Showcase */}
        <HeroFold
          segment={currentSegment}
          selectedMicroMarket={selectedMicroMarket}
          onMicroMarketChange={setSelectedMicroMarket}
          selectedBudget={selectedBudget}
          onBudgetChange={setSelectedBudget}
          onSearchClick={handleScrollToWorkspace}
          onInspectSpotlight={handleInspectSpotlight}
        />

        {/* Fold 2: Dynamic Corridor Telemetry Ticker */}
        <TelemetryTicker />

        {/* Fold 3: Inlined Abhee Ventures Partnership Section */}
        <DeveloperTrustBanner
          onUnlockPricing={handleUnlockDeveloperPricing}
        />

        {/* Fold 4: Split Workspace Engine (Tools Left / Grid Right) */}
        <WorkspaceEngine
          properties={properties}
          onInspectProperty={handleInspectProperty}
          initialMicroMarket={selectedMicroMarket}
          initialBudget={selectedBudget}
        />

      </main>

      {/* Immutable Regulatory Footer */}
      <Footer />

      {/* App-Style Fixed Mobile Bottom Nav */}
      <MobileBottomNav
        onOpenVipModal={handleOpenVipTour}
      />

      {/* Consultative Lead Capture Modal */}
      <LeadModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedProperty={modalProperty}
        actionTitle={modalActionTitle}
      />

    </div>
  );
}

