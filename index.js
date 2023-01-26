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
      
      app.get( '/users', async (req, res) =>{
         const cursor = userCollection.find({});
         const users = await cursor.toArray();
         res.send(users);
     })
   

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



app.listen(port, () => {
   console.log(`Server is running on  ${port}`)
})


//That is ok simple node express server is done.