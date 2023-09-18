const readline = require('readline');

// Create an interface for reading input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function askForName() {
  rl.question('Welcome to Holberton School, what is your name?\n', (userInput) => {
    if (userInput === undefined) {
      // Ctrl+D was used to exit
      console.log("This important software is now closing");
      rl.close();
    } else {
      // Process the user's input
      console.log(`Your name is: ${userInput}`);
      // Ask for the name again by calling the function recursively
      askForName();
    }
  });
}

// Start the interaction by calling the function
askForName();
