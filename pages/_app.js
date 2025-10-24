import "../styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-zinc-200">
        <div className="container py-3 flex items-center gap-3">
          <Link href="/" className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-sky-600 text-white grid place-items-center font-bold">JP</div>
            <div className="leading-tight">
              <div className="font-extrabold">JONI PES</div>
              <div className="text-xs text-zinc-500 -mt-0.5">Game Topup & Akun</div>
            </div>
          </Link>

          <nav className="ml-auto flex items-center gap-2">
            <NavLink href="/akun" label="AKUN" />
            <NavLink href="/topup" label="TOPUP" />
            <NavLink href="/config" label="CONFIG" />
            <NavLink href="/sosial" label="SOSIAL MEDIA" />
          </nav>
        </div>
      </header>

      <Component {...pageProps} />

      <footer className="border-t border-zinc-200 bg-white mt-10">
        <div className="container py-6 text-sm text-zinc-500">
          © {new Date().getFullYear()} JONI PES • Semua hak cipta.
        </div>
      </footer>
    </div>
  );
}

function NavLink({ href, label }) {
  return (
    <Link
      href={href}
      className="h-9 px-3 rounded-xl border border-zinc-200 bg-white hover:bg-zinc-50 text-xs font-medium grid place-items-center"
    >
      {label}
    </Link>
  );
}
