import React from 'react';

const AboutSection = () => {
  return (
    <section id="about" className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img 
              src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg" 
              alt="Team meeting" 
              className="rounded-lg shadow-lg w-full"
            />
          </div>
          <div className="md:w-1/2 text-left">
            <h2 className="text-3xl font-bold mb-6 text-primary">Über uns</h2>
            <p className="text-muted-foreground mb-4">
              GUTRESS-IT Solutions steht für kompetente IT-Beratung und maßgeschneiderte Softwarelösungen. 
              Unser Team aus erfahrenen Entwicklern und Beratern unterstützt Sie bei der 
              Digitalisierung Ihrer Geschäftsprozesse.
            </p>
            <p className="text-muted-foreground mb-4">
              Mit unserer langjährigen Erfahrung in verschiedenen Branchen bieten wir Ihnen 
              individuelle Lösungen, die genau auf Ihre Anforderungen zugeschnitten sind.
            </p>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span className="text-muted-foreground">Mehr als 10 Jahre Erfahrung</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span className="text-muted-foreground">Individuelle Lösungen</span>
              </li>
              <li className="flex items-center">
                <span className="text-accent mr-2">✓</span>
                <span className="text-muted-foreground">Transparente Kommunikation</span>
              </li>
            </ul>
            <button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold py-3 px-6 rounded-lg transition duration-300">
              Mehr erfahren
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
