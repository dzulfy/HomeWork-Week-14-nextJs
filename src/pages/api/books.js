import { Books } from "@/database/models";

async function getAll() {
  try {
    const books = await Books.findAll();
    return books;
  } catch (e) {
    throw e;
  }
}

async function createBook(data) {
  try {
    const newBook = await Books.create(data);
    return newBook;
  } catch (e) {
    throw e;
  }
}

async function updateBook(id, data) {
  try {
    const updatedBook = await Books.update(data, {
      where: { id },
    });
    return updatedBook;
  } catch (e) {
    throw e;
  }
}

async function deleteBook(id) {
  try {
    const deletedBook = await Books.destroy({
      where: { id },
    });
    return deletedBook;
  } catch (e) {
    throw e;
  }
}

export default async function handler(req, res) {
  if (req.method === "GET") {
    const books = await getAll();
    res.status(200).json(books);
  } else if (req.method === "POST") {
    const { title, publisher, author, image } = req.body;
    const newBook = await createBook({ title, publisher, author, image });
    res.status(201).json(newBook);
  } else if (req.method === "PUT") {
    const { id, title, publisher, author, image } = req.body;
    const updatedBook = await updateBook(id, {
      title,
      publisher,
      author,
      image,
    });
    res.status(200).json(updatedBook);
  } else if (req.method === "DELETE") {
    const { id } = req.body;
    const deletedBook = await deleteBook(id);
    res.status(200).json(deletedBook);
  } else {
    res.status(405).end();
  }
}
