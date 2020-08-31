const express = require("express");
const mongoose = require("mongoose");



// Initialise Express
const app = express();

// Middleware config

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(express.urlencoded({ extended: false }));

// Routes config
app.use('/', require('./routes/index'));
app.use('/projects', require('./routes/projects'));
app.use('/invest', require('./routes/invest'));

// Port config
const PORT = process.env.PORT || 7000;

mongoose.connect(`mongodb://localhost:27017/hackathon`, { useUnifiedTopology: true, useNewUrlParser: true }, () => {
    console.log(`Database connected`);
})

// Server starting
app.listen(PORT, () => {
    console.log(`Server started on http://localhost:${PORT}`)
});