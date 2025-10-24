export default function Config() {
  return (
    <section className="container py-8">
      <h1 className="text-2xl font-bold mb-2">Config Toko</h1>
      <p className="text-zinc-600">Atur metode pembayaran, kontak CS, template pesanan, dan banner promo.</p>
      <ul className="list-disc ml-6 mt-3 text-sm text-zinc-600">
        <li>Metode: QRIS, e-wallet, transfer bank.</li>
        <li>Auto-format WhatsApp (ID/Server + Nominal).</li>
        <li>Notifikasi pelanggan via WhatsApp & Email (manual saat ini).</li>
        <li>Harga dapat disesuaikan di halaman game.</li>
      </ul>
    </section>
  );
}
