import Link from "next/link";

type Genre = {
  name: string;
  slug: string;
  count: string;
  icon: string;
  tint: string;
};

const genres: Genre[] = [
  { name: "Romance", slug: "romance", count: "1.247", icon: "❦", tint: "oklch(0.93 0.04 25)" },
  { name: "Ficção científica", slug: "ficcao-cientifica", count: "684", icon: "☄", tint: "oklch(0.92 0.03 250)" },
  { name: "Filosofia", slug: "filosofia", count: "412", icon: "𝝘", tint: "oklch(0.93 0.035 80)" },
  { name: "História", slug: "historia", count: "901", icon: "𐤀", tint: "oklch(0.93 0.03 50)" },
  { name: "Infantil", slug: "infantil", count: "538", icon: "✿", tint: "oklch(0.93 0.04 150)" },
  { name: "Técnicos", slug: "tecnicos", count: "376", icon: "⌥", tint: "oklch(0.92 0.02 200)" },
  { name: "Quadrinhos", slug: "quadrinhos", count: "290", icon: "◳", tint: "oklch(0.93 0.04 320)" },
  { name: "Poesia", slug: "poesia", count: "455", icon: "❧", tint: "oklch(0.93 0.035 110)" },
];

export default function GenreGrid() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-6 font-serif text-3xl font-medium tracking-tight">
        Explore por gênero
      </h2>

      <ul className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-4">
        {genres.map((g) => (
          <li key={g.slug}>
            <Link
              href={`/genero/${g.slug}`}
              className="flex items-center gap-4 rounded-xl border border-line p-4 transition-shadow hover:shadow-md"
              style={{ background: g.tint }}
            >
              <span aria-hidden="true" className="text-2xl">
                {g.icon}
              </span>
              <span>
                <span className="block font-serif text-lg font-semibold text-ink">
                  {g.name}
                </span>
                <span className="text-sm text-ink-soft">{g.count} livros</span>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
