const express = require('express');
const mongoose = require('mongoose');
const routes = require('./routes');
const cors = require('cors');
const PORT = 3333;

const app = express();

mongoose.connect('mongodb+srv://ray:Motobateria12@cluster0-q5olm.gcp.mongodb.net/users?retryWrites=true&w=majority',{
//mongoose.connect('mongodb+srv://ray:Motobateria12@cluster0-lzmml.mongodb.net/users?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(process.env.PORT || PORT);
