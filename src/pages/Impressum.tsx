import React from 'react'

const Impressum = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Impressum</h1>
      <div className="prose max-w-none">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p>
          GUTRESS-IT Solutions<br />
          Zum Alten Bad 18<br />
          29229 Celle
        </p>
        
        <h2>Kontakt</h2>
        <p>
          Telefon: +49 151 23 28 93 92<br />
          E-Mail: info@gutress.de
        </p>
        
        <h2>Umsatzsteuer-ID</h2>
        <p>
          Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:<br />
          DE123456789
        </p>
      </div>
    </div>
  )
}

export default Impressum
