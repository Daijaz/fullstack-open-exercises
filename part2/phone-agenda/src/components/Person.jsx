const Person = ({person, toggleDeletePerson}) => {
    return (
        <>
            <li key={person.id}>
                {person.name} {person.number} 
                {<button onClick={toggleDeletePerson}>delete</button>}
            </li>
        </>
    )
}

export default Person