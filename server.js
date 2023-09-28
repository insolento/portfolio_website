// server.js, Maksym Bezverkhnii, 301287637, September 27, 2023
const express = require('express')
const app = express()


app.use(express.static('public'));


app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');


app.get('/', (req, res) => {
  const currentPageUrl = req.originalUrl; 
  res.render('home', { currentPageUrl });
});

const indexRouter = require('./routes/index');
app.use('/', indexRouter);


app.listen(3000)

// app.set('view engine', 'ejs')

// app.get('/', (req, res) => {
//     console.log('Here')
//     // res.status(500).json({ message : "Error" })
//     //res.json({ message : "Error" })
//     res.render('index', { text1 : "World"})
// })
