function App() {
  const course = "Half Stack application development";
  const part1 = "Fundamentals of React";
  const exercises1 = 10;
  const part2 = "Using props to pass data";
  const exercises2 = 7;
  const part3 = "State of a component";
  const exercises3 = 14;

  const Header = (props) => {
    return <h1>{props.course}</h1>;
  };
  const Content = (props) => {
    return (
      <>
        <Part part={part1} exercise={exercises1} />
        <Part part={part2} exercise={exercises2} />
        <Part part={part3} exercise={exercises3} />
      </>
    );
  };
  const Total = (props) => {
    return <p>Number of exercises {props.prop1 + props.prop2 + props.prop3}</p>;
  };
  const Part = (props) => {
    return (
      <p>
        {props.part} {props.exercise}{" "}
      </p>
    );
  };

  return (
    <div>
      <Header course={course} />
      <Content />
      <Total prop1={exercises1} prop2={exercises2} prop3={exercises3} />
    </div>
  );
}

export default App;
