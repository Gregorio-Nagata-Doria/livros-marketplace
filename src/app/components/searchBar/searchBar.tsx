export default function SearchBar() {
  return (
    <form
      action="/busca"
      role="search"
      className="flex-1 max-w-2xl flex items-center"
    >
      <input
        type="search"
        name="q"
        placeholder="Busque por título, autor ou ISBN"
        aria-label="Buscar livros"
        className="w-full rounded-4xl border border-line px-5 py-2"
      />
      <button type="submit" aria-label="Buscar"></button>
    </form>
  );
}
