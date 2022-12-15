const express = require('express');
const app = express();
const prt = process.env.PORT || 5000
const cors = require('cors')

const todoRoutes = require('./routes/todo')


app.use(cors());

app.use(express.json())


// Routes
app.use(todoRoutes)



app.listen(prt, () => {
    console.log('server has started')
})