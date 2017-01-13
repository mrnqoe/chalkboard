var chalk = require("chalk");

var myMessage = chalk.black(chalk.bgWhite("This")) + " is my message to " + chalk.black(chalk.bgWhite("you !"));
console.log(myMessage);
