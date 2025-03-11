import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: newName,
      number: newNumber
    }
    const alreadyUsed = persons.every(person => person.name !== newName)
    
    if (alreadyUsed) {
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('') 
    } else {
      alert(`${newName} is already added to phonebook`)
    }
  }
          
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

  const filtered = persons.filter((person) =>
    person.name.toLocaleLowerCase().includes(newFilter))

  console.log(filtered)

  return (
    <div>
      <h2>Phonebook</h2>
      filter shown with: <input onChange={handleFilterChange} />
      <form onSubmit={addPerson}>
        <h2>add a new</h2> 
        <div>
          name: <input onChange={handleNameChange}/>
        </div>
        <div>
          phone: <input onChange={handleNumberChange}/>
        </div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
      <h2>Numbers</h2>
      <ul>
        {
          filtered.map(person => 
            <li key={person.name}>{person.name} {person.number}</li>
          )
        }    
      </ul>

 
      
    </div>
  )
}

export default App