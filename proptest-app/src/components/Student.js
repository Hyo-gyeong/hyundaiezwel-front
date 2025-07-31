import React from 'react';

const Student = (props) => {
  const students = [];
  for (var i = 0; i < props.students.length; i++) {
    var student = props.students[i];
    students.push(
      <div>
        <p>name: {student.name}</p>
        <p>age: {student.age}</p>
        <p>year: {student.year}</p>
        <p>address: {student.address}</p>
      </div>
    );
  }
  return (
    <div>
      <h2>Student</h2>
      {students}
    </div>
  );
};

export default Student;