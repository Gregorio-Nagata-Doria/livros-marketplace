import { asISBN, type Book } from "@/domain/book";

export const sampleBook: Book = {
  isbn: asISBN("9788535914849"),
  title: "Cem anos de solidão",
  author: "Gabriel García Márquez",
  publisher: "Record",
  publishedYear: 1967,
  language: "pt-BR",
  synopsis:
    "A saga da família Buendía ao longo de sete gerações na mítica cidade de Macondo. Realismo mágico em sua forma mais pura, onde o extraordinário e o cotidiano se confundem.",
  coverUrl: null,
};
