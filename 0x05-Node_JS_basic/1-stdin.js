const welcomeMessage = "Welcome to Holberton School, what is your name?";
console.log(welcomeMessage);
process.stdin.on('data', (data) => {
  username = data.toString().trim();
  console.log(`Your name is: ${username}`);
});
process.stdin.on('end', () => {
  console.log("This important software is now closing");
});
