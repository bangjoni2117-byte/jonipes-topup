import GAMES from "../../data/games";
import GameCard from "../../components/GameCard";

export default function TopupHome() {
  return (
    <section className="container py-8">
      <h1 className="text-2xl font-bold mb-4">Pilih Game untuk Top Up</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GAMES.map((g) => <GameCard key={g.id} game={g} type="topup" />)}
      </div>
    </section>
  );
}
