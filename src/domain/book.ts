export type ISBN = string & { readonly _brand: "ISBN" };

export type Condition = "new" | "good" | "fair" | "worn";

export type Book = {
  isbn: ISBN;
  title: string;
  author: string;
  publisher: string | null;
  publishedYear: number | null;
  language: string | null;
  synopsis: string | null;
  coverUrl: string | null;
};

export function asISBN(value: string): ISBN {
  return value as ISBN;
}
