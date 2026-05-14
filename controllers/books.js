

let books = [
    {id:1, title: 'the pragmatic Programmer', author: 'David Thomas', year: 1999},
    {id:2, title: 'Clean Code', author: 'Robert Martin', year: 2008},
    {id:3, title: 'Designinig Data Intensive Applications', author: 'Martin Kleppmann', year: 2017}
]

const getAllBooks = (req, res) => {
    res.json({books})
}

const getOneBook = (req, res) => {
    const book = books.find(b => b.id === parseInt(req.params.id))
    if (!book){
        return res.status(404).json({error:'Book not found'})
    }
    res.json({book})
}

const createBook = (req, res) => {
    const {title, author, year} = req.body
    if (!title || !author || !year) {
        return res.status(404).json({error: 'title, author and year are required'})
    }
    const newBook = { id: books.length + 1, title, author, year}
    books.push(newBook)
    res.status(201).json({ book: newBook})
}

const updateBook = (req, res) => {
  const book = books.find(b => b.id === parseInt(req.params.id))
  if (!book) {
    return res.status(404).json({ error: 'Book not found' })
  }
  const { title, author, year } = req.body
  if (title) book.title = title
  if (author) book.author = author
  if (year) book.year = year
  res.json({ book })
}

const deleteBook = (req, res) => {
  const index = books.findIndex(b => b.id === parseInt(req.params.id))
  if (index === -1) {
    return res.status(404).json({ error: 'Book not found' })
  }
  books.splice(index, 1)
  res.json({ message: 'Book deleted successfully' })
}

module.exports = { getAllBooks, getOneBook, createBook, updateBook, deleteBook }