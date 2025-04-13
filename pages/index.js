export default function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif', maxWidth: '800px', margin: '0 auto', padding: '2rem' }}>
      <h1>Calculator Ofertă AVEPE</h1>

      <form id="calc-form">
        <label>
          Lățime geam (m):
          <input type="number" name="latime" step="0.01" required />
        </label>
        <br />
        <label>
          Înălțime geam (m):
          <input type="number" name="inaltime" step="0.01" required />
        </label>
        <br />
        <label>
          Nume client:
          <input type="text" name="nume" required />
        </label>
        <br />
        <label>
          Telefon:
          <input type="text" name="telefon" required />
        </label>
        <br />
        <button type="submit">Calculează</button>
      </form>

      <div id="rezultat" style={{ marginTop: '2rem' }}></div>

      <script dangerouslySetInnerHTML={{
        __html: `
          document.getElementById('calc-form').addEventListener('submit', function(e) {
            e.preventDefault();
            const lat = parseFloat(e.target.latime.value);
            const alt = parseFloat(e.target.inaltime.value);
            const sus = lat * 105;
            const jos = lat * 110;
            const lateral = alt * 2 * 95;
            const subtotal = sus + jos + lateral;
            const tva = subtotal * 0.2;
            const total = subtotal + tva;

            document.getElementById('rezultat').innerHTML = \`
              <p><strong>Lateral:</strong> 2 x \${alt} x 95 = \${lateral.toFixed(2)} MDL</p>
              <p><strong>Sus:</strong> \${lat} x 105 = \${sus.toFixed(2)} MDL</p>
              <p><strong>Jos:</strong> \${lat} x 110 = \${jos.toFixed(2)} MDL</p>
              <p><strong>Subtotal:</strong> \${subtotal.toFixed(2)} MDL</p>
              <p><strong>TVA (20%):</strong> \${tva.toFixed(2)} MDL</p>
              <p><strong>Total:</strong> \${total.toFixed(2)} MDL</p>
            \`;
          });
        `
      }} />
    </div>
  );
}
