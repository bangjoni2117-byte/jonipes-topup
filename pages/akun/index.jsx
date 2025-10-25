import GAMES from "../../data/games";
import GameCard from "../../components/GameCard";

export default function AkunHome() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Pilih Game Akun</h1>
      <p className="text-center text-zinc-600 mb-10">
        Pilih game untuk melihat daftar akun yang tersedia. Game yang belum ada stok ditandai <b>⏳ Belum Ready</b>.
      </p>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GAMES.map((g) => <GameCard key={g.id} game={g} type="akun" />)}
      </div>
    </section>
  );
}
