import React from 'react';
import {useParams} from 'react-router-dom';

const Book = (props) => {
  const params = useParams();
  let bookId = params.bookId;
  const book = props.onFind(bookId);
  return (
    <div id="detail">
      <hr/>
      {/* 도서 한 권에 대한 정보 */}
      <p>도서번호 : {book.id}</p>
      <p>도서명 : {book.title}</p>
      <p>도서저자 : {book.author}</p>
      <p>도서개요 : {book.description}</p>
    </div>
  );
};

export default Book;