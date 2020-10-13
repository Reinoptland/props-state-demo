## Userstory

- As a teacher I want to see a list the students in my class, so I can start learning the names

## Model / Storage

What is a student

- object
  - name: string
  - field of study: string

Students: array of students

## Processing

- map the array of students

## Output

- card -> div
- h4 -> name
- p -> field of study

## Goal: Recap

- Props
- Making a component
- importing / exporting

## Creating a component

- Create folder (if not exists) for components
- create a file
- import React
- define a function
- return some jsx
- export the function
- import the component function in App.js and use
- Setup a component with a shortcut (rfc)

## Passing props & use props

- Why: make the component reusable
- Specify properties on the JSX like below
- `<StudentCard name="Thibaud" fieldOfStudy="Brewing" />`
- Define a parameter props
- `export default function StudentCard(props) {`
- Interpolate the values (or use in some other way)
- `<h4>{props.name}</h4>`

## Userstory

- As a teacher I want to track the presence of the students in my class, so I can keep track of who is here

## Model / Storage

- presence: boolean

## Processing

- Turn true / false into some readble string

## Output

- Interpolate that string

## Dynamic input

- Button that changes student presence into -> true

## Using state & useState hook

- import useState
- define getter, setter & intialState
- `const [score, setScore] = useState(0)`
- display the value of the state
- `<h5>Score: {score}</h5>`
- Event listener / Handler
- `<button onClick={givePoint}>+</button>`
- Write the handler / call the setter

```jasvascript
  function givePoint() {
    setScore(score + 1);
  }
```

## Difference between props and state

- State is dynamic
- State is managed by the component itself (for now ...)
- Props are passed down from parent
- Props are "read only" for a child component
- If Props or State change, the component rerenders
