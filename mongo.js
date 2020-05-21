const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

if (process.argv.length < 3) {
    console.log('Please provide the password as an argument: node mongo.js <password>')
    process.exit(1)
}
const password = process.argv[2]

const url =
    `mongodb+srv://Richard:${password}@cluster0-zvoaz.mongodb.net/contacts?retryWrites=true&w=majority`

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })

const personSchema = new mongoose.Schema({
    name: { type: String, minlength: 3, required: true, unique: true },
    number: {
        type: Number, required: true, unique: true, validate: {
            validator: function (v) {
                return /\d{8,}/.test(v);
            },
            message: props => `${props.value} is not a valid phone number!`
        },
    }
});
personSchema.plugin(uniqueValidator);

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
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
