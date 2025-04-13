import { useState } from 'react';

export default function Home() {
  const [latime, setLatime] = useState(0);
  const [inaltime, setInaltime] = useState(0);
  const [nume, setNume] = useState('');
  const [telefon, setTelefon] = useState('');

  const cantLateral = 2 * inaltime;
  const cantSus = latime;
  const cantJos = latime;

  const pretLateral = 95;
  const pretSus = 105;
  const pretJos = 110;

  const totalLateral = cantLateral * pretLateral;
  const totalSus = cantSus * pretSus;
  const totalJos = cantJos * pretJos;

  const subtotal = totalLateral + totalSus + totalJos;
  const tva = subtotal * 0.2;
  const total = subtotal + tva;

  return (
    <div style={{ maxWidth: '600px', margin: '2rem auto', fontFamily: 'Arial' }}>
      <h1>Calculator Ofertă AVEPE</h1>
      <label>Lățime geam (m):</label>
      <input type="number" value={latime} onChange={e => setLatime(parseFloat(e.target.value))} />
      <br />
      <label>Înălțime geam (m):</label>
      <input type="number" value={inaltime} onChange={e => setInaltime(parseFloat(e.target.value))} />
      <br />
      <label>Nume client:</label>
      <input type="text" value={nume} onChange={e => setNume(e.target.value)} />
      <br />
      <label>Telefon:</label>
      <input type="text" value={telefon} onChange={e => setTelefon(e.target.value)} />
      <br />
      <h3>Rezultat:</h3>
      <p>Lateral: {cantLateral} m × {pretLateral} = {totalLateral} MDL</p>
      <p>Sus: {cantSus} m × {pretSus} = {totalSus} MDL</p>
      <p>Jos: {cantJos} m × {pretJos} = {totalJos} MDL</p>
      <p><strong>Subtotal: {subtotal.toFixed(2)} MDL</strong></p>
      <p><strong>TVA (20%): {tva.toFixed(2)} MDL</strong></p>
      <p><strong>Total: {total.toFixed(2)} MDL</strong></p>
    </div>
  );
}