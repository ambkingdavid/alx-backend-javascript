const readline = require('readline');

// Create an interface for reading input from the user
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

console.log("Welcome to Holberton School, what is your name?");

// Start a continuous loop to keep prompting for input
function promptForName() {
  rl.question('', (userInput) => {
    if (userInput === undefined) {
      // Ctrl+D was used to exit
      console.log("This important software is now closing");
      rl.close();
    } else {
      // Process the user's input
      console.log(`Your name is: ${userInput}`);
    }

    // Continue the loop by calling the function recursively
    promptForName();
  });
}

// Start the continuous input loop
promptForName();
