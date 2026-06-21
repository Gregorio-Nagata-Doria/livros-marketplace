import Link from "next/link";
import BookCard, { type Book } from "./bookCard";

const recent: Book[] = [
  { title: "A Hora da Estrela", author: "Clarice Lispector", from: "R$ 21,00", offers: 4, conditions: ["novo", "bom"] },
  { title: "O Cortiço", author: "Aluísio Azevedo", from: "R$ 16,90", offers: 6, conditions: ["bom", "razoavel", "desgastado"] },
  { title: "Vidas Secas", author: "Graciliano Ramos", from: "R$ 18,50", offers: 3, conditions: ["novo", "razoavel"] },
  { title: "Dom Casmurro", author: "Machado de Assis", from: "R$ 14,90", offers: 11, conditions: ["novo", "bom", "razoavel"] },
  { title: "Grande Sertão: Veredas", author: "Guimarães Rosa", from: "R$ 38,00", offers: 5, conditions: ["bom"] },
  { title: "Pedro Páramo", author: "Juan Rulfo", from: "R$ 22,90", offers: 3, conditions: ["bom", "razoavel"] },
  { title: "Os Sertões", author: "Euclides da Cunha", from: "R$ 44,00", offers: 2, conditions: ["novo", "bom"] },
];

export default function BookCarousel() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="mb-6 flex items-end justify-between">
        <h2 className="font-serif text-3xl font-medium tracking-tight">
          Recém-listados
        </h2>
        <Link
          href="/busca"
          className="text-sm font-medium text-primary hover:text-primary-hover"
        >
          Ver todos →
        </Link>
      </div>

      <ul className="flex gap-6 overflow-x-auto pb-4">
        {recent.map((book) => (
          <li key={book.title}>
            <BookCard book={book} />
          </li>
        ))}
      </ul>
    </section>
  );
}
