const chalk = require("chalk");
const validator = require("validator");



console.log(chalk.blue.underline.inverse("jfwghe"));

const res = validator.isEmail('foobar.com');
res ? (console.log(chalk.green.inverse(res))) : (console.log(chalk.red.inverse(res)));