#!/usr/bin/node

class AppController {
  static getHomePage(request, response) {
    const message = 'Hello Holberton School!';
    response.status(200).send(message);
  }
}

module.exports = AppController;
