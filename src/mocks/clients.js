'use strict';

const faker = require('faker');

const getClients = (size = 5) => {
  const clients = [];
  for (let i = 0; i < size; i++) {
    clients.push({
      id: faker.random.uuid(),
      name: faker.name.findName(),
      email: faker.internet.email()
    })
  }

  return clients;
} 
module.exports = {
  getClients
}
