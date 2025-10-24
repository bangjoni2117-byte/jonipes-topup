import { MLBB_ACCOUNTS } from "../../data/accounts/mlbb";
import Link from "next/link";

export default function MLBBAccountList() {
  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold mb-8 text-center">Daftar Akun MLBB</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {MLBB_ACCOUNTS.map((akun) => (
          <Link
            key={akun.id}
            href={`/akun/mlbb/${akun.id}`}
            className="rounded-2xl overflow-hidden shadow-lg bg-white hover:-translate-y-1 transition"
          >
            <img src={akun.images[0]} className="h-48 w-full object-cover" />
            <div className="p-4 text-center">
              <div className="font-bold text-lg">{akun.name}</div>
              <div className="text-sky-600 font-semibold mt-1">Rp {akun.price.toLocaleString("id-ID")}</div>
              <div className="mt-2 text-sm text-sky-700 font-medium underline">
                Lihat Detail →
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
