import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-line bg-surface">
      <div className="mx-auto grid max-w-6xl gap-8 px-6 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <span className="font-serif text-xl font-bold tracking-tight">
            <span className="text-primary">Sebo</span> usados
          </span>
          <p className="mt-3 text-sm text-ink-soft">
            Marketplace de livros usados com curadoria.
          </p>
        </div>

        <nav aria-label="Comprar">
          <h2 className="font-semibold text-ink">Comprar</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/busca" className="hover:text-ink">
                Buscar livros
              </Link>
            </li>
            <li>
              <Link href="/generos" className="hover:text-ink">
                Gêneros
              </Link>
            </li>
            <li>
              <Link href="/curadoria" className="hover:text-ink">
                Curadoria
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Vender">
          <h2 className="font-semibold text-ink">Vender</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/vender" className="hover:text-ink">
                Começar a vender
              </Link>
            </li>
            <li>
              <Link href="/vender/como-funciona" className="hover:text-ink">
                Como funciona
              </Link>
            </li>
            <li>
              <Link href="/vender/taxas" className="hover:text-ink">
                Taxas
              </Link>
            </li>
          </ul>
        </nav>

        <nav aria-label="Ajuda">
          <h2 className="font-semibold text-ink">Ajuda</h2>
          <ul className="mt-3 space-y-2 text-sm text-ink-soft">
            <li>
              <Link href="/ajuda" className="hover:text-ink">
                Central de ajuda
              </Link>
            </li>
            <li>
              <Link href="/contato" className="hover:text-ink">
                Contato
              </Link>
            </li>
            <li>
              <Link href="/termos" className="hover:text-ink">
                Termos
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-line">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-2 px-6 py-5 text-sm text-ink-faint sm:flex-row">
          <span>© 2026 Sebo usados</span>
          <span>Pagamento seguro · Stripe</span>
        </div>
      </div>
    </footer>
  );
}
