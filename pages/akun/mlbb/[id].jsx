import { MLBB_ACCOUNTS } from "../../../data/accounts/mlbb";
import { useRouter } from "next/router";

export default function AccountDetail() {
  const { query } = useRouter();
  const akun = MLBB_ACCOUNTS.find(a => a.id === Number(query.id));

  if (!akun) return <div className="container py-10">Akun tidak ditemukan.</div>;

  const waMessage = encodeURIComponent(
    `Halo kak, saya tertarik membeli akun MLBB berikut:%0A%0A` +
    `Nama Akun: ${akun.name}%0A` +
    `Harga: Rp ${akun.price.toLocaleString("id-ID")}%0A%0A` +
    `Boleh minta detail tambahan? 😊`
  );

  return (
    <section className="container py-10">
      <h1 className="text-3xl font-bold mb-4">{akun.name}</h1>

      <div className="grid sm:grid-cols-2 gap-4 mb-6">
        {akun.images.map((img, idx) => (
          <img key={idx} src={img} className="rounded-xl shadow-md" />
        ))}
      </div>

      <div className="text-xl font-semibold text-sky-600 mb-4">
        Rp {akun.price.toLocaleString("id-ID")}
      </div>

      <p className="text-zinc-700 mb-6 leading-relaxed">{akun.description}</p>

      <a
        href={`https://wa.me/6289507676856?text=${waMessage}`}
        className="px-6 py-3 bg-green-600 text-white text-lg rounded-xl shadow hover:bg-green-700"
      >
        Chat Admin via WhatsApp
      </a>
    </section>
  );
}
