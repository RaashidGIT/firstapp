import React from 'react'

function Createobj() {
  var employee={
    name:"riya",
    dept:"cs",
    place:"calicut",
    rollno:5
  };
  return (
    <div>
        <h1>Employee details</h1>
        <p>name:{employee.name}</p>
        <p>dept:{employee.dept}</p>
        <p>place:{employee.place}</p>
        <p>rollno:{employee.rollno}</p>
    </div>
  )
}

export default Createobj
