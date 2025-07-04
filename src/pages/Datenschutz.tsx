import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Datenschutz = () => {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Datenschutzerklärung</h1>
        <div className="prose max-w-none">
          <h2>1. Datenschutz auf einen Blick</h2>
          <h3>Allgemeine Hinweise</h3>
          <p>
            Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen.
          </p>
          
          <h2>2. Hosting</h2>
          <p>
            Unser Hoster erhebt in sog. Logfiles folgende Daten, die Ihr Browser übermittelt:
          </p>
          <ul>
            <li>IP-Adresse</li>
            <li>Datum und Uhrzeit der Anfrage</li>
            <li>Verwendeter Browser und Betriebssystem</li>
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
