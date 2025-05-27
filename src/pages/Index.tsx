import React from "react";
import Header from "../components/Header";
import AboutSection from "../components/AboutSection";
import InstagramFeed from "../components/InstagramFeed";
import EventsSection from "../components/EventsSection";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FFB300] to-[#FF6F00]">
      <Header />

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* About Section - Left */}
          <div className="lg:col-span-4">
            <AboutSection />
          </div>

          {/* Instagram Feed - Center */}
          <div className="lg:col-span-5">
            <InstagramFeed />
          </div>

          {/* Events Section - Right */}
          <div className="lg:col-span-3">
            <EventsSection />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
