import { useRouter } from "next/router";

export default function TopupGame() {
  const { game } = useRouter().query;
  return (
    <section className="container py-10">
      <h1 className="text-2xl font-bold mb-2">Top Up {game?.toUpperCase()}</h1>
      <p className="text-zinc-600">Form topup per game masih placeholder. Nanti isi nominal & order WA di sini.</p>
    </section>
  );
}
