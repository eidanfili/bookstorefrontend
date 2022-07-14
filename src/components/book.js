import React from "react";

export default function Book(props) {
  return (
    <div>
      <img className="book-img" src={props.bookData.img_url} />
      <h2>{props.bookData.name}</h2>
      <h3>{props.bookData.author}</h3>
      <p>{props.bookData.price}</p>
      <h4>{props.bookData.description}</h4>
    </div>
  );
}
