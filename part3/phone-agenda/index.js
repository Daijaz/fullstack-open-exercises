const express = require('express');
const morgan = require('morgan')
const app = express();

app.use(express.json());


morgan.token('body', (req, res) => {
  return JSON.stringify(req.body);
});

app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'));

let persons = [
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

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id);   
    persons = persons.filter(p => p.id !== id);
    res.status(204).send('<h1>Person deleted</h1>');
    console.log(persons);
});

const generateId = () => {
    const newId = Math.floor(Math.random() * 10000) + 1;
    if (newId > persons.length) {
       return newId
    }

};

app.post('/api/persons', (req, res) => {
    const person = req.body;

    const personExist= persons.find(p => p.name === person.name);


    if (!person || !person.name || !person.number) {
        return res.status(400).json({ error: 'Missing information for the POST' });
    } else if (personExist) {
        return res.status(400).json({ error: 'Name must be unique' });
    } else {
        const newPerson = {
            id: generateId(),
            name: person.name,
            number: person.number
        }
        persons.push(newPerson);
        res.status(201).json(newPerson);
    }

});

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

/*
const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:  ', request.path)
  console.log('Body:  ', request.body)
  console.log('---')
  next()
}
  app.use(requestLogger)
*/


app.use(unknownEndpoint)

const port = 3001;
app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}/`);
});