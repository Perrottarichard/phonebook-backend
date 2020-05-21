require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const Person = require('./models/person')

const app = express()

app.use(express.json())
app.use(express.static('build'))

morgan.token('obj', function getObj(req) {
    let pObj = {
        name: req.body.name,
        number: req.body.number
    }
    return JSON.stringify(pObj)
})
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :obj'))

// eslint-disable-next-line no-unused-vars
let persons = app.get('/api/persons', (req, res) => {
    Person.find({}).then(result => {
        res.json(result)
    })
})

app.get('/api/persons', (req, res) => {
    Person.find({}).then(result => {
        res.json(result)
    })
})

app.get('/api/persons/:id', (req, res, next) => {
    Person.findById(req.params.id)
        .then(person => {
            if (person) {
                res.json(person)
            } else {
                res.status(404).end()
            }

        })
        .catch(error => next(error))
})

app.get('/info', (req, res) => {
    Person.find({}).then(result => {
        res.send(`<h3>Phonebook has info for ${result.length} people</h3>${Date()}`)
    })
})

app.post('/api/persons', (req, res, next) => {
    const body = req.body
    const contact = new Person({
        name: body.name,
        number: body.number
    })
    contact.save()
        .then(savedPerson => savedPerson.toJSON())
        .then(savedAndFormattedPerson => {
            res.json(savedAndFormattedPerson)
        })
        .catch(error => next(error))
})


app.delete('/api/persons/:id', (req, res, next) => {
    Person.findByIdAndRemove(req.params.id)
        .then(res => {
            res.status(204).end()
        })
        .catch(error => next(error))
})

app.put('/api/persons/:id', (req, res, next) => {
    let updatedPerson = { _id: req.params.id, name: req.body.name, number: req.body.number }
    Person.findByIdAndUpdate(req.params.id, { $set: updatedPerson }, { runValidators: true, context: 'query' })
        .then(updatedPerson => {
            console.log(updatedPerson)
            res.json(updatedPerson)
        })
        .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
    console.error(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformatted id' })
    } else if (error.name === 'ValidationError') {
        return response.status(400).json({ error: error.message })
    }
    next(error)
}

app.use(errorHandler)

// eslint-disable-next-line no-undef
const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
