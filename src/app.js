'use strict';

const express = require('express');
const { getClients } = require('./mocks/clients');
const app = express();

app.use(express.json());

const { v4 } = require('uuid');

app.get('/', (req, res) => {
  res.send('hello world');
})

const clients = getClients();

/* Exec express functions */
app.get('/clients', (req, res) => {
  return res.status(200).json(clients);
})

app.post('/clients', (req, res) => {
  const { name, email } = req.body;


  const obj = {
    id: v4(),
    name,
    email
  };

  clients.push(obj);

  return res.status(201).json(obj);
})

app.put('/clients/:id', (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;

  const obj = {
    id,
    name,
    email
  };

  const index = clients.findIndex(client => client.id === id);

  clients.splice(index, 1, obj);

  return res.status(200).json(obj);
})

app.delete('/clients/:id', (req, res) => {
  const { id } = req.params;

  const index = clients.findIndex(client => client.id === id);
  
  clients.splice(index, 1);

  return res.status(200).json(clients);
})

module.exports = app;
