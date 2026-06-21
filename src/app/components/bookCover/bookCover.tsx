const bookColors = [
  { cloth: "oklch(0.52 0.11 48)", foil: "oklch(0.89 0.07 82)" }, // terracota
  { cloth: "oklch(0.40 0.06 155)", foil: "oklch(0.84 0.08 80)" }, // verde
  { cloth: "oklch(0.44 0.10 25)", foil: "oklch(0.85 0.07 82)" }, // oxblood
  { cloth: "oklch(0.36 0.04 285)", foil: "oklch(0.82 0.07 82)" }, // índigo
  { cloth: "oklch(0.35 0.03 60)", foil: "oklch(0.80 0.09 80)" }, // marrom
  { cloth: "oklch(0.40 0.05 200)", foil: "oklch(0.84 0.07 82)" }, // petróleo
  { cloth: "oklch(0.46 0.08 320)", foil: "oklch(0.86 0.06 82)" }, // ameixa
  { cloth: "oklch(0.42 0.07 140)", foil: "oklch(0.84 0.08 80)" }, // esmeralda
];
const defaultBooks = [
  { title: "Dom Casmurro", author: "Machado de Assis" },
  { title: "Grande Sertão: Veredas", author: "João Guimarães Rosa" },
  { title: "Memórias Póstumas de Brás Cubas", author: "Machado de Assis" },
  { title: "Vidas Secas", author: "Graciliano Ramos" },
  { title: "O Cortiço", author: "Aluísio Azevedo" },
  { title: "Capitães da Areia", author: "Jorge Amado" },
  { title: "A Hora da Estrela", author: "Clarice Lispector" },
  { title: "Macunaíma", author: "Mário de Andrade" },
  { title: "Iracema", author: "José de Alencar" },
  { title: "O Quinze", author: "Rachel de Queiroz" },
  { title: "Cem Anos de Solidão", author: "Gabriel García Márquez" },
  { title: "Dom Quixote", author: "Miguel de Cervantes" },
  { title: "Crime e Castigo", author: "Fiódor Dostoiévski" },
  { title: "Os Irmãos Karamázov", author: "Fiódor Dostoiévski" },
  { title: "Guerra e Paz", author: "Liev Tolstói" },
  { title: "Anna Karênina", author: "Liev Tolstói" },
  { title: "Madame Bovary", author: "Gustave Flaubert" },
  { title: "O Vermelho e o Negro", author: "Stendhal" },
  { title: "O Conde de Monte Cristo", author: "Alexandre Dumas" },
  { title: "Os Miseráveis", author: "Victor Hugo" },
  { title: "Orgulho e Preconceito", author: "Jane Austen" },
  { title: "Jane Eyre", author: "Charlotte Brontë" },
  { title: "O Morro dos Ventos Uivantes", author: "Emily Brontë" },
  { title: "Grandes Esperanças", author: "Charles Dickens" },
  { title: "Moby Dick", author: "Herman Melville" },
  { title: "1984", author: "George Orwell" },
  { title: "A Revolução dos Bichos", author: "George Orwell" },
  { title: "Admirável Mundo Novo", author: "Aldous Huxley" },
  { title: "Fahrenheit 451", author: "Ray Bradbury" },
  { title: "O Apanhador no Campo de Centeio", author: "J. D. Salinger" },
  { title: "O Grande Gatsby", author: "F. Scott Fitzgerald" },
  { title: "O Sol é para Todos", author: "Harper Lee" },
  { title: "Ulisses", author: "James Joyce" },
  { title: "Em Busca do Tempo Perdido", author: "Marcel Proust" },
  { title: "O Processo", author: "Franz Kafka" },
  { title: "A Metamorfose", author: "Franz Kafka" },
  { title: "O Estrangeiro", author: "Albert Camus" },
  { title: "A Peste", author: "Albert Camus" },
  { title: "O Lobo da Estepe", author: "Hermann Hesse" },
  { title: "Sidarta", author: "Hermann Hesse" },
  { title: "O Senhor dos Anéis", author: "J. R. R. Tolkien" },
  { title: "O Hobbit", author: "J. R. R. Tolkien" },
  { title: "Frankenstein", author: "Mary Shelley" },
  { title: "Drácula", author: "Bram Stoker" },
  { title: "O Retrato de Dorian Gray", author: "Oscar Wilde" },
  { title: "O Pequeno Príncipe", author: "Antoine de Saint-Exupéry" },
  { title: "Pedro Páramo", author: "Juan Rulfo" },
  { title: "A Casa dos Espíritos", author: "Isabel Allende" },
  { title: "Rayuela", author: "Júlio Cortázar" },
  { title: "Ficções", author: "Jorge Luis Borges" },
];

function colorIndex(seed: string) {
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = (hash * 31 + seed.charCodeAt(i)) | 0;
  }
  return Math.abs(hash) % bookColors.length;
}

type BookCoverProps = {
  bookName?: string;
  authorName?: string;
  index?: number;
};

export default function BookCover({ bookName, authorName, index = 0 }: BookCoverProps) {
  const fallback = defaultBooks[index % defaultBooks.length]!;
  const title = bookName ?? fallback.title;
  const author = authorName ?? fallback.author;

  const pick = bookColors[colorIndex(title + author)]!;
  return (
    <div
      className="flex aspect-[3/4.4] w-full flex-col justify-end overflow-hidden rounded-[2px_6px_6px_2px] pt-5 pr-3.5 pb-3.5 pl-6"
      style={{
        background: pick.cloth,
        boxShadow:
          "inset 8px 0 0 rgba(0,0,0,0.2), 0 14px 32px rgba(50,35,20,0.26)",
      }}
    >
      <span
        className="font-serif text-base font-semibold leading-tight text-balance line-clamp-4"
        style={{ color: pick.foil }}
      >
        {title}
      </span>
      <span className="mt-1.5 font-serif text-[11px] italic text-white/70">
        {author}
      </span>
    </div>
  );
}
