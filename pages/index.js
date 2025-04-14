import { useState } from 'react';

const produse = [
  {
    categorie: "Console",
    cod: "AVE-Cons 101",
    denumire: "Consolă Clasică",
    dimensiune: "200x150 mm",
    pret: 75
  },
  {
    categorie: "Geam",
    cod: "AVE-101",
    denumire: "Ancadrament sus",
    dimensiune: "85x40 mm",
    pret: 95
  },
  {
    categorie: "Geam",
    cod: "AVE-102",
    denumire: "Ancadrament lateral",
    dimensiune: "120x35 mm",
    pret: 105
  },
  {
    categorie: "Geam",
    cod: "AVE-103",
    denumire: "Ancadrament jos",
    dimensiune: "100x50 mm",
    pret: 110
  },
  {
    categorie: "Soclu",
    cod: "AVE-500",
    denumire: "Profil Soclu",
    dimensiune: "180x60 mm",
    pret: 70
  }
];

export default function Home() {
  const [selectat, setSelectat] = useState('');

  const categorii = [...new Set(produse.map(p => p.categorie))];

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial', maxWidth: 800, margin: 'auto' }}>
      <h1>Calculator AVEPE</h1>

      {categorii.map(cat => (
        <div key={cat} style={{ marginBottom: '1.5rem' }}>
          <h3>{cat}</h3>
          <select
            onChange={(e) => setSelectat(e.target.value)}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="">-- Selectează {cat} --</option>
            {produse.filter(p => p.categorie === cat).map(p => (
              <option key={p.cod} value={p.cod}>
                {p.cod} – {p.denumire} ({p.dimensiune}) – {p.pret} MDL
              </option>
            ))}
          </select>
        </div>
      ))}

      {selectat && (
        <p style={{ marginTop: '2rem' }}>
          Produs selectat: <strong>{selectat}</strong>
        </p>
      )}
    </div>
  );
}
