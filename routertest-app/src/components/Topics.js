import React from 'react';
import { Routes, Route, NavLink, useParams } from 'react-router-dom';
import Topic from './Topic';


const Topics = (props) => {
  // var params = useParams();
  // console.log(params);
  let contents = props.contents;
  var list = [];
  for (var i = 0; i < contents.length; i++) {
    list.push(
      <li key={contents[i].id}><NavLink to={"/topics/" + contents[i].id}>{contents[i].title}</NavLink></li>
    );
  }
  return (
    <div>
      <h2>Topics</h2>

      {/*
        to에는 url을 전부 다 써주지만 Route에는 가장 하위 url만 맞춰주면 됨 
        아래 목록은 정적 태그임. 반드시 3개 목록이 생상됨. 데이터에 따라 다른 목록을 표현하려고 하면 동적 태그 구성
        NavLink에는 모든 경로를 써워야 하지만 Route에는 끝 path만 써주면 됨
      */}
      {/* <ul>
        <li><NavLink to="/topics/1">Politics</NavLink></li>
        <li><NavLink to="/topics/2">Economy</NavLink></li>
        <li><NavLink to="/topics/3">Society</NavLink></li>
      </ul> */}
      <ul>
        {list}
      </ul>
      <Routes>
        {/* 
          App에서 topics까지는 맞춰왔기 때문에 뒤에 숫자만 맞추면 됨 
          앞서 /topics/*로 매핑되어 들어왔기 때문에 여기서부터는 *에 해당하는 url을 구분해주면 됨
        */}
        {/* <Route path="/1" element={"Politics is ..."}></Route>
        <Route path="/2" element={"Economy is ..."}></Route>
        <Route path="/3" element={"Society is ..."}></Route> */}

        {/* : 이 붙어있으면 어떠한 변수든 다 받을 수 있는 변수 선언한 것, 가상변수를 topic_id라는 이름으로 전달한 것 */}
        <Route path="/:topic_id" element={<Topic content={contents} />}></Route>
      </Routes>
    </div>
  );
};

export default Topics;