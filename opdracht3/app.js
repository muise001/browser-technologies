const PORT = process.env.port || 2000
const express = require('express')
const ejs = require('ejs')
const bodyParser = require('body-parser')
const app = express()

const parser = bodyParser.urlencoded({extended: false})

let data = {
data : [
  tostiIJzer = {
    name : 'TRISTAR GR-2899 - Tosti IJzer',
    shortName : 'tostiIJzer',
    pic : 'img/tristarTostiIJzer.png',
    formAction : '/addT',
    formAction2 : '/remT',
    amount : 0,
    cost : 25
  },
  ham = {
    name : 'Tosti Schouderham',
    shortName : 'ham',
    pic : 'img/ham.png',
    formAction : '/addH',
    formAction2 : '/remH',
    amount : 0,
    cost : 2
  },
  kaas = {
    name : 'Goudse jong belegen plakken',
    shortName : 'kaas',
    pic : 'img/kaas.png',
    formAction : '/addK',
    formAction2 : '/remK',
    amount : 0,
    cost : 4
  },
  brood = {
    name : 'Tostibrood wit',
    shortName : 'brood',
    pic : 'img/brood.png',
    formAction : '/addB',
    formAction2 : '/remB',
    amount : 0,
    cost : 1
  },
  inCart = {
    amount : 0,
    totalCost : 0,
  },
]
}

app.set('view engine', 'ejs');
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index', data)
})

app.post('/addT', parser, (req, res) => {
  console.log(parseInt(req.body.tostiIJzer));
  data.data[0].amount = parseInt(req.body.tostiIJzer)
  data.data[4].amount = data.data[0].amount + data.data[1].amount + data.data[2].amount + data.data[3].amount
  data.data[4].totalCost = (data.data[0].amount * data.data[0].cost) + (data.data[1].amount * data.data[1].cost) + (data.data[2].amount * data.data[2].cost) + (data.data[3].amount * data.data[3].cost)
  res.render('index', data)
})

app.post('/remT', (req, res) => {
  data.data[0].amount = 0
  data.data[4].amount = data.data[0].amount + data.data[1].amount + data.data[2].amount + data.data[3].amount
  data.data[4].totalCost = (data.data[0].amount * data.data[0].cost) + (data.data[1].amount * data.data[1].cost) + (data.data[2].amount * data.data[2].cost) + (data.data[3].amount * data.data[3].cost)
  res.render('winkelwagen', data)
})

app.post('/addH', parser, (req, res) => {
  data.data[1].amount = parseInt(req.body.ham)
  data.data[4].amount = data.data[0].amount + data.data[1].amount + data.data[2].amount + data.data[3].amount
  data.data[4].totalCost = (data.data[0].amount * data.data[0].cost) + (data.data[1].amount * data.data[1].cost) + (data.data[2].amount * data.data[2].cost) + (data.data[3].amount * data.data[3].cost)
  res.render('index', data)
})

app.post('/remH', (req, res) => {
  data.data[1].amount = 0
  data.data[4].amount = data.data[0].amount + data.data[1].amount + data.data[2].amount + data.data[3].amount
  data.data[4].totalCost = (data.data[0].amount * data.data[0].cost) + (data.data[1].amount * data.data[1].cost) + (data.data[2].amount * data.data[2].cost) + (data.data[3].amount * data.data[3].cost)
  res.render('winkelwagen', data)
})

app.post('/addB', parser, (req, res) => {
  data.data[3].amount = parseInt(req.body.brood)
  data.data[4].amount = data.data[0].amount + data.data[1].amount + data.data[2].amount + data.data[3].amount
  data.data[4].totalCost = (data.data[0].amount * data.data[0].cost) + (data.data[1].amount * data.data[1].cost) + (data.data[2].amount * data.data[2].cost) + (data.data[3].amount * data.data[3].cost)
  res.render('index', data)
})

app.post('/remB', (req, res) => {
  data.data[3].amount = 0
  data.data[4].amount = data.data[0].amount + data.data[1].amount + data.data[2].amount + data.data[3].amount
  data.data[4].totalCost = (data.data[0].amount * data.data[0].cost) + (data.data[1].amount * data.data[1].cost) + (data.data[2].amount * data.data[2].cost) + (data.data[3].amount * data.data[3].cost)
  res.render('winkelwagen', data)
})

app.post('/addK', parser, (req, res) => {
  data.data[2].amount = parseInt(req.body.kaas)
  data.data[4].amount = data.data[0].amount + data.data[1].amount + data.data[2].amount + data.data[3].amount
  data.data[4].totalCost = (data.data[0].amount * data.data[0].cost) + (data.data[1].amount * data.data[1].cost) + (data.data[2].amount * data.data[2].cost) + (data.data[3].amount * data.data[3].cost)
  res.render('index', data)
})

app.post('/remK', (req, res) => {
  data.data[2].amount = 0
  data.data[4].amount = data.data[0].amount + data.data[1].amount + data.data[2].amount + data.data[3].amount
  data.data[4].totalCost = (data.data[0].amount * data.data[0].cost) + (data.data[1].amount * data.data[1].cost) + (data.data[2].amount * data.data[2].cost) + (data.data[3].amount * data.data[3].cost)
  res.render('winkelwagen', data)
})

app.post('/empty', (req, res) => {
  data.data[0].amount = 0
  data.data[1].amount = 0
  data.data[2].amount = 0
  data.data[3].amount = 0
  data.data[4].amount = 0
  data.data[4].cost = 0
  res.render('index', data)
})

app.get('/winkelwagen', (req, res) => {
  res.render('winkelwagen', data)
})

var server = app.listen(PORT, function() {
  console.log('port 2000')
})
