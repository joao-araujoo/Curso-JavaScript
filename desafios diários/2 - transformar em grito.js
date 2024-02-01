const process = require('process');

console.log('Digite uma string qualquer: ')
process.stdin.on('data', (keyboard) => {
  console.log(keyboard.toUpperCase());
  process.exit();
})