let books = [
  { id: 1, title: 'The Pragmatic Programmer', author: 'David Thomas', year: 1999 },
  { id: 2, title: 'Clean Code', author: 'Robert Martin', year: 2008 },
  { id: 3, title: 'Designing Data-Intensive Applications', author: 'Martin Kleppmann', year: 2017 }
]

const getAllBooks = (req, res, next) => {
  try {
    res.json({ books })
  } catch (err) {
    next(err)
  }
}

const getOneBook = (req, res, next) => {
  try {
    const book = books.find(b => b.id === parseInt(req.params.id))
    if (!book) return res.status(404).json({ error: 'Book not found' })
    res.json({ book })
  } catch (err) {
    next(err)
  }
}

const createBook = (req, res, next) => {
  try {
    const { title, author, year } = req.body
    if (!title || !author || !year) {
      return res.status(400).json({ error: 'title, author and year are required' })
    }
    const newBook = { id: books.length + 1, title, author, year }
    books.push(newBook)
    res.status(201).json({ book: newBook })
  } catch (err) {
    next(err)
  }
}

const updateBook = (req, res, next) => {
  try {
    const book = books.find(b => b.id === parseInt(req.params.id))
    if (!book) return res.status(404).json({ error: 'Book not found' })
    const { title, author, year } = req.body
    if (title) book.title = title
    if (author) book.author = author
    if (year) book.year = year
    res.json({ book })
  } catch (err) {
    next(err)
  }
}

const deleteBook = (req, res, next) => {
  try {
    const index = books.findIndex(b => b.id === parseInt(req.params.id))
    if (index === -1) return res.status(404).json({ error: 'Book not found' })
    books.splice(index, 1)
    res.json({ message: 'Book deleted successfully' })
  } catch (err) {
    next(err)
  }
}

module.exports = { getAllBooks, getOneBook, createBook, updateBook, deleteBook }