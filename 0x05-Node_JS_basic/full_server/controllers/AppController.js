#!/usr/bin/node
const express = require('express');
const app = express();

class AppController {
  static getHomePage(request, response) {
    const message = 'Hello Holberton School!';
    response.status(200).send(message);
  }
}

module.exports = AppController;
