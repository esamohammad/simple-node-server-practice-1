const express = require('express');
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
   res.send('Hello World! Server is running')
})

app.use(cors());
// app.use(express.json());

const users = [
   { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
   { id: 2, name: 'Sabnor', email: 'sabnoor@gmail.com' },
   { id: 3, name: 'Sabila', email: 'sabila@gmail.com' },
   { id: 4, name: 'Rubana', email: 'rubana@gmail.com' },
   { id: 5, name: 'Tamana', email: 'tamana@gmail.com' },
   { id: 6, name: 'Habila', email: 'sHabila@gmail.com' },
   { id: 7, name: 'Jomila', email: 'jomila@gmail.com' },
   { id: 8, name: 'Sahana', email: 'sahana@gmail.com' },
   { id: 9, name: 'Subana', email: 'subana@gmail.com' },
   { id: 10, name: 'Hasina', email: 'hasina@gmail.com' },
];


app.get('/users', (req, res) => {
   res.send(users)
})

//post -step 1
app.post('/users', (req, res) => {
   console.log('Post Api Called');
})





app.listen(port, () => {
   console.log(`Server is running on  ${port}`)
})


//That is ok simple node express server is done.