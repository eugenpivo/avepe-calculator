import { useState } from 'react';

const produse = [
  {
    categorie: "Console",
    cod: "AVE-Cons 101",
    denumire: "Consolă Clasică",
    dimensiune: "200x150 mm",
    pret: 75,
    um: "buc"
  },
  {
    categorie: "Geam",
    cod: "AVE-101",
    denumire: "Ancadrament sus",
    dimensiune: "85x40 mm",
    pret: 95,
    um: "ml"
  },
  {
    categorie: "Geam",
    cod: "AVE-102",
    denumire: "Ancadrament lateral",
    dimensiune: "120x35 mm",
    pret: 105,
    um: "ml"
  },
  {
    categorie: "Geam",
    cod: "AVE-103",
    denumire: "Ancadrament jos",
    dimensiune: "100x50 mm",
    pret: 110,
    um: "ml"
  },
  {
    categorie: "Soclu",
    cod: "AVE-500",
    denumire: "Profil Soclu",
    dimensiune: "180x60 mm",
    pret: 70,
    um: "ml"
  }
];

export default function Home() {
  const [selectat, setSelectat] = useState(null);
  const [cantitate, setCantitate] = useState('');
  const categorii = [...new Set(produse.map(p => p.categorie))];

  const handleSelect = (e) => {
    const cod = e.target.value;
    const produs = produse.find(p => p.cod === cod);
    setSelectat(produs);
    setCantitate('');
  };

  const subtotal = selectat && cantitate ? selectat.pret * parseFloat(cantitate) : 0;
  const tva = subtotal * 0.2;
  const total = subtotal + tva;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial', maxWidth: 800, margin: 'auto' }}>
      <h1>Calculator AVEPE</h1>

      {categorii.map(cat => (
        <div key={cat} style={{ marginBottom: '1.5rem' }}>
          <h3>{cat}</h3>
          <select
            onChange={handleSelect}
            style={{ width: '100%', padding: '0.5rem' }}
          >
            <option value="">-- Selectează {cat} --</option>
            {produse.filter(p => p.categorie === cat).map(p => (
              <option key={p.cod} value={p.cod}>
                {p.cod} – {p.denumire} ({p.dimensiune}) – {p.pret} MDL / {p.um}
              </option>
            ))}
          </select>
        </div>
      ))}

      {selectat && (
        <div style={{ marginTop: '2rem' }}>
          <h4>Produs selectat: {selectat.cod} – {selectat.denumire}</h4>
          <p>Dimensiune: {selectat.dimensiune}</p>
          <p>Preț unitar: {selectat.pret} MDL / {selectat.um}</p>

          <label>
            Cantitate ({selectat.um}):{" "}
            <input
              type="number"
              step="0.01"
              value={cantitate}
              onChange={(e) => setCantitate(e.target.value)}
              style={{ padding: '0.5rem', width: '100%' }}
            />
          </label>

          {cantitate && (
            <div style={{ marginTop: '1rem', background: '#f3f3f3', padding: '1rem' }}>
              <p><strong>Subtotal:</strong> {subtotal.toFixed(2)} MDL</p>
              <p><strong>TVA (20%):</strong> {tva.toFixed(2)} MDL</p>
              <p><strong>Total:</strong> {total.toFixed(2)} MDL</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
