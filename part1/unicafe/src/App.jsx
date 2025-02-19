import { useState } from 'react'

const Button = (props) => {
  return (
  <div>
    <button onClick={props.handleClickGood}>{props.textGood}</button>
    <button onClick={props.handleClickNeutral}>{props.textNeutral}</button>
    <button onClick={props.handleClickBad}>{props.textBad}</button>
  </div>
  )
} 

const StatisticLine = (props) => {
    return (
      <tr>
        <td>{props.text}</td>
        <td>{props.number}</td>
      </tr>
    )  
}

const Statistics = (props) => {

  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <>
      
        <h1>statistics</h1> 
        <table>
          <tbody>
            <StatisticLine text="good" number={props.good}></StatisticLine>
            <StatisticLine text="neutral" number={props.neutral}></StatisticLine>
            <StatisticLine text="bad" number={props.bad}></StatisticLine>
            <StatisticLine text="all" number={props.all}></StatisticLine>
            <StatisticLine text="average" number={props.average}></StatisticLine>
            <StatisticLine text="positive" number={props.positive}></StatisticLine>
          </tbody>  
        </table>
      </>
    )
  }  
}

const App = () => {
  // guarda los clics de cada botón en su propio estado
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const handleClickGood = () => {
    setGood(good + 1);
  }

  const handleClickNeutral = () => {
    setNeutral(neutral+ 1);
  }

  const handleClickBad = () => {
    setBad(bad + 1);
  }

  let all = good + neutral + bad;

  return (
    <div>
      <h1>give feedback</h1>
      <Button handleClickGood={handleClickGood} handleClickNeutral={handleClickNeutral} handleClickBad={handleClickBad} textGood={"good"} textNeutral={"neutral"} textBad={"bad"}></Button>
      <Statistics good={good} neutral={neutral} bad={bad} all={all} average={all/3} positive={good * 100 / all}></Statistics>
    </div>
  );
};

export default App