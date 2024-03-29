const books = [
  {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
      name: 'George R. R. Martin',
      birthYear: 1948,
    },
    releaseYear: 1991,
  },
  {
    id: 2,
    name: 'O Senhor dos Anéis',
    genre: 'Fantasia',
    author: {
      name: 'J. R. R. Tolkien',
      birthYear: 1892,
    },
    releaseYear: 1954,
  },
  {
    id: 3,
    name: 'Fundação',
    genre: 'Ficção Científica',
    author: {
      name: 'Isaac Asimov',
      birthYear: 1920,
    },
    releaseYear: 1951,
  },
  {
    id: 4,
    name: 'Duna',
    genre: 'Ficção Científica',
    author: {
      name: 'Frank Herbert',
      birthYear: 1947,
    },
    releaseYear: 1947,
  },
  {
    id: 5,
    name: 'A Coisa',
    genre: 'Terror',
    author: {
      name: 'Stephen King',
      birthYear: 1947,
    },
    releaseYear: 1947,
  },
  {
    id: 6,
    name: 'O Chamado de Cthulhu',
    genre: 'Terror',
    author: {
      name: 'H. P. Lovecraft',
      birthYear: 1947,
    },
    releaseYear: 1928,
  },
];

/* const expectedResult = 'Stephen King'; */
const authorBornIn1947 = (books) => {
  return books.find((book) => book.author.birthYear === 1947).author.name;
};

console.log(authorBornIn1947(books));

/* const expectedResult = 'Duna'; */
const smallerName = (books) => {
  let nameBook;
  books.forEach((book) => {
    if (!nameBook || book.name.length < nameBook.length) {
      nameBook = book.name;
    }
  });
  return nameBook;
};
console.log(smallerName(books));

const getNamedBook = (books) => {
  return books.find((book) => book.name.length === 26);
};
console.log(getNamedBook(books));

const nasceramNoSecXX = (books) => {
  return books.every((book) => book.author.birthYear <= 2000 && book.author.birthYear > 1900);
};
console.log(nasceramNoSecXX(books));

const lancouLivroDecada80 = (books) => {
  return books.every((book) => book.releaseYear >= 1980 && book.releaseYear <= 1989);
};
console.log(lancouLivroDecada80(books));

const authorUnique = () => {
  return books.every(
    (book) =>
      !books.some(
        (bookSome) =>
          bookSome.author.birthYear === book.author.birthYear &&
          bookSome.author.name !== book.author.name
      )
  );
};
authorUnique(books);
