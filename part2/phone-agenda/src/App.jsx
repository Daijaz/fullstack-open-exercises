import { useState, useEffect } from 'react'
<<<<<<< HEAD
import personService from './services/persons'
import Person from './components/Person'
 
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
    .getAll()
    .then((initialPersons) => setPersons(initialPersons)  )
  }, [])

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }

    if (newName === "" || newNumber === "") {
      alert('You can submit blank info, try again.')
    } else {
      const notUsed = persons.every(person => person.name !== newName)
    
      if (notUsed) {
        personService
        .create(personObject)
        .then((personCreated) => setPersons(persons.concat(personCreated)))
        setNewName('')
        setNewNumber('')         
      } else {
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          const personToChange = persons.find((person) => person.name === newName)
          const personCopy = {...personToChange, number: newNumber}

          personService
          .update(personCopy.id, personCopy)
          .then((response) => setPersons(persons.map(person => person.name !== response.name ? person : personCopy)))
        }
      }
    }
  }
          
=======
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
  

>>>>>>> a7679ec47c46fa4d8a125116b43447ac79fb49bf
  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }
<<<<<<< HEAD
=======

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }
>>>>>>> a7679ec47c46fa4d8a125116b43447ac79fb49bf

  const handleFilterChange = (event) => {
    console.log(event.target.value)
    setNewFilter(event.target.value)
  }

  const toggleDeletePerson = (id) => {
    const personSelected = persons.find((person) => person.id === id)

    if(window.confirm(`Delete ${personSelected.name}?`)) {
      personService
      .deletePerson(id)
      .then(response => response.data.id)
      .then(response => setPersons(persons.filter(person => person.id !== response )))
    }
  }

  const filtered = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()) ? person.name : '')
 
  return (
    <div className='main-container'>
      <h2>Phonebook</h2>
<<<<<<< HEAD
      <div>
        filter shown with: <input value={newFilter} onChange={handleFilterChange}/>
      </div>
      <form onSubmit={addPerson}>
        <h2>add a new</h2> 
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          number: <input value={newNumber} onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {filtered.map(person => 
          <Person
          key={person.id} 
          person={person} 
          toggleDeletePerson={() => toggleDeletePerson(person.id)}
          />
        )}
      </ul>
=======
      <Filter handleFilterChange={handleFilterChange}/>
      <h3>add a new</h3>
      <PersonForm newName={newName} newNumber={newNumber} persons={persons} setPersons={setPersons} setNewName={setNewName} setNewNumber={setNewNumber} handleNameChange={handleNameChange} handleNumberChange={handleNumberChange}/>
      <h3>Numbers</h3>
      <Persons persons={persons} newFilter={newFilter} handleFilterChange={handleFilterChange}/>
>>>>>>> a7679ec47c46fa4d8a125116b43447ac79fb49bf
    </div>
  )
}

export default App