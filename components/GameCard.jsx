import Link from "next/link";

export default function GameCard({ game }) {
  return (
    <Link
      href={`/topup/${game.id}`}
      className="group rounded-2xl overflow-hidden border border-zinc-200 bg-white hover:shadow-md transition block"
    >
      <div className="aspect-[16/10] overflow-hidden">
        <img
          src={game.image}
          alt={game.name}
          className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform"
        />
      </div>
      <div className="p-4">
        <div className="font-semibold">{game.name}</div>
        <div className="text-sm text-zinc-500">{game.tagline}</div>
        <div className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-sky-700">
          Top Up Sekarang →
        </div>
      </div>
    </Link>
  );
}
