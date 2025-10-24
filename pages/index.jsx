import GAMES from "../data/games";
import GameCard from "../components/GameCard";

export default function Home() {
  return (
    <>
      <section className="w-full bg-gradient-to-br from-sky-500 via-indigo-500 to-violet-600 text-white py-16">
        <div className="container grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight drop-shadow">
              Top Up Cepat, Aman, & Terpercaya
            </h1>
            <p className="mt-3 text-white/90">
              JONI PES menyediakan layanan top up game termurah & tercepat. Garansi aman 100%.
            </p>
            <div className="mt-6 flex gap-3">
              <a href="/topup" className="px-5 py-2.5 rounded-xl bg-white text-sky-700 font-bold shadow hover:bg-white/90">
                Mulai Top Up
              </a>
              <a href="/akun" className="px-5 py-2.5 rounded-xl bg-white/20 backdrop-blur border border-white/30 hover:bg-white/30 font-medium">
                Cek Akun Ready
              </a>
            </div>
          </div>

          <img
            src="https://images.unsplash.com/photo-1538481199705-c710c4e965fc?q=80&w=1200&auto=format&fit=crop"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </section>

      <section className="container py-12">
        <h2 className="text-2xl font-bold mb-6 text-center">Pilih Game</h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {GAMES.map((g) => <GameCard key={g.id} game={g} />)}
        </div>
      </section>
    </>
  );
}
