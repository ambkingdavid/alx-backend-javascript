const fs = require('fs')

async function readDatabase(path) {
  await fs.readFile(path, 'utf-8', (resolve, error))
}