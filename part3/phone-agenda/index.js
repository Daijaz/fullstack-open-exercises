const express = require('express');
const app = express();

app.use(express.json());

const persons = [
    { 
      "id": 1,
      "name": "Arto Hellas", 
      "number": "040-123456"
    },
    { 
      "id": 2,
      "name": "Ada Lovelace", 
      "number": "39-44-5323523"
    },
    { 
      "id": 3,
      "name": "Dan Abramov", 
      "number": "12-43-234345"
    },
    { 
      "id": 4,
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122"
    }
]

app.get('/', (req, res) => {
    res.send('<h1>Phonebook</h1><p>Welcome to the Phone</h1>');
});        

app.get('/api/persons', (request, response) => {
    response.json(persons);
});

app.get('/info', (req, res) => {
    const date = new Date();
    const personCount = persons.length;
    res.send(`<p>Phonebook has info for ${personCount} people</p> <p>${date}</p>`);
});

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);
    const person = persons.find(p => p.id === id);
    if (person) {   
        res.json(person);
    } else {
        res.status(404).send('<h1>Person not found</h1>');
    }
});


const port = 3001;
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});