import { useState, useEffect } from 'react'
import personService from './services/persons'
import Person from './components/Person'
import Notification from './components/Notification'
 
const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)

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
        setMessage(`Added ${personObject.name}`)
        setMessageType('success')
        setTimeout(() => {
          setMessage(null)
          setMessageType(null)
        }, 5000)
  
      } else {
        if(window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)){
          const personToChange = persons.find((person) => person.name === newName)
          const personCopy = {...personToChange, number: newNumber}

          personService
          .update(personCopy.id, personCopy)
          .then((response) => setPersons(persons.map(person => person.name !== response.name ? person : personCopy)))
          .catch(error => {
            setMessage(`There is an error updating ${personCopy.name} It was deleted before`)
            setMessageType('error')
    
            setTimeout(() => {
              setMessage(null)
              setMessageType(null)
            },5000)

            setPersons(persons.map(person => person.name !== response.name ? person : personCopy))
          }) 

          setNewName('')
          setNewNumber('') 
          setMessage(`Updated ${personCopy.name}`)
          setMessageType('success')
          setTimeout(() => {
            setMessage(null)
            setMessageType(null)
          }, 5000)
          setPersons(persons.map(person => person.name !== response.name ? person : personCopy))
        }
      }
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

  const toggleDeletePerson = (id) => {
    const personSelected = persons.find((person) => person.id === id)

    if(window.confirm(`Delete ${personSelected.name}?`)) {
      personService
      .deletePerson(id)
      .then(response => response.data.id)
      .then(response => setPersons(persons.filter(person => person.id !== response )))
      .catch(error => {
        setMessage(`There is an error deleting ${personSelected.name}. It was deleted before`)
        setMessageType('error')

        setTimeout(() => {
          setMessage(null)
          setMessageType(null)
        },5000)
      })
    }
  }


  const filtered = persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()) ? person.name : '')
 
  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} type={messageType} />
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
    </div>
  )
}
export default App