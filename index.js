const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
   res.send('Hello World! Server is running')
})

app.use(cors());
app.use(express.json());

const users = [
   { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
   { id: 2, name: 'Sabnor', email: 'sabnoor@gmail.com' },
   { id: 3, name: 'Sabila', email: 'sabila@gmail.com' },
   { id: 4, name: 'Rubana', email: 'rubana@gmail.com' },
   { id: 5, name: 'Tamana', email: 'tamana@gmail.com' },

];





//MD code
const uri = "mongodb+srv://dbUser1:FeKYIQnbDC2hTM4g@cluster0.emgjgfy.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

async function run() {
   try {
      const userCollection = client.db('simpleNode').collection('users');
      const user = { name: 'mahiya Mahi', email: 'mehi@gmail.com' };
      // const result = await userCollection.insertOne(user);
      // console.log(result);


      app.post('/users', async (req, res) => {
         const user = req.body;
         const result = await userCollection.insertOne(user);
         console.log(result);
         user._id = result.insertedId;
         res.send(user);
     })
 }
   finally {

   }
}

run().catch(err => console.log(err))



















app.get('/users', (req, res) => {
   res.send(users)
})

//post -step 1
// app.post('/users', (req, res) => {
//    console.log('Post Api Called');
//    console.log(req.body);
// })

// app.post('/users', (req, res) => {
//    const user = req.body;
//    user.id = users.length + 1;
//    users.push(user);
//    console.log(user)
//    res.send(user);
// })





app.listen(port, () => {
   console.log(`Server is running on  ${port}`)
})


//That is ok simple node express server is done.