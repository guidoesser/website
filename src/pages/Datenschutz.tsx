import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Datenschutz = () => {
  return (
    <div className="bg-gray-50 min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-900 mb-8">Datenschutzerklärung</h1>
        
        <div className="prose max-w-4xl">
          {/* ... (vorheriger Inhalt bleibt gleich) ... */}
          
          <h3 className="text-xl font-semibold text-blue-700 mt-4 mb-2">Hinweis zur verantwortlichen Stelle</h3>
          <p>
            Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br />
            <br />
            GUTRESS-IT Solutions GmbH<br />
            Musterstraße 123<br />
            12345 Musterstadt<br />
            <br />
            Telefon: +49 (0) 123 456789<br />
            E-Mail: info@gutress.de
          </p>
          
          {/* ... (restlicher Inhalt bleibt gleich) ... */}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Datenschutz;
