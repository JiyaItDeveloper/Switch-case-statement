
//#! /usr/bin/env node
// TASK # 3


import inquirer from "inquirer"
import chalk from "chalk"

//SWITCH CASE STATEMENT

let marks:string =""
let percentage:number= 90
let num :number = 100
switch(marks){
    case"A+1":
    console.log(chalk.bgBlueBright.bold(`You have ${percentage*90/num} ,You got A+1 Grade `) )
    break
    case"A1":
    console.log(chalk.bgGreenBright.bold(`You have ${percentage*89/num} ,You got A1 Grade `))
    break
    case"B":
    console.log(chalk.bgBlueBright.bold(`You have ${percentage*85/num} ,You got B Grade `))
    break
    case"C":
    console.log(chalk.bgGreenBright.bold(`You have ${percentage*69/num} , You got C Grade `))
    break
    case"D":
    console.log(chalk.bgBlueBright.bold(`You have ${percentage*60/num} , You got D Grade `))
    break
    default:
        console.log(chalk.bgGreenBright.bold("You are Fail"))
    
}