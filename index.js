const express = require('express')
const app = express()
const port = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send('Hello World! Server is running')
})

app.listen(port, () => {
  console.log(`Server is running on  ${port}`)
})


//That is ok simple node express server is done.