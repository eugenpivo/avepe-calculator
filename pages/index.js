import { useState } from 'react';

const produse = [
  { categorie: "Geam", cod: "AVE-101", denumire: "Sus", dimensiune: "85x40", pret: 95, um: "ml" },
  { categorie: "Geam", cod: "AVE-102", denumire: "Lateral", dimensiune: "120x35", pret: 105, um: "ml" },
  { categorie: "Geam", cod: "AVE-103", denumire: "Jos", dimensiune: "100x50", pret: 110, um: "ml" },
  { categorie: "Coltar", cod: "AVE-201", denumire: "Colțar", dimensiune: "200x200", pret: 45, um: "buc" },
  { categorie: "Soclu", cod: "AVE-500", denumire: "Profil Soclu", dimensiune: "180x60", pret: 70, um: "ml" }
];

export default function Home() {
  const [selectat, setSelectat] = useState(null);
  const [cantitate, setCantitate] = useState('');
  const [oferta, setOferta] = useState([]);

  const adaugaProdus = () => {
    if (selectat && cantitate) {
      setOferta([...oferta, { ...selectat, cantitate: parseFloat(cantitate) }]);
      setSelectat(null);
      setCantitate('');
    }
  };

  const subtotal = oferta.reduce((sum, item) => sum + item.pret * item.cantitate, 0);
  const tva = subtotal * 0.2;
  const total = subtotal + tva;

  return (
    <div style={{ padding: '2rem', fontFamily: 'Arial', maxWidth: 900, margin: 'auto' }}>
      <h1>Calculator AVEPE</h1>

      <select
        onChange={(e) => {
          const cod = e.target.value;
          const produs = produse.find(p => p.cod === cod);
          setSelectat(produs);
        }}
        style={{ width: '100%', padding: '0.5rem' }}
      >
        <option value="">-- Selectează produs --</option>
        {produse.map(p => (
          <option key={p.cod} value={p.cod}>
            {p.cod} – {p.denumire} ({p.dimensiune}) – {p.pret} MDL / {p.um}
          </option>
        ))}
      </select>

      {selectat && (
        <div style={{ marginTop: '1rem' }}>
          <input
            type="number"
            value={cantitate}
            onChange={(e) => setCantitate(e.target.value)}
            placeholder={`Cantitate (${selectat.um})`}
            style={{ padding: '0.5rem', width: '100%' }}
          />
          <button onClick={adaugaProdus} style={{ marginTop: '0.5rem', padding: '0.5rem 1rem' }}>
            Adaugă în ofertă
          </button>
        </div>
      )}

      {oferta.length > 0 && (
        <div style={{ marginTop: '2rem' }}>
          <h3>Ofertă curentă:</h3>
          <table width="100%" border="1" cellPadding="6" style={{ borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                <th>Cod</th>
                <th>Denumire</th>
                <th>Dimensiune</th>
                <th>U.M.</th>
                <th>Cantitate</th>
                <th>Preț unitar</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {oferta.map((item, index) => (
                <tr key={index}>
                  <td>{item.cod}</td>
                  <td>{item.denumire}</td>
                  <td>{item.dimensiune}</td>
                  <td>{item.um}</td>
                  <td>{item.cantitate}</td>
                  <td>{item.pret} MDL</td>
                  <td>{(item.pret * item.cantitate).toFixed(2)} MDL</td>
                </tr>
              ))}
            </tbody>
          </table>

          <div style={{ marginTop: '1rem', background: '#f3f3f3', padding: '1rem' }}>
            <p><strong>Subtotal:</strong> {subtotal.toFixed(2)} MDL</p>
            <p><strong>TVA (20%):</strong> {tva.toFixed(2)} MDL</p>
            <p><strong>Total General:</strong> {total.toFixed(2)} MDL</p>
          </div>
        </div>
      )}
    </div>
  );
}
