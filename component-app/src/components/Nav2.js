import React from "react";

// 화살표 함수 사용 가능
const Nav2 = () => {
  return (
    <div className="nav">
      <nav>
        {/* 단일 태그인 경우에도 전부 여닫는 태그 다 필요함 */}
        <hr/>
        <ul>
          <li><a href="1.html">HTML</a></li>
          <li><a href="2.html">CSS</a></li>
          <li><a href="3.html">JS</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav2