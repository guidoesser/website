import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Impressum = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Impressum & Redaktionelle Verantwortung</h1>
        
        <div className="prose max-w-4xl">
          <h2 className="text-2xl font-semibold text-blue-800 mt-6 mb-4">Angaben gemäß § 5 TMG</h2>
          <p>
            <strong>GUSE-IT GmbH</strong><br />
            Musterstraße 123<br />
            12345 Musterstadt
          </p>
          
          <p className="mt-4">
            <strong>Vertreten durch:</strong><br />
            Geschäftsführer: Max Mustermann
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">Kontakt</h2>
          <p>
            Telefon: +49 (0) 123 456789<br />
            E-Mail: info@guse-it.com
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">Registereintrag</h2>
          <p>
            Eintragung im Handelsregister.<br />
            Registergericht: Amtsgericht Musterstadt<br />
            Registernummer: HRB 12345
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">Umsatzsteuer-ID</h2>
          <p>
            Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
            DE123456789
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">Redaktionell Verantwortlicher</h2>
          <p>
            Max Mustermann<br />
            Musterstraße 123<br />
            12345 Musterstadt
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">Berufsbezeichnung und berufsrechtliche Regelungen</h2>
          <p>
            Berufsbezeichnung: IT-Dienstleister<br />
            Zuständige Kammer: IHK Musterstadt<br />
            Verliehen in: Deutschland
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">EU-Streitschlichtung</h2>
          <p>
            Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:<br />
            <a href="https://ec.europa.eu/consumers/odr/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              https://ec.europa.eu/consumers/odr/
            </a><br />
            Unsere E-Mail-Adresse finden Sie oben im Impressum.
          </p>
          
          <h2 className="text-2xl font-semibold text-blue-800 mt-8 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h2>
          <p>
            Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Impressum;
