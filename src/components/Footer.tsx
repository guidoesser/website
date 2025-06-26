import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-blue-50 border-t border-border text-foreground py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
          <div className="text-left">
            <h3 className="text-xl font-bold mb-4 text-accent">
              GUTRESS-<span className="text-blue-500">IT Solutions</span>
            </h3>
            <p className="mb-4 text-muted-foreground">
              Ihr Partner für individuelle IT-Lösungen und Softwareentwicklung.
            </p>
            <p className="text-muted-foreground">© {new Date().getFullYear()} GUTRESS-IT Solutions. Alle Rechte vorbehalten.</p>
          </div>
          <div className="text-left">
            <h4 className="text-lg font-bold mb-4">Kontakt</h4>
            <p className="mb-2 text-muted-foreground">Zum Alten Bad 18</p>
            <p className="mb-2 text-muted-foreground">29229 Celle</p>
            <p className="mb-2 text-muted-foreground">Tel: +49 151 23 28 93 92</p>
            <p className="text-muted-foreground">Email: info@gutress.de</p>
          </div>
          <div className="text-left">
            <h4 className="text-lg font-bold mb-4">Rechtliches</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/impressum" className="text-muted-foreground hover:text-accent">
                  Impressum
                </Link>
              </li>
              <li>
                <Link to="/datenschutz" className="text-muted-foreground hover:text-accent">
                  Datenschutz
                </Link>
              </li>
              <li><a href="#" className="text-muted-foreground hover:text-accent">AGB</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
