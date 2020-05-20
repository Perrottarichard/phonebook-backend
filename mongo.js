const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}
const password = process.argv[2]

const url =
    `mongodb+srv://Richard:${password}@cluster0-zvoaz.mongodb.net/contacts?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true })

const personSchema = new mongoose.Schema({
    name: String,
    number: Number,
})

const Person = mongoose.model('Person', personSchema)

const person = new Person({
    name: process.argv[3],
    number: process.argv[4],
})

if (process.argv.length > 3)
    person.save().then(result => {
        console.log(`added ${result.name} number ${result.number} to phonebook`)
        mongoose.connection.close()
    })

if (process.argv.length === 3) {
    Person.find({})
        .then(result => {
            console.log(`phonebook`)
            result.forEach(person => {
                console.log(`${person.name} ${person.number}`)
            })

            mongoose.connection.close()
        })
}
