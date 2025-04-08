const Persons = (props) => {
    const filtered = props.persons.filter((person) =>
        person.name.toLocaleLowerCase().includes(props.newFilter))
    return (
        <>
            <ul>
                {filtered.map(person => 
                    <li key={person.name}>{person.name} {person.number}</li>
                )}
            </ul>     
        </>  
    )
}

export default Persons;