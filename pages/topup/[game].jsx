import { useRouter } from "next/router";
import { useMemo, useState } from "react";

const PRODUCTS = {
  efootball: [
    { id: "150", name: "150 Coins", price: 25000 },
    { id: "300", name: "300 Coins", price: 48000 },
    { id: "500", name: "500 Coins", price: 76000 },
  ],
  mlbb: [
    { id: "86", name: "86 Diamonds", price: 21000 },
    { id: "172", name: "172 Diamonds", price: 41000 },
    { id: "257", name: "257 Diamonds", price: 60000 },
  ],
  pubg: [
    { id: "60", name: "60 UC", price: 14000 },
    { id: "325", name: "325 UC", price: 69000 },
    { id: "660", name: "660 UC", price: 129000 },
  ],
  ff: [
    { id: "70", name: "70 Diamonds", price: 12000 },
    { id: "140", name: "140 Diamonds", price: 23000 },
    { id: "355", name: "355 Diamonds", price: 54000 },
  ],
};

function pretty(game) {
  return {
    efootball: "eFootball",
    mlbb: "Mobile Legends",
    pubg: "PUBG Mobile",
    ff: "Free Fire",
  }[game] || game;
}

export default function GameTopup() {
  const router = useRouter();
  const { game } = router.query;
  const items = useMemo(() => PRODUCTS[game] || [], [game]);

  const [playerId, setPlayerId] = useState("");
  const [server, setServer] = useState("");
  const [selected, setSelected] = useState(null);
  const [note, setNote] = useState("");

  const handleOrder = () => {
    if (!selected) return alert("Pilih nominal terlebih dahulu.");
    if (!playerId) return alert("Isi Player ID.");
    const title = pretty(game);
    const text =
      `Halo Admin JONI PES,%0A%0ASaya ingin top up *${title}*.%0A` +
      `- Produk: ${selected.name}%0A` +
      `- Harga: Rp ${selected.price.toLocaleString("id-ID")}%0A` +
      `- Player ID: ${playerId}%0A` +
      (server ? `- Server: ${server}%0A` : "") +
      (note ? `- Catatan: ${encodeURIComponent(note)}%0A` : "") +
      `%0AMetode pembayaran: QRIS/E-Wallet/Transfer Bank.`;
    // ganti nomor WA admin di sini:
    const wa = `https://wa.me/6281234567890?text=${text}`;
    window.open(wa, "_blank");
  };

  return (
    <section className="container py-8">
      <h1 className="text-2xl font-bold mb-2">Top Up {pretty(game)}</h1>
      <p className="text-zinc-600 mb-4">
        Pilih nominal, isi data, lalu tekan tombol WhatsApp untuk order otomatis.
      </p>

      <div className="grid lg:grid-cols-3 gap-6">
        {/* Products */}
        <div className="lg:col-span-2">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
            {items.map((it) => (
              <button
                key={it.id}
                onClick={() => setSelected(it)}
                className={`p-4 rounded-xl border text-left bg-white hover:border-sky-300 ${
                  selected?.id === it.id ? "border-sky-500 ring-2 ring-sky-200" : "border-zinc-200"
                }`}
              >
                <div className="font-medium">{it.name}</div>
                <div className="text-sm text-zinc-500">Rp {it.price.toLocaleString("id-ID")}</div>
              </button>
            ))}
          </div>
        </div>

        {/* Form */}
        <div className="rounded-2xl border border-zinc-200 bg-white p-4">
          <div className="space-y-3">
            <div>
              <label className="text-sm font-medium">Player ID</label>
              <input
                value={playerId}
                onChange={(e) => setPlayerId(e.target.value)}
                className="mt-1 w-full border border-zinc-300 rounded-lg px-3 py-2 outline-none"
                placeholder="Masukkan ID (wajib)"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Server (opsional)</label>
              <input
                value={server}
                onChange={(e) => setServer(e.target.value)}
                className="mt-1 w-full border border-zinc-300 rounded-lg px-3 py-2 outline-none"
                placeholder="Server/Zone (jika ada)"
              />
            </div>
            <div>
              <label className="text-sm font-medium">Catatan (opsional)</label>
              <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                className="mt-1 w-full border border-zinc-300 rounded-lg px-3 py-2 outline-none"
                rows={3}
                placeholder="Misal: nickname, jam online, dll"
              />
            </div>
            <button
              onClick={handleOrder}
              className="w-full mt-2 px-4 py-2 rounded-xl bg-sky-600 text-white font-semibold"
            >
              Order via WhatsApp
            </button>
            <p className="text-xs text-zinc-500">
              *Ganti nomor admin di file ini (cari <code>wa.me/6281234567890</code>).
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
