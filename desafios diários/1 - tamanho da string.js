const process = require('process');

console.log('Digite uma string qualquer: ')
process.stdin.on('data', (keyboard) => {
  console.log(`Essa string possui ${keyboard.length} caracteres`)
  process.exit();
})