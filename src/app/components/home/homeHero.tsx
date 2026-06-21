import Link from "next/link";
import BookCover from "../bookCover/bookCover";

function LeafIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z" />
      <path d="M2 21c0-3 1.85-5.36 5.08-6" />
    </svg>
  );
}

export default function HomeHero() {
  return (
    <section className="mx-auto grid max-w-6xl items-center gap-12 px-6 py-16 md:grid-cols-2">
      <div>
        <span className="inline-flex items-center gap-2 rounded-full border border-novo-line bg-novo-tint px-4 py-1.5 text-xs font-medium uppercase tracking-widest text-primary">
          <LeafIcon />
          Curadoria de segunda mão
        </span>

        <h1 className="mt-6 font-serif text-5xl font-medium leading-[1.05] tracking-tight text-balance">
          Livros que já viveram outras histórias
        </h1>

        <p className="mt-5 max-w-prose text-lg leading-relaxed text-ink-soft">
          Marketplace de livros usados com curadoria. Compre direto de outros
          leitores — compare ofertas, condições e preços de um mesmo título.
        </p>

        <div className="mt-8 flex flex-wrap gap-3">
          <Link
            href="/busca"
            className="rounded-full bg-primary px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-primary-hover"
          >
            Explorar acervo
          </Link>
          <Link
            href="/vender"
            className="rounded-full border border-line px-6 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface"
          >
            Vender um livro
          </Link>
        </div>
      </div>

      <div className="flex items-center justify-center py-4">
        <div className="z-0 w-44 origin-bottom -rotate-12 translate-y-4 -mr-16">
          <BookCover
            bookName="Grande Sertão: Veredas"
            authorName="João Guimarães Rosa"
          />
        </div>
        <div className="z-20 w-44 -translate-y-2">
          <BookCover
            bookName="Cem Anos de Solidão"
            authorName="Gabriel García Márquez"
          />
        </div>
        <div className="z-0 w-44 origin-bottom rotate-12 translate-y-4 -ml-16">
          <BookCover
            bookName="A Hora da Estrela"
            authorName="Clarice Lispector"
          />
        </div>
      </div>
    </section>
  );
}