export default function HowItWorks() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <h2 className="mb-8 text-center font-serif text-3xl font-medium tracking-tight">
        Como funciona
      </h2>

      <div className="grid gap-8 md:grid-cols-3">
        <div className="text-center">
          <span className="font-serif text-2xl text-gold">01</span>
          <h3 className="mt-2 font-serif text-xl font-semibold">Busque</h3>
          <p className="mt-2 text-ink-soft">
            Por ISBN, título ou autor — encontramos todas as edições.
          </p>
        </div>

        <div className="text-center">
          <span className="font-serif text-2xl text-gold">02</span>
          <h3 className="mt-2 font-serif text-xl font-semibold">Compare</h3>
          <p className="mt-2 text-ink-soft">
            Ofertas de vários sellers, com preço, condição e avaliação lado a
            lado.
          </p>
        </div>

        <div className="text-center">
          <span className="font-serif text-2xl text-gold">03</span>
          <h3 className="mt-2 font-serif text-xl font-semibold">
            Compre seguro
          </h3>
          <p className="mt-2 text-ink-soft">
            Checkout protegido e repasse ao seller via Stripe.
          </p>
        </div>
      </div>
    </section>
  );
}
