import { useState } from "react";

const Statistics = ({ v1, v2, v3 }) => {
  if (v1 + v2 + v3 === 0) return <>No feedback given</>;
  return (
    <table>
      <tbody>
        <StatisticLine target="good" votes={v1} />
        <StatisticLine target="neutral" votes={v2} />
        <StatisticLine target="bad" votes={v3} />
        <SumOfVotes v1={v1} v2={v2} v3={v3} />
        <Average v1={v1} v2={v2} v3={v3} />
        <Positive v1={v1} v2={v2} v3={v3} />
      </tbody>
    </table>
  );
};

const Title = ({ title }) => {
  return <h2>{title}</h2>;
};
const Button = ({ text, handleClick }) => {
  return <button onClick={handleClick}>{text}</button>;
};

const StatisticLine = ({ target, votes }) => {
  return (
    <tr>
      <td>{target}</td>
      <td>{votes}</td>
    </tr>
  );
};

const Average = ({ v1, v2, v3 }) => {
  const sum = v1 + v2 + v3;
  if (sum === 0)
    return (
      <tr>
        <td>Average</td>
        <td>0</td>
      </tr>
    );
  const av = (v1 - v3) / sum;
  return (
    <tr>
      <td>Average</td>
      <td>{av}</td>
    </tr>
  );
};

const Positive = ({ v1, v2, v3 }) => {
  if (v1 + v2 + v3 === 0)
    return (
      <tr>
        <td>positive</td>
        <td>0 %</td>
      </tr>
    );
  return (
    <tr>
      <td>positive</td>
      <td>{(v1 / (v1 + v2 + v3)) * 100} %</td>
    </tr>
  );
};

const SumOfVotes = ({ v1, v2, v3 }) => {
  return (
    <tr>
      <td>all</td>
      <td>{v1 + v2 + v3}</td>
    </tr>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <Title title="give feedback" />
      <Button text="good" handleClick={() => setGood(good + 1)} />
      <Button text="neutral" handleClick={() => setNeutral(neutral + 1)} />
      <Button text="bad" handleClick={() => setBad(bad + 1)} />
      <Title title="statics" />
      <Statistics v1={good} v2={neutral} v3={bad} />
    </div>
  );
};

export default App;
