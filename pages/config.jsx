import Link from "next/link";
import GAMES from "../data/games";

export default function Config() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold text-center mb-8">Config Game</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {GAMES.map((g) => (
          <Link
            key={g.id}
            href={`/config/${g.id}`}
            className={`rounded-2xl p-4 bg-white text-center shadow hover:-translate-y-1 transition ${
              g.notReady ? "opacity-50 cursor-not-allowed" : "cursor-pointer"
            }`}
          >
            <img src={g.image} className="rounded-xl mb-3 h-28 w-full object-cover" />
            <div className="font-bold text-lg">{g.name}</div>
            <div className="text-sm text-zinc-500">Config Game</div>

            {g.notReady && (
              <div className="mt-2 text-xs bg-zinc-600 text-white px-2 py-1 rounded-lg inline-block">
                ⏳ Belum Ready
              </div>
            )}
          </Link>
        ))}
      </div>
    </section>
  );
}
