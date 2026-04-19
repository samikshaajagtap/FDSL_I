const express = require('express');
const app = express();

app.use(express.json());

// Temporary database
let books = [];

// GET all books
app.get('/books', (req, res) => {
    res.json(books);
});

// POST add new book
app.post('/books', (req, res) => {
    const book = {
        id: Date.now(),
        title: req.body.title,
        author: req.body.author,
        price: req.body.price
    };

    books.push(book);
    res.json({
        message: "Book added successfully",
        book: book
    });
});

// PUT update book
app.put('/books/:id', (req, res) => {
    const id = req.params.id;

    books = books.map(book =>
        book.id == id ? { ...book, ...req.body } : book
    );

    res.json({ message: "Book updated successfully" });
});

// DELETE book
app.delete('/books/:id', (req, res) => {
    const id = req.params.id;

    books = books.filter(book => book.id != id);

    res.json({ message: "Book deleted successfully" });
});

// Server
app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});