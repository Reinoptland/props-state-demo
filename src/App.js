import React from "react";
import logo from "./logo.svg";
import "./App.css";
import StudentCard from "./components/StudentCard";

// - Put elements in side of elements
// - Interpolate values (or expressions)
//  - what kind of values can we interpolate?
//  - values or expressions
//  - strings, numbers, booleans
//  - NO OBJECTS
// - We can pass props

function App() {
  const students = [
    {
      id: 2400,
      name: "Thibaud",
      fieldOfStudy: "Webdevelopment",
    },
    {
      id: 2401,
      name: "Gosia",
      fieldOfStudy: "Webdevelopment",
    },
  ];

  // const thibaud = students[0];
  // const gosia = students[1];

  return (
    <div className="App">
      <header className="App-header">
        {/* 
         Version 1
        <div>
          <h4>{thibaud.name}</h4>
          <p>{thibaud.fieldOfStudy}</p>
        </div>
        <div>
          <h4>{gosia.name}</h4>
          <p>{gosia.fieldOfStudy}</p>
        </div> */}

        {/* 
        Version 2
        <StudentCard name="Thibaud" fieldOfStudy="Brewing" />
        <StudentCard name="Gosia" fieldOfStudy="Webdevelopment" />
        <StudentCard name="Sjouke" fieldOfStudy="Product development" /> 
        */}
        {students.map((student) => {
          // console.log(student);
          return (
            <StudentCard
              key={student.id}
              name={student.name}
              fieldOfStudy={student.fieldOfStudy}
            />
          );
        })}
      </header>
    </div>
  );
}

export default App;
