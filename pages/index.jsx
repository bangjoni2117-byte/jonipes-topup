import Link from "next/link";
import GameCard from "../components/GameCard";

const GAMES = [
  {
    id: "efootball",
    name: "eFootball",
    tagline: "Top Up eFootball Coins",
    image:
      "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "mlbb",
    name: "Mobile Legends",
    tagline: "Diamond & Starlight",
    image:
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "pubg",
    name: "PUBG Mobile",
    tagline: "UC Instan & Aman",
    image:
      "https://images.unsplash.com/photo-1543946602-a0fce8117698?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: "ff",
    name: "Free Fire",
    tagline: "Diamond Murah Cepat",
    image:
      "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function Home() {
  return (
    <>
      <section className="container pt-8 pb-4">
        <div className="grid md:grid-cols-2 gap-6 items-center">
          <div>
            <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Top Up Game Cepat & Aman
            </h1>
            <p className="mt-3 text-zinc-600">
              Harga bersahabat, proses instan. Fokus bermain—biar kami yang urus isi saldo & item kamu.
            </p>
            <div className="mt-5 flex gap-2">
              <Link
                href="/topup"
                className="px-4 py-2 rounded-xl bg-sky-600 text-white font-medium hover:opacity-90"
              >
                Mulai Top Up
              </Link>
              <Link
                href="/akun"
                className="px-4 py-2 rounded-xl border border-zinc-300 bg-white font-medium"
              >
                Cek Akun
              </Link>
            </div>
          </div>
          <div className="aspect-[16/10] md:aspect-[16/9] rounded-2xl overflow-hidden shadow">
            <img
              src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1400&auto=format&fit=crop"
              alt="Gaming banner"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="container pt-2 pb-8">
        <h2 className="text-xl font-bold mb-3">Game Populer</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {GAMES.map((g) => (
            <GameCard key={g.id} game={g} />
          ))}
        </div>
      </section>
    </>
  );
}
