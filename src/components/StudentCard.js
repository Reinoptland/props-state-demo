import React, { useState } from "react";

export default function StudentCard(props) {
  console.log("I GOT RUN", props.name);
  // const present = false;

  // first variable -> GETTER -> data
  // second variable -> SETTER -> function that you can use to update the state
  // useState(initialState)

  let [present, setPresent] = useState(false);
  let [score, setScore] = useState(0);

  //   console.log("PRESENT:", present);
  //   console.log("SETPRESENT:", setPresent);

  function handleClick() {
    console.log("I GOT CLICKED", props.name);
    if (present === false) {
      setPresent(true); // some data changed, rerender (execute this component function again)
    } else {
      setPresent(false);
    }

    // setPresent(!present); // true -> false, false -> true

    // NO! not like this
    // present = true;
    // React does not know it needs to update the page this way
  }

  function givePoint() {
    // console.log("executed?");
    // add 1 to score

    // NO!
    // score = score + 1
    // score++ -> score = score + 1
    // score += 1

    // setScore()
    setScore(score + 1);
  }

  function giveSuperPoint() {
    setScore(score + 5);
  }

  return (
    <div>
      <h4>{props.name}</h4>
      <p>{props.fieldOfStudy}</p>
      {/* Add event listener: onClick */}
      <button onClick={handleClick}>
        {present === true ? "present" : "absent"}
      </button>
      <h5>Score: {score}</h5>
      <p>
        <button onClick={givePoint}>+</button>
        <button onClick={giveSuperPoint}>++</button>
      </p>
    </div>
  );
}
