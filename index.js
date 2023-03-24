const express = require('express');
const cors = require('cors');

const rout_er = require('./routes/router')

const app = express();
app.use(cors())
app.use('/',rout_er)


const Port = 4200;

app.use(express.static('sahil-pro-frontend'));

app.listen(4200,()=>{
    console.log(`Server is running at port ${Port}`)
});
