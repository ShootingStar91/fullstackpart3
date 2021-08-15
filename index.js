const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')

app.use(cors())

//app.use(morgan('tiny'))

morgan.token('body', request => {
    return JSON.stringify(request.body)
})
app.use(morgan(':method :url :status :body'))
app.use(express.json())

let persons = [
      { 
        "name": "Arto Hellas", 
        "number": "040-123456",
        "id": 1
      },
      { 
        "name": "Ada Lovelace", 
        "number": "39-44-5323523",
        "id": 2
      },
      { 
        "name": "Dan Abramov", 
        "number": "12-43-234345",
        "id": 3
      },
      { 
        "name": "Mary Poppendieck", 
        "number": "39-23-6423122",
        "id": 4
      }
    ]

app.get("/api/persons", (request, response) => {
    response.json(persons)
})

app.get("/", (request, response) => {
    response.send("Hello!")
    
})

app.get("/info", (request, response) => {
    response.send("<p>Phonebook has info for " + persons.length + " people</p> " + 
    "<p> " + (new Date()) + "</p>"
    )
    
})

app.get("/api/persons/:id", (request, response) => {
    const id = request.params.id
    const person = persons.find(person => person.id == id)
    if (person) {
        response.send("<p>" + person.name + " " + person.number + "</p>")
    } else {
        response.status(404).end()
    }
    
})

app.delete("/api/persons/:id", (request, response) => {
    const id = request.params.id
    const foundPerson = persons.find(person => person.id == id)

    if (foundPerson) {
        persons = persons.filter(person => person.id != id)
    } else {
        response.status(404).end()
    }
})

app.post("/api/persons", (request, response) => {
    const newId = Math.floor(Math.random() * 100000) + 1
    const person = request.body
    const foundPerson = persons.find(foundPerson => foundPerson.name === person.name)
    if (foundPerson) {
        response.status(400).json({ error: "Person already in database" })
        return
    }
    if (!person.name || !person.number || person.name === "" || person.number === "") {
        response.status(400).json({ error: "Missing name or number" })
        return
    }

    console.log(person)
    response.json(person)
    persons = [...persons, {...person, id: newId}]

    

})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
