import { MLBB_CONFIGS } from "../../../data/config/mlbb";
import { useRouter } from "next/router";

export default function ConfigDetail() {
  const { query } = useRouter();
  const cfg = MLBB_CONFIGS.find(c => c.id === Number(query.id));

  if (!cfg) return <div className="container py-10">Config tidak ditemukan.</div>;

  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold mb-4">{cfg.title}</h1>
      <img src={cfg.image} className="w-full rounded-2xl shadow mb-6" />
      <p className="text-zinc-700 mb-6">{cfg.description}</p>

      <a href={cfg.download} className="px-5 py-3 bg-sky-600 text-white font-semibold rounded-xl shadow hover:bg-sky-700">
        ⬇️ Download Config
      </a>
    </section>
  );
}
