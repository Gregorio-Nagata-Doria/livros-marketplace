import Link from "next/link";
import BookCover from "../bookCover/bookCover";

export type Condition = "novo" | "bom" | "razoavel" | "desgastado";

const conditionMeta: Record<Condition, { label: string; dot: string }> = {
  novo: { label: "novo", dot: "bg-novo-dot" },
  bom: { label: "bom", dot: "bg-bom-dot" },
  razoavel: { label: "razoável", dot: "bg-razoavel-dot" },
  desgastado: { label: "desgastado", dot: "bg-desgastado-dot" },
};

function ConditionDots({ conditions }: { conditions: Condition[] }) {
  return (
    <ul className="flex items-center gap-1.5" aria-label="Condições disponíveis">
      {conditions.map((c) => (
        <li key={c} className="flex items-center" title={conditionMeta[c].label}>
          <span
            className={`size-2 rounded-full ${conditionMeta[c].dot}`}
            aria-hidden="true"
          />
          <span className="sr-only">{conditionMeta[c].label}</span>
        </li>
      ))}
    </ul>
  );
}

export type Book = {
  title: string;
  author: string;
  from: string;
  offers: number;
  conditions: Condition[];
};

export default function BookCard({ book }: { book: Book }) {
  return (
    <article className="w-44 shrink-0">
      <Link href="/livro/isbn" className="group block">
        <div className="transition-transform group-hover:-translate-y-1">
          <BookCover bookName={book.title} authorName={book.author} />
        </div>
        <h3 className="mt-3 line-clamp-1 font-serif text-base font-semibold text-ink">
          {book.title}
        </h3>
        <p className="line-clamp-1 text-sm text-ink-faint">{book.author}</p>
      </Link>

      <div className="mt-2 flex items-baseline gap-1">
        <span className="text-xs text-ink-faint">a partir de</span>
        <span className="font-semibold text-primary">{book.from}</span>
      </div>

      <div className="mt-1.5 flex items-center justify-between">
        <span className="text-xs text-ink-faint">{book.offers} ofertas</span>
        <ConditionDots conditions={book.conditions} />
      </div>
    </article>
  );
}
