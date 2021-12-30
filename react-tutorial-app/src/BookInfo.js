import React from "react";

export default function BookInfo(props){
    const { title, author, img} = props;
    const handleOnclick = () => alert("handling on click event");
    const handleOnMouseOver = (e) => {
      e.target.style.color = "blue"
      e.target.style.textTransform = "uppercase";
    }
    const handleOnMouseLeave = (e) => {
      e.target.style.color = "fuchsia";
      e.target.style.textTransform = "lowercase";
    }

    return(
      <article className="book-info" >
        <img src={img} alt="book cover" />
        <h1>{title}</h1>
        <h4 onMouseOver={handleOnMouseOver} onMouseLeave={handleOnMouseLeave}>{author}</h4>
        <button onClick={handleOnclick}>Click me!</button>
      </article>
    );
}