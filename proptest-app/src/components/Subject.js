import React from 'react';

// const Subject = ({title, sub, content}) => { //{}를 통해 매개변수 설정, title에 객체가 아닌 값을 전달
//   return (
//     <div>
//       <h1>{title}</h1>
//       <h1>{sub}</h1>
//       {content}
//     </div>
//   );
// };

const Subject = (props) => { // 위처럼 값 각각이 아니라 Object타입으로 받아짐
  // static defaultProps = { // 함수형에서는 static을 사용하지 못함, 클래스형만 사용 가능
  //   title:'web'
  // }
  return (
    <div>
      <h1>{props.title}</h1>
      {/* <h1>{this.props.title}</h1>  함수형에서는 this사용 불가, props직접 접근해야함*/}
      <h1>{props.sub}</h1>
      {props.content}
    </div>
  );
};
// Subject.defaultProps = { // 함수형에서는 불가능, 클래스형만 사용 가능
//   title:'web'
// }
export default Subject;