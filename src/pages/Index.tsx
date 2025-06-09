import React from "react";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import InstagramFeed from "../components/InstagramFeed";
import EventsSection from "../components/EventsSection";
import Footer from "../components/Footer";
import CarouselSection from "../components/CarouselSection";
import ComplaintsSection from "../components/ComplaintsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-r from-[#F59E0B] via-[#FBBF24] to-[#D97706]">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <CarouselSection />
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* About Section - Left */}
          <div className="lg:col-span-4">
            <AboutSection />
          </div>

          {/* Instagram Feed - Center */}
          <div className="lg:col-span-5">
            <InstagramFeed />
          </div>

          {/* Complaints Section (above Events) - Right */}
          <div className="lg:col-span-3">
            <ComplaintsSection />
            <div className="mt-6">
              <EventsSection />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
