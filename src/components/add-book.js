import React, { useState } from "react";
import axios from "axios";

export default function addBook() {
  const [name, setName] = useState("");
  const [author, setAuthor] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  const clearState = () => {
    setName("");
    setAuthor("");
    setPrice("");
    setDescription("");
  };

  const postBook = (event) => {
    axios
      .post(
        "http://127.0.0.1:5000/add-book",
        {
          name: name,
          author: author,
          price: price,
          description: description,
        },
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
      .then((response) => console.log(response))
      .catch((error) => console.error(error));
    clearState();
    event.preventDefault();
  };

  return (
    <div className="add-book">
      <h1 className="add-book-title">Enter your books data</h1>
      <form className="add-book-form" onSubmit={postBook}>
        <input
          value={name}
          className="add-book-form-input"
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="name"
        />
        <input
          value={author}
          className="add-book-form-input"
          onChange={(event) => setAuthor(event.target.value)}
          type="text"
          placeholder="author"
        />
        <input
          value={price}
          className="add-book-form-input"
          onChange={(event) => setPrice(event.target.value)}
          type="number"
          placeholder="price"
        />
        <textarea
          value={description}
          className="add-book-form-textarea"
          onChange={(event) => setDescription(event.target.value)}
          type="text"
          placeholder="description"
        />
        <button className="add-book-form-button">add book!</button>
      </form>
    </div>
  );
}
