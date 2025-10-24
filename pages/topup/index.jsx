import GameCard from "../../components/GameCard";

const GAMES = [
  { id: "efootball", name: "eFootball", tagline: "Top Up eFootball Coins", image: "https://images.unsplash.com/photo-1522778119026-d647f0596c20?q=80&w=1200&auto=format&fit=crop" },
  { id: "mlbb", name: "Mobile Legends", tagline: "Diamond & Starlight", image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop" },
  { id: "pubg", name: "PUBG Mobile", tagline: "UC Instan & Aman", image: "https://images.unsplash.com/photo-1543946602-a0fce8117698?q=80&w=1200&auto=format&fit=crop" },
  { id: "ff", name: "Free Fire", tagline: "Diamond Murah Cepat", image: "https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&w=1200&auto=format&fit=crop" },
];

export default function TopupHome() {
  return (
    <section className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Pilih Game</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {GAMES.map((g) => (
          <GameCard key={g.id} game={g} />
        ))}
      </div>
    </section>
  );
}
