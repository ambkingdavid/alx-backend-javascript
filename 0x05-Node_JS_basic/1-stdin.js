#!/usr/bin/node

console.log('Welcome to Holberton School'
+ ', what is your name?');
process.stdin.on('data', (data) => {
  console.log(`Your name is: ${data.toString().trim()}`);
});
process.stdin.on('close', () => {
  throw new Error('This important software is now closing');
});
