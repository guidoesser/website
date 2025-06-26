import React from 'react';

const Header = () => {
  return (
    <header className="bg-card shadow-sm sticky top-0 z-50 border-b border-border">
      <div className="container mx-auto px-4 flex items-center justify-between h-20">
        <a href="/" className="text-2xl font-bold text-primary">
          <span className="text-accent">GUTRESS</span>-IT Solutions
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          <a href="/" className="text-muted-foreground hover:text-primary font-medium">
            Startseite
          </a>
          <a href="#services" className="text-muted-foreground hover:text-primary font-medium">
            Leistungen
          </a>
          <a href="#about" className="text-muted-foreground hover:text-primary font-medium">
            Über uns
          </a>
          <a href="#contact" className="text-muted-foreground hover:text-primary font-medium">
            Kontakt
          </a>
        </nav>
        <button className="md:hidden text-muted-foreground">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </header>
  );
};

export default Header;
