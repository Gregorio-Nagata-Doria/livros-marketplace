import { sampleBook } from "@/data/fixtures/book";

type PageProps = {
  params: Promise<{ isbn: string }>;
};

export default async function LivroPage({ params }: PageProps) {
  await params; // o isbn da URL ainda será usado pra buscar o livro (v0.2.0)
  const book = sampleBook;

  return (
    <main>
      <h1>{book.title}</h1>
      <p>{book.author}</p>

      <dl>
        <dt>Editora</dt>
        <dd>{book.publisher ?? "—"}</dd>
        <dt>Ano</dt>
        <dd>{book.publishedYear ?? "—"}</dd>
        <dt>Idioma</dt>
        <dd>{book.language ?? "—"}</dd>
        <dt>ISBN</dt>
        <dd>{book.isbn}</dd>
      </dl>

      <section aria-label="Sinopse">
        <h2>Sinopse</h2>
        <p>{book.synopsis ?? "Sinopse não disponível."}</p>
      </section>
    </main>
  );
}
