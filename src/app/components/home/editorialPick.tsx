import Link from "next/link";
import BookCover from "../bookCover/bookCover";

const featured = {
  title: "Pedro Páramo",
  author: "Juan Rulfo",
  from: "R$ 22,90",
  quote:
    "O romance que ensinou García Márquez a escrever. Um sussurro de fantasmas que cabe na palma da mão.",
};

const more = [
  {
    title: "Ensaio sobre a Cegueira",
    author: "José Saramago",
    from: "R$ 24,50",
  },
  { title: "A Casa dos Espíritos", author: "Isabel Allende", from: "R$ 28,00" },
  { title: "Ficções", author: "Jorge Luis Borges", from: "R$ 31,00" },
];

export default function EditorialPick() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <span className="text-xs font-medium uppercase tracking-widest text-gold">
        Curadoria editorial
      </span>
      <h2 className="mb-8 mt-2 font-serif text-3xl font-medium tracking-tight">
        Destaques da semana
      </h2>

      <div className="grid gap-10 md:grid-cols-2">
        <article className="flex flex-col items-start gap-6 sm:flex-row">
          <div className="w-44 shrink-0">
            <BookCover bookName={featured.title} authorName={featured.author} />
          </div>
          <div>
            <blockquote className="font-serif text-xl italic leading-snug text-ink">
              “{featured.quote}”
            </blockquote>
            <p className="mt-4 text-sm text-ink-faint">
              {featured.title} · {featured.author}
            </p>
            <Link
              href="/livro/isbn"
              className="mt-4 inline-block rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-paper hover:bg-primary-hover"
            >
              Ver ofertas · {featured.from}
            </Link>
          </div>
        </article>

        <ul className="flex flex-col gap-5">
          {more.map((book) => (
            <li key={book.title}>
              <Link
                href="/livro/isbn"
                className="group flex items-center gap-4 rounded-xl border border-line bg-surface p-3 transition-shadow hover:shadow-md"
              >
                <div className="w-20 shrink-0">
                  <BookCover bookName={book.title} authorName={book.author} />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-semibold text-ink">
                    {book.title}
                  </h3>
                  <p className="text-sm text-ink-faint">{book.author}</p>
                  <p className="mt-1 text-sm">
                    <span className="text-ink-faint">a partir de </span>
                    <span className="font-semibold text-primary">
                      {book.from}
                    </span>
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
