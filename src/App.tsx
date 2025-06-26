import React from 'react';
import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import ServicesSection from './components/ServicesSection';
import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

function App() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="hero bg-gradient-to-r from-primary to-secondary py-24 text-center text-primary-foreground">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">IT-Beratung & Softwareentwicklung</h1>
            <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
              Individuelle Lösungen für Ihre digitalen Herausforderungen
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold py-3 px-6 rounded-lg transition duration-300">
                Unsere Leistungen
              </button>
              <button className="bg-transparent hover:bg-primary/10 text-primary-foreground font-bold py-3 px-6 border-2 border-primary-foreground rounded-lg transition duration-300">
                Kontakt aufnehmen
              </button>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <ServicesSection />

        {/* About Section */}
        <AboutSection />

        {/* Contact Section */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
