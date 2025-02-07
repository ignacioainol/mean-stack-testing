const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const path = require('path');
const app = express();

const { mongoose } = require('./database');

//Settings
app.set('port', process.env.PORT || 3000);

//Middlewares
app.use(morgan('dev'));
app.use(express.json());
app.use(cors({ origin: 'http://localhost:4200'}));

//Routes
app.use('/api/employees', require('./routes/employee.routes'));

//static files
app.use(express.static(path.join(__dirname + './../dist/frontend')));

//Starting
app.listen(app.get('port'), () => {
    console.log("Server on port", app.get('port'));
})