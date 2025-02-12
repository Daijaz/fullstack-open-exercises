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

const Statistics = (props) => {

  if (props.all === 0) {
    return (
      <p>No feedback given</p>
    )
  } else {
    return (
      <div>
        <h1>statistics</h1> 
        <p>good {props.good}</p>
        <p>gneutral {props.neutral}</p>
        <p>bad {props.bad}</p> 
        <p>all {props.all}</p> 
        <p>average {props.average}</p>
        <p>positive {props.positive} %</p>
      </div>
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