import Link from "next/link";

export default function GameCard({ game }) {
  return (
    <Link
      href={`/topup/${game.id}`}
      className="group rounded-2xl overflow-hidden border border-white/10 bg-white/80 backdrop-blur-lg shadow-xl hover:shadow-2xl hover:-translate-y-[3px] transition-all"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
        />
      </div>
      <div className="p-4 text-center">
        <div className="font-bold text-lg">{game.name}</div>
        <div className="text-sm text-zinc-600">{game.tagline}</div>
      </div>
    </Link>
  );
}
