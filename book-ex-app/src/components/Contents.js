import React from 'react';
import {Link} from 'react-router-dom';

const Contents = (props) => {
  // console.log(props.book_list);
  const book_list = props.book_list;
  return (
    <div id="bookInfo">
      <h3>도서목록</h3>
      <table border="1">
        <tbody>
          <tr>
            <th>도서번호</th>
            <th>도서제목</th>
            <th>도서저자</th>
            <th>출판년도</th>
            <th>카테고리</th>
          </tr>
          {
            book_list.map((book) => (
              <tr key={book.id}> {/* 콘솔에러 방지 */}
                <td>{book.id}</td>
                {/* Link는 Contents 컴포넌트에서, 라우터 세팅은 독립적인(밑에 추가가 아니라 새로운 창 느낌..) url이므로 app에 추가 */}
                <td><Link to={"/Book/"+book.id}>{book.title}</Link></td>
                <td>{book.author}</td>
                <td>{book.year}</td>
                <td>{book.category}</td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Contents;