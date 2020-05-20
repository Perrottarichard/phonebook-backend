require('dotenv').config()
const express = require('express');
const morgan = require('morgan');
const Person = require('./models/person')

const app = express();

app.use(express.json());
app.use(express.static('build'))

morgan.token('obj', function getObj(req) {
    let pObj = {
        name: req.body.name,
        number: req.body.number
    }
    return JSON.stringify(pObj);
})
app.use(morgan(`:method :url :status :res[content-length] - :response-time ms :obj`))

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


app.get('/api/persons/:id', (req, res) => {
    Person.findById(req.params.id)
        .then(person => {
            if (person) {
                res.json(person)
            } else {
                res.status(404).end()
            }

        })
        .catch(error => {
            console.log(error)
            response.status(400).send({ error: 'malformatted id' })
        })
})

app.get('/info', (req, res) => {
    Person.find({}).then(result => {
        res.send(`<h3>Phonebook has info for ${result.length} people</h3>${Date()}`)
    })
})

// const generateId = () => {
//     const maxId = persons.length > 0 ? Math.max(...persons.map(p => p.id)) : 0
//     return maxId + 1
// }

app.post('/api/persons', (req, res) => {
    const body = req.body;
    if (!body.name) {
        return res.status(400).json({
            error: 'name missing'
        })
    }
    if (!body.number) {
        return res.status(400).json({
            error: 'number missing'
        })
    }
    // if (persons.filter(p => p.name === body.name).length > 0) {
    //     return res.status(400).json({
    //         error: 'name must be unique'
    //     })
    // }
    // if (persons.filter(p => p.number === body.number).length > 0) {
    //     return res.status(400).json({
    //         error: 'number must be unique'
    //     })
    // }
    const contact = new Person({
        name: body.name,
        number: body.number
    })
    contact.save().then(savedPerson => {
        res.json(savedPerson)
    })
})


app.delete('/api/persons/:id', (req, res) => {
    Person.deleteOne({ _id: req.params.id }, (err) => {
        if (err) console.log(err)
    }).then(person => {
        res.send(`Contact successfully deleted`)
    })
    // persons = persons.filter(person => person.id !== id)
    // res.status(204).end();
})

app.put('/api/persons/:id', (req, res) => {
    Person.findByIdAndUpdate({ _id: req.params.id }, { _id, name: req.body.name, number: req.body.number }, (err) => {
        if (err) console.log(err)
    }).then(update => {
        res.send(update)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
