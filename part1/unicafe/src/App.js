import { useState } from "react";

function StatisticLine(props) {
  return (
    <tr>
      <td>{props.text}: </td>
      <td>{props.value}</td>
    </tr>
  );
}

function Button(props) {
  return (
    <button onClick={() => props.onClick((prevState) => prevState + 1)}>
      {props.text}
    </button>
  );
}

function Statistics({ good, neutral, bad }) {
  function calculateAverage(good, neutral, bad) {
    let total = calculateTotal(good, neutral, bad);
    if (!total) {
      return 0;
    }
    return (good - bad) / total;
  }

  function calculateTotal(good, neutral, bad) {
    return good + neutral + bad;
  }

  function calculatePositive(good, neutral, bad) {
    let total = calculateTotal(good, neutral, bad);
    if (!total) return 0;
    return (good * 100) / total;
  }
  return (
    <div>
      <h1>Statistics</h1>
      {!calculateTotal(good, neutral, bad) ? (
        <p>No feedback given</p>
      ) : (
        <table>
          <tbody>
            <StatisticLine text={"Bad"} value={bad} />
            <StatisticLine text={"Neutral"} value={neutral} />
            <StatisticLine text={"Good"} value={good} />
            <StatisticLine
              text={"All"}
              value={calculateTotal(good, neutral, bad)}
            />
            <StatisticLine
              text={"Average"}
              value={calculateAverage(good, neutral, bad).toFixed(2)}
            />
            <StatisticLine
              text={"Positive"}
              value={calculatePositive(good, neutral, bad).toFixed(2)}
            />
          </tbody>
        </table>
      )}
    </div>
  );
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button text={"Bad"} onClick={setBad} />
        <Button text={"Neutral"} onClick={setNeutral} />
        <Button text={"Good"} onClick={setGood} />
      </div>
      <Statistics bad={bad} neutral={neutral} good={good} />
    </div>
  );
};

export default App;
