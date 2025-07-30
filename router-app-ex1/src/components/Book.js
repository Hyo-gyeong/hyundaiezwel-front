import React from 'react';
import {useParams} from 'react-router-dom';

const Book = (props) => {
  const params = useParams();
  const book = props.books[Number(params.id)-1];
  return (
    <div>
      <ul>
        <li id='bookDetailTitle'>&lt; {book.title} &gt;</li>
        <li>저자 : {book.author}</li>
        <li>가격 : {book.price}원</li>
        <li>재고 수량 : {book.stock}개</li>
        <li>책 소개: "{book.description}"</li>
      </ul>
    </div>
  );
};

export default Book;