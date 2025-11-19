import React from "react";
import "./BookCard.css";

function BookCard({ title, author, genre, year, description }) {
  return (
    <div className="book-card">
      <h2>{title}</h2>
      <p><strong>Author:</strong> {author}</p>
      <p><strong>Genre:</strong> {genre}</p>
      <p><strong>Year:</strong> {year}</p>
      <p className="description">{description}</p>
    </div>
  );
}

export default BookCard;
