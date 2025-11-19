import React from "react";
import BookCard from "./components/BookCard"; 
import "./App.css";

function App() {

  const books = [
    {
      title: "The Alchemist",
      author: "Paulo Coelho",
      genre: "Fiction",
      year: 1988,
      description: "A story about following your dreams and discovering your purpose."
    },
    {
      title: "Atomic Habits",
      author: "James Clear",
      genre: "Self-Help",
      year: 2018,
      description: "Shows how small habits can bring massive success in life."
    },
    {
      title: "Becoming",
      author: "Michelle Obama",
      genre: "Biography",
      year: 2018,
      description: "An inspiring memoir by the former First Lady of the United States."
    },
    {
      title: "Wings of Fire",
      author: "A.P.J. Abdul Kalam",
      genre: "Biography",
      year: 1999,
      description: "Autobiography of Dr. Kalam and his inspiring life journey."
    },
    {
      title: "The Silent Patient",
      author: "Alex Michaelides",
      genre: "Mystery",
      year: 2019,
      description: "A gripping psychological thriller full of suspense."
    }
  ];

  const totalBooks = books.length;
  const mostCommonGenre = "Biography";

  return (
    <div className="container">
      <header>
        <h1>My Book Collection</h1>
        <p>Books That Shaped My Thinking</p>
      </header>

      <div className="books-list">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            author={book.author}
            genre={book.genre}
            year={book.year}
            description={book.description}
          />
        ))}
      </div>

      <section className="summary">
        <h2>Books Summary</h2>
        <p>Total Books: {totalBooks}</p>
        <p>Most Common Genre: {mostCommonGenre}</p>
      </section>

      <footer>
        © 2025 Naja Nafeesa | your-email@example.com
      </footer>
    </div>
  );
}

export default App;
