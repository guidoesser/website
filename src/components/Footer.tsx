import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-card border-t border-border text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left"> {/* text-left hier hinzugefügt */}
          <div className="text-left"> {/* text-left für jede Spalte */}
            <h3 className="text-xl font-bold mb-4 text-accent">GUTRESS-IT Solutions</h3>
            <p className="mb-4 text-muted-foreground">
              Ihr Partner für individuelle IT-Lösungen und Softwareentwicklung.
            </p>
            <p className="text-muted-foreground">© {new Date().getFullYear()} GUTRESS-IT Solutions. Alle Rechte vorbehalten.</p>
          </div>
          <div className="text-left"> {/* text-left für jede Spalte */}
            <h4 className="text-lg font-bold mb-4">Kontakt</h4>
            <p className="mb-2 text-muted-foreground">Musterstraße 123</p>
            <p className="mb-2 text-muted-foreground">12345 Musterstadt</p>
            <p className="mb-2 text-muted-foreground">Tel: +49 123 456789</p>
            <p className="text-muted-foreground">Email: info@gutress.de</p>
          </div>
          <div className="text-left"> {/* text-left für jede Spalte */}
            <h4 className="text-lg font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li><a href="/impressum" className="text-muted-foreground hover:text-accent">Impressum</a></li>
              <li><a href="/datenschutz" className="text-muted-foreground hover:text-accent">Datenschutz</a></li>
              <li><a href="#" className="text-muted-foreground hover:text-accent">AGB</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
