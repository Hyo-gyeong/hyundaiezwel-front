import React from 'react';
import {Link} from 'react-router-dom';

const Content = (props) => {
  const books = props.books;
  return (
    <div className='bookTableWrap'>
      <table className='bookTable' border="1">
        <tr>
          <th>No.</th>
          <th>책 제목</th>
          <th>저자</th>
          <th>장르</th>
          <th>가격</th>
        </tr>
      {
        books.map((book) => (
          <tr>
            <Link to={"/bookDetail/"+book.id}>
              <td id="bookId">{book.id}</td>
            </Link>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.genre}</td>
            <td>{book.price}원</td>
          </tr>
        ))
      }
      </table>
    </div>
  );
};

export default Content;