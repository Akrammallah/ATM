#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";

let balance = 10000;
let pinNum = 1234;

let answer = await inquirer.prompt([
  {
    message: "Enter your pin number: ",
    type:"number",
    name:"pin",
  }
])

if(answer.pin === pinNum){
  console.log(chalk.blueBright("your pin is correct"))


let myChoice = await inquirer.prompt([
{
  message:"Enter your option",
  type:"list",
  name:"option",
  choices:["withdraw","check balance","cash","deposit"]
}])

if(myChoice.option === "withdraw"){
  let amount = await inquirer.prompt([
    {
      message: "Enter your amount: ",
      type:"number",
      name:"myAmount"
    }
  ])
  balance -= amount.myAmount
  console.log(chalk.redBright("your remaining balance is: "), + (balance)  )
}else if(myChoice.option === "check balance"){
  console.log(chalk.greenBright("your  balance is"), + balance  )
}else if(myChoice.option === "cash"){
  let choiceCash = await inquirer.prompt([{
    message: "choose your choice: ",
    type: "list",
    name: "price",
    choices : [1000,5000,10000]
  }])
  balance -= choiceCash.price
  if(choiceCash.price === 1000){
    console.log("your remaining balance is", + balance)
  }else if(choiceCash.price === 5000){
    console.log(`your renaining balance is ${balance}`)
  }else if(choiceCash.price === 10000){
    console.log(`your renaining balance is ${balance}`)
  }
} 
  if (myChoice.option === "deposit"){
    let choiceAmount = await inquirer.prompt([{
      message: " choose amount : ",
      type: "list",
      name: "price",
      choices: [1000,2000,5000,10000,]
    }])
    balance += choiceAmount.price
    if(choiceAmount.price === 1000){
      console.log("your new balance is ", + balance)
    }else if(choiceAmount.price === 2000){
      console.log("your new balance is ", + balance)
    }else if(choiceAmount.price === 5000){
      console.log("your new balance is ", + balance)
    }else if(choiceAmount.price === 10000){
      console.log("your new balance is ", + balance)
    }
  
  }
}
else{
  console.log(chalk.redBright("Enter valid pin number"))
}
