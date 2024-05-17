#! /usr/bin/env node
// Quiz Project - MCQs

import inquirer from "inquirer";
import chalk from "chalk";

console.log(chalk.magenta.bold("Welcome to Code With Saba - Quiz Project MCQs"));
console.log(chalk.yellow.bold("You must achieve a total of 5 Points to secure a Win"));
console.log(chalk.magenta.bold("-".repeat(55)));

let points = 0
// question 1 
let question1 = await inquirer.prompt([
    {
        name: "One",
        type: "list",
        message: chalk.blue.bold("Typescript code is compiled into:"),
        choices: ["Assembly code", "Javascript", "Typescript bytecode", "Machine Code"]
    }
])

if(question1.One == "Javascript"){
    console.log(chalk.green("You answered correctly"));
    points++
} else {
    console.log(chalk.red("Incorrect answer"));
}

// question 2
let question2 = await inquirer.prompt([
    {
        name: "Two",
        type: "list",
        message: chalk.blue.bold("Which of these are supported in Typescript:"),
        choices: ["string", "boolean", "number", "All of the above"]
    }
])

if(question2.Two == "All of the above"){
    console.log(chalk.green("You answered correctly"));
    points++
} else {
    console.log(chalk.red("Incorrect answer"));
}

// question 3
let question3 = await inquirer.prompt([
    {
        name: "Three",
        type: "list",
        message: chalk.blue.bold("Which operator is used for addition in Typescript:"),
        choices: ["-", "+", "*", "%"]
    }
])

if(question3.Three == "+"){
    console.log(chalk.green("You answered correctly"));
    points++
} else {
    console.log(chalk.red("Incorrect answer"));
}
// question 4

let question4 = await inquirer.prompt([
    {
        name: "Four",
        type: "list",
        message: chalk.blue.bold("What will be the result of the expression 7 > 4 in Typescript:"),
        choices: ["false", "true", "error", "undefined"]
    }
])

if(question4.Four == "true"){
    console.log(chalk.green("You answered correctly"));
    points++
} else {
    console.log(chalk.red("Incorrect answer"));
}

// question 5
let question5 = await inquirer.prompt([
    {
        name: "Five",
        type: "list",
        message: chalk.blue.bold("What is the result of the expression ++x; if x is 4"),
        choices: ["5", "3", "6", "4"]
    }
])

if(question5.Five == "5"){
    console.log(chalk.green("You answered correctly"));
    points++
} else {
    console.log(chalk.red("Incorrect answer"));
}

// question 6
let question6 = await inquirer.prompt([
    {
        name: "Six",
        type: "list",
        message: chalk.blue.bold("Which operator is used for multiplication in Typescript:"),
        choices: ["+", "-", "*", "%"]
    }
])

if(question6.Six == "*"){
    console.log(chalk.green("You answered correctly"));
    points++
} else {
    console.log(chalk.red("Incorrect answer"));
}

// question 7
let question7 = await inquirer.prompt([
    {
        name: "Seven",
        type: "list",
        message: chalk.blue.bold("What is the result of the expression --x; if x is 5"),
        choices: ["4", "5", "6", "7"]
    }
])

if(question7.Seven == "4"){
    console.log(chalk.green("You answered correctly"));
    points++
} else {
    console.log(chalk.red("Incorrect answer"));
}

// question 8
let question8 = await inquirer.prompt([
    {
        name: "Eight",
        type: "list",
        message: chalk.blue.bold("What is required to install Typescript:"),
        choices: ["npx", "npm", "nxp", "pnm"]
    }
])

if(question8.Eight == "npm"){
    console.log(chalk.green("You answered correctly"));
    points++
} else {
    console.log(chalk.red("Incorrect answer"));
}

// Output conditions
if(points >= 5){
    console.log(chalk.green("Congratulations!"));
    console.log(chalk.white(`Your Points: ${points}`));
} else {
    console.log(chalk.red("You Loss! Try next time"));
    console.log(chalk.white(`Your Points: ${points}`));
}