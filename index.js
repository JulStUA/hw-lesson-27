const fs = require('node:fs/promises');

fs.readFile('./first.txt', 'utf-8')
  .then(res => console.log(res))
  .catch(err => console.log(err));

fs.writeFile('second.txt', 'I love NodeJS');
 