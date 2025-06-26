import React from 'react';

const ServicesSection = () => {
  const services = [
    {
      title: 'Softwareentwicklung',
      description: 'Individuelle Softwarelösungen nach Maß für Ihre spezifischen Anforderungen.',
      icon: '💻'
    },
    {
      title: 'IT-Beratung',
      description: 'Strategische Beratung für Ihre digitale Transformation und IT-Infrastruktur.',
      icon: '📊'
    },
    {
      title: 'Webentwicklung',
      description: 'Moderne, responsive Websites und Webanwendungen mit aktuellen Technologien.',
      icon: '🌐'
    },
    {
      title: 'App-Entwicklung',
      description: 'Native und hybride Mobile Apps für iOS und Android.',
      icon: '📱'
    }
  ];

  return (
    <section id="services" className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-blue-900">Unsere Leistungen</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md hover:shadow-lg transition duration-300">
              <div className="text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-blue-900">{service.title}</h3>
              <p className="text-gray-700">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
