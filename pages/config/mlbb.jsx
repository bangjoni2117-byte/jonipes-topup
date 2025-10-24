import { MLBB_CONFIGS } from "../../data/config/mlbb";
import Link from "next/link";

export default function MLBBConfigPage() {
  return (
    <section className="container py-10">
      <h1 className="text-2xl font-bold mb-6">Config MLBB</h1>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MLBB_CONFIGS.map((c) => (
          <Link key={c.id} href={`/config/mlbb/${c.id}`} className="rounded-2xl overflow-hidden shadow-lg bg-white hover:-translate-y-1 transition">
            <img src={c.image} className="h-40 w-full object-cover" />
            <div className="p-4">
              <div className="font-bold text-lg">{c.title}</div>
              <p className="text-sm text-zinc-600 mt-1">{c.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
