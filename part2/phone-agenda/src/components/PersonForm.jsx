const PersonForm = (props) => {
  
  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name: props.newName,
      number: props.newNumber
    }
    const alreadyUsed = props.persons.every(person => person.name !== props.newName)
    
    if(props.newName === ''){
      alert('Please fill the name and phone fields')
    } else if (alreadyUsed) {
      props.setPersons(props.persons.concat(personObject))
      props.setNewName('')
      props.setNewNumber('') 
    } else {
      alert(`${props.newName} is already added to phonebook`)
    }
  }    

  return (
    <>
        <form onSubmit={addPerson}>
            <div>
            name: <input value={props.newName} onChange={props.handleNameChange}/>
            </div>
            <div>
            phone: <input value={props.newNumber}onChange={props.handleNumberChange}/>
            </div>
            <div> 
            <button type="submit">add</button>
            </div>
        </form>
    </>
 )   
}

export default PersonForm;