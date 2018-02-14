require ('dotenv').config()

const express = require('express')
    , massive = require('massive')
    , { SERVER_PORT, STRING } = process.env

const app = express()

massive(STRING).then(db => {
  app.set('db', db)
})

app.get('/over', (req, res) => {
  app.get('db').is_it_over().then(resp => {
    res.status(200).send(resp[0].over)
  })
})

app.put('/over', (req, res) => {
  app.get('db').its_over().then(resp => {
    res.status(200).send(resp[0].over)
  })
})

app.listen(SERVER_PORT, () => {
  console.log(`Listening on ${SERVER_PORT}.`)
})