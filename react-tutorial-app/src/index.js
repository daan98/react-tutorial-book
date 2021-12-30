import React from 'react';
import ReactDom from 'react-dom';
import './index.css'
import { books } from './Books';
import BookInfo from './BookInfo';

function BookList(){

  return (
    <section className="booklist">
      {books.map(book => (
        <BookInfo key={book.id} {...book} />
      ))}
    </section>
  );
}

ReactDom.render(<BookList />, document.getElementById('root'));

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();