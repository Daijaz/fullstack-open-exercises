import { useState } from 'react'

const Button = (props) => {
  return (
    <>
    <button onClick={props.onClick}>{props.text}</button>
    </>
  )
}

const Anecdote = (props) => {
  return (
    <>
    <p>{props.anecdotes}</p>
    </>
  )
}

const Vote = (props) => {
  return (
    <>
    <p>has {props.votes} votes</p>
    </>
  )
}


const AnecdoteVotes = (props) => {

  let max = 0
  let element = 0
  for(let index = 0; index < props.votes.length; index++) {
    if(props.votes[index] > max){
      max = props.votes[index]
      element = index
    }
  }

  return (
  <>
  <h1>Anecdote with most votes</h1>
  <p>{props.anecdotes[element]}</p>
  <p>has {max} votes</p>  
  </>
  )
}

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.'
  ]

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0))


  const handleAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length)) 
  }

  const handleVote = () => {
    const copy = [...votes]
    copy[selected] += 1
    setVotes(copy)
  }

  return (
    <div>
      <Anecdote anecdotes={anecdotes[selected]}></Anecdote>
      <Vote votes={votes[selected]}></Vote>
      <Button onClick={handleVote} text="vote"></Button>
      <Button onClick={handleAnecdote} text="next anecdote"></Button>
      <AnecdoteVotes anecdotes={anecdotes} votes={votes}></AnecdoteVotes>
    </div>
  )
}

export default App