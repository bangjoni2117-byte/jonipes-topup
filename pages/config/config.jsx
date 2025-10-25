import GAMES from "../data/games";
import GameCard from "../components/GameCard";

export default function ConfigHome() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Config Game</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GAMES.map((g) => <GameCard key={g.id} game={g} type="config" />)}
      </div>
    </section>
  );
}
