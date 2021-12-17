const express = require('express');
const path = require('path');
const exphbs = require('express-handlebars');
const { engine } = require('express-handlebars');
const methodOverride = require('method-override');
const router = require('express').Router();
const session = require('express-session');

// Inizializations
const app = express();
require('./database')

// Settings
app.set('port', process.env.PORT || 4000);
app.set('views', path.join(__dirname, 'views'));
app.engine('.hbs', engine({
    defaultLayout: 'main',
    layoutsDir: path.join(app.get('views'), 'layouts'),
    partialsDir: path.join(app.get('views'), 'partials'),
    extname: '.hbs'
}));
app.set('view engine', '.hbs')

// Middlewares
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}))

// Global Variables

// Routes
app.use(require('./routes/router'));

// Static Files
app.use(express.static(path.join(__dirname, 'public')))

// Server is listening
app.listen(app.get('port'), () => {
    console.log('[SERVER] Server on port ', app.get('port'))
});
