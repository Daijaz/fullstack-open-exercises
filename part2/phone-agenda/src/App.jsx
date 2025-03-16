import { useState, useEffect } from 'react'
import axios from 'axios'
import  Filter  from './components/Filter'
import  PersonForm  from './components/PersonForm'
import  Persons  from './components/Persons'
import './assets/styles/App.css'


const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('') 
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    axios
    .get('http://localhost:3001/persons')
    .then((response) => {
      setPersons(response.data)
    })
  }, [])
  

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  return (
    <div className='main-container'>
      <h2>Phonebook</h2>
      <Filter handleFilterChange={handleFilterChange}/>
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} persons={persons} setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons persons={persons} newFilter={newFilter} handleFilterChange={handleFilterChange}/>
    </div>
  )
}

export default App