import React, { useEffect, useState } from "react";

function App() {
  const [books, setBooks] = useState([]);
  const [form, setForm] = useState({ title: "", author: "", price: "" });

  // GET books
  const fetchBooks = async () => {
    const res = await fetch("http://localhost:5000/books");
    const data = await res.json();
    setBooks(data);
  };

  useEffect(() => {
    fetchBooks();
  }, []);

  // POST book
  const addBook = async () => {
    await fetch("http://localhost:5000/books", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });
    fetchBooks();
  };

  // DELETE book
  const deleteBook = async (id) => {
    await fetch(`http://localhost:5000/books/${id}`, {
      method: "DELETE",
    });
    fetchBooks();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Book Manager (MERN)</h2>

      <input
        placeholder="Title"
        onChange={(e) => setForm({ ...form, title: e.target.value })}
      />
      <input
        placeholder="Author"
        onChange={(e) => setForm({ ...form, author: e.target.value })}
      />
      <input
        placeholder="Price"
        onChange={(e) => setForm({ ...form, price: e.target.value })}
      />

      <button onClick={addBook}>Add Book</button>

      <ul>
        {books.map((b) => (
          <li key={b.id}>
            {b.title} - {b.author} - ₹{b.price}
            <button onClick={() => deleteBook(b.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;