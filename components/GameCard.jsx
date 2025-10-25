import Link from "next/link";

export default function GameCard({ game, type }) {
  const isReady = !game.notReady;

  // Rute tujuan sesuai menu
  const target =
    type === "topup"
      ? `/topup/${game.id}`
      : type === "akun"
      ? `/akun/${game.id}`
      : type === "config"
      ? `/config/${game.id}`
      : "#";

  return (
    <div
      className={`group rounded-2xl overflow-hidden border bg-white/80 backdrop-blur-lg shadow-md transition-all ${
        isReady
          ? "hover:shadow-2xl hover:-translate-y-[3px]"
          : "opacity-50 cursor-not-allowed"
      }`}
    >
      <div className="aspect-[16/10] overflow-hidden relative">
        <img
          src={game.image}
          alt={game.name}
          className={`w-full h-full object-cover transition-transform ${
            isReady ? "group-hover:scale-105" : ""
          }`}
        />
        {!isReady && (
          <div className="absolute top-2 left-2 text-xs bg-zinc-700 text-white px-2 py-1 rounded-lg shadow">
            ⏳ Belum Ready
          </div>
        )}
      </div>

      <div className="p-4 text-center">
        <div className="font-bold text-lg">{game.name}</div>
        <div className="text-sm text-zinc-600">{game.tagline}</div>

        {isReady ? (
          <Link
            href={target}
            className="mt-3 inline-block px-4 py-2 rounded-xl bg-sky-600 text-white text-sm font-medium hover:bg-sky-700"
          >
            Buka
          </Link>
        ) : (
          <button
            onClick={() =>
              alert("⏳ Produk ini belum ready. Silakan cek kembali nanti.")
            }
            className="mt-3 inline-block px-4 py-2 rounded-xl bg-zinc-400 text-white text-sm font-medium cursor-not-allowed"
          >
            Belum Ready
          </button>
        )}
      </div>
    </div>
  );
}
