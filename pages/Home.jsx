import products from '../data/products';
<select>
  {products.filter(p => p.categorie === "Geam").map(p => (
    <option key={p.cod}>
      {p.cod} – {p.denumire} ({p.dimensiune}) – {p.pret} MDL / {p.um}
    </option>
  ))}
</select>
