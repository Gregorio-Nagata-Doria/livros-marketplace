import Link from "next/link";
import SearchBar from "../searchBar/searchBar";

export default function Header() {
  return (
    <header className="w-full h-18 border-b border-line bg-surface flex gap-6 items-center px-6 py-1.5">
      <Link
        href="/"
        className="font-serif text-2xl font-bold tracking-tight shrink-0"
      >
        <span className="text-primary">Sebo</span> usados
      </Link>

      <SearchBar />

      <nav className="flex items-center gap-4 shrink-0">
        <Link href="/vender" className="text-sm">
          <strong className="text-primary text-lg font-bold">+</strong> Vender
          meu livro
        </Link>

        <Link href="/carrinho" aria-label="Carrinho">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="8" cy="21" r="1" />
            <circle cx="19" cy="21" r="1" />
            <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12" />
          </svg>
        </Link>

        <Link href="/entrar">Entrar</Link>
      </nav>
    </header>
  );
}