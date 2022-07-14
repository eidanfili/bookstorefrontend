import React from "react";
import axios from "axios";

export default function Book(props) {
  const deleteBook = () => {
    axios
      .delete(`http://localhost:5000/book/${props.bookData.id}`, {
        headers: { "Access-Control-Allow-Origin": "*" },
      })
      .then((response) => console.log("success", response));
  };

  return (
    <div>
      <img className="book-img" src={props.bookData.img_url} />
      <h2>{props.bookData.name}</h2>
      <h3>{props.bookData.author}</h3>
      <p>{props.bookData.price}</p>
      <h4>{props.bookData.description}</h4>
      <button onClick={deleteBook}>Delete</button>
    </div>
  );
}
