//importing required dependencies
const express = require('express');
const session = require('express-session');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require('./controllers');
const sequelize = require('./config/connection');
const exphbs = require('express-handlebars');
const hbs = exphbs.create({ helpers:require ('./utils/helpers')});

const app = express();
const PORT = process.env.PORT || 3001;

//set up sessions with cookies
const sess = {
secret: 'Super secret secret',
cookie: {},
resave: false,
saveUninitialized: true,
store: new SequelizeStore({
db: sequelize
}),
};

//middleware to be used again with a different session object
app.use(session(sess));
//parse incoming JSON data or URL - encoded form data

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

//using session middleware again with a different session object
app.use(session ({
secret: process.env.SECRET,
store: new SequelizeStore({ db: sequelize }),
resave: false,
saveUninitialized: false,
})
);

//using routes from the controller
app.use(routes);
//sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
app.listen(PORT, () => console.log('Listening on PORT ${PORT}'));
});

