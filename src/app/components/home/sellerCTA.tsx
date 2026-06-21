import Link from "next/link";

export default function SellerCTA() {
  return (
    <section className="bg-oxblood text-paper">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-6 py-16 md:grid-cols-2">
        <div>
          <span className="text-xs font-medium uppercase tracking-widest text-gold">
            Venda seus livros
          </span>
          <h2 className="mt-3 font-serif text-4xl font-medium leading-tight tracking-tight">
            Sua estante lotada pode virar renda
          </h2>
          <p className="mt-5 max-w-prose leading-relaxed text-paper/85">
            Anuncie em minutos: busque pelo ISBN, defina a condição e o preço, e
            deixe o sebo cuidar do checkout, do frete e do repasse via Stripe.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/vender"
              className="rounded-full bg-gold px-6 py-3 text-sm font-semibold text-ink transition-colors hover:bg-gold-hover"
            >
              Começar a vender
            </Link>
            <span className="text-sm text-paper/70">
              sem mensalidade · 12% por venda
            </span>
          </div>
        </div>

        <div
          aria-hidden="true"
          className="rounded-2xl border border-paper/15 bg-paper/5 p-6"
        >
          <div className="mb-4 h-3 w-24 rounded-full bg-paper/20" />
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <div className="h-12 w-9 rounded bg-paper/15" />
              <div className="flex-1 space-y-2">
                <div className="h-2.5 w-3/4 rounded-full bg-paper/20" />
                <div className="h-2.5 w-1/2 rounded-full bg-paper/10" />
              </div>
              <div className="h-6 w-14 rounded-full bg-gold/40" />
            </div>
            <div className="flex items-center gap-3">
              <div className="h-12 w-9 rounded bg-paper/15" />
              <div className="flex-1 space-y-2">
                <div className="h-2.5 w-2/3 rounded-full bg-paper/20" />
                <div className="h-2.5 w-1/3 rounded-full bg-paper/10" />
              </div>
              <div className="h-6 w-14 rounded-full bg-gold/40" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
