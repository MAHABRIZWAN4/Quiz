#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
console.log(chalk.blue.bold("\t\t***********************************"));
console.log(chalk.bgMagentaBright.underline.bold.italic("\t\t****WELCOME TO MY QUIZ GAME***"));
console.log(chalk.blue.bold("\t\t***********************************"));
console.log(chalk.yellow.bold.italic("\n ******You are required to gain 30 points to win******"));
let point = 0;
let question1 = await inquirer.prompt([{
        name: "Question_no_1",
        message: "Q1) What is typescript?",
        type: "list",
        choices: ["TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript.",
            "TypeScript is a programming language used exclusively for server-side development.",
            "TypeScript is a dynamic language that doesn't support type checking.",
            "TypeScript is a markup language used for styling web pages."],
    }]);
if (question1.Question_no_1 === "TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'TypeScript is a statically typed superset of JavaScript that compiles to plain JavaScript.'"));
}
let question2 = await inquirer.prompt([{
        name: "Question_no_2",
        message: "Q2) Which of the following filename is the extension of typescript?",
        type: "list",
        choices: [".tsc", ".ts", ".tcs", ".tx"],
    }]);
if (question2.Question_no_2 === ".ts") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '.ts'"));
}
let question3 = await inquirer.prompt([{
        name: "Question_no_3",
        message: "Q3) Why should you use typescript?",
        type: "list",
        choices: ["TypeScript checks a program for errors before execution, and does so based on the kinds of values, it's a static type checker.",
            "TypeScript is primarily used for server-side development.",
            "TypeScript only supports dynamic typing, making it less efficient than JavaScript.",
            "TypeScript can only be used with specific front-end frameworks, limiting its versatility."],
    }]);
if (question3.Question_no_3 === "TypeScript checks a program for errors before execution, and does so based on the kinds of values, it's a static type checker.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'TypeScript checks a program for errors before execution, and does so based on the kinds of values, it's a static type checker.'"));
}
let question4 = await inquirer.prompt([{
        name: "Question_no_4",
        message: "Q4) If we run the 'npm init' command, then which of the following file is created?",
        type: "list",
        choices: ["tsconfig.json", "node_modules", "package.json", "package-lock.json"],
    }]);
if (question4.Question_no_4 === "package.json") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'package.json'"));
}
let question5 = await inquirer.prompt([{
        name: "Question_no_5",
        message: "Q5) If we run the 'tsc --init' command, then which of the following file is created?",
        type: "list",
        choices: ["tsconfig.json", "node_modules", "packag.json", "package-lock.json"],
    }]);
if (question5.Question_no_5 === "tsconfig.json") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'tsconfig.json'"));
}
let question6 = await inquirer.prompt([{
        name: "Question_no_6",
        message: "Q6) What is the purpose of the file .gitignore?",
        type: "list",
        choices: ["The '.gitignore' file in TypeScript projects specifies files and directories that should be ignored by Git version control.",
            "The '.gitignore' file in TypeScript projects specifies the type of data to be ignored during runtime.",
            "The '.gitignore' files in TypeScript projects determine the behavior of TypeScript compiler optimizations.",
            "The '.gitignore' in TypeScript projects lists files that should be excluded from the TypeScript compilation process."],
    }]);
if (question6.Question_no_6 === "The '.gitignore' file in TypeScript projects specifies files and directories that should be ignored by Git version control.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'The '.gitignore' file in TypeScript projects specifies files and directories that should be ignored by Git version control.'"));
}
let question7 = await inquirer.prompt([{
        name: "Question_no_7",
        message: "Q7) What command is used to compile TypeScript code into JavaScript?",
        type: "list",
        choices: ["tcs", "node", "ts", "tsc"],
    }]);
if (question7.Question_no_7 === "tsc") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'tsc'"));
}
let question8 = await inquirer.prompt([{
        name: "Question_no_8",
        message: "Q8) What do you mean by variables?",
        type: "list",
        choices: ["Variable means anything that can vary.",
            "A variable is a constant value in a program that cannot be modified.",
            "A variable is a function used to perform mathematical calculations in a program.",
            "A variable is a data type used to define constants in a program."],
    }]);
if (question8.Question_no_8 === "Variable means anything that can vary.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'Variable means anything that can vary.'"));
}
let question9 = await inquirer.prompt([{
        name: "Question_no_9",
        message: "Q9) How many types of variable",
        type: "list",
        choices: [1, 2, 3, 4],
    }]);
if (question9.Question_no_9 === 3) {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '3'"));
}
let question10 = await inquirer.prompt([{
        name: "Question_no_10",
        message: "Q10) Why we use variable?",
        type: "list",
        choices: ["To store data", "To store only numbers", "To store only string", "None of these"],
    }]);
if (question10.Question_no_10 === "To store data") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'To store data'"));
}
let question11 = await inquirer.prompt([{
        name: "Question_no_11",
        message: "Q11) What is the main difference between var and let?",
        type: "list",
        choices: ["var is function scoped and let is block scoped.",
            "var is block scoped and let is function scoped",
            "var allows for dynamic typing, while let enforces static typing.",
            "No difference between var and let"],
    }]);
if (question11.Question_no_11 === "var is function scoped and let is block scoped.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'var is function scoped and let is block scoped.'"));
}
let question12 = await inquirer.prompt([{
        name: "Question_no_12",
        message: "Q12) Why we use string data type?",
        type: "list",
        choices: ["To store numeric value",
            "To store a value that is either true or false.",
            "To store text and numeric value",
            "To store text value."],
    }]);
if (question12.Question_no_12 === "To store text value.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'To store text value.'"));
}
let question13 = await inquirer.prompt([{
        name: "Question_no_13",
        message: "Q13) Why we use number data type?",
        type: "list",
        choices: ["To store numeric value",
            "To store a value that is either true or false.",
            "To store text and numeric value",
            "To store text value."],
    }]);
if (question13.Question_no_13 === "To store numeric value") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'To store numeric value'"));
}
let question14 = await inquirer.prompt([{
        name: "Question_no_14",
        message: "Q14) Why we use boolean?",
        type: "list",
        choices: ["To numeric text value",
            "To store a value that is either true or false.",
            "To store stext and numeric value",
            "To store text value."],
    }]);
if (question14.Question_no_14 === "To store a value that is either true or false.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'To store a value that is either true or false.'"));
}
let question15 = await inquirer.prompt([{
        name: "Question_no_15",
        message: "Q15) What is the mistake in this code : let my_name:number = 'Mahab Muhammad Rizwan';",
        type: "list",
        choices: ["The mistake is declaring my_name as a number type while assigning a string value ('Mahab Muhammad Rizwan').",
            "Will ' , ' come in the end",
            "Use 'var' instead of 'let'.",
            "No one mistake in this code."],
    }]);
if (question15.Question_no_15 === "The mistake is declaring my_name as a number type while assigning a string value ('Mahab Muhammad Rizwan').") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'The mistake is declaring my_name as a number type while assigning a string value ('Mahab Muhammad Rizwan').'"));
}
let question16 = await inquirer.prompt([{
        name: "Question_no_16",
        message: "Q16) What is the mistake in this code : const my_name:string = 'Mahab Muhammad Rizwan';",
        type: "list",
        choices: ["The mistake is declaring my_name as a number type while assigning a string value ('Mahab Rizwan').",
            "Will ' , ' come in the end",
            "Use 'let' instead of 'const'.",
            "No one mistake in this code."]
    }]);
if (question16.Question_no_16 === "No one mistake in this code.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'No one mistake in this code.'"));
}
let question17 = await inquirer.prompt([{
        name: "Question_no_17",
        message: "Q17) What is Template literal method?",
        type: "list",
        choices: ["Template literals in TypeScript are a way to define string literals using square brackets instead of backticks (`).",
            "it's a way to deal with strings and specially dynamic strings",
            " Template literals in TypeScript are a feature that allows for creating strings without using any quotation marks.",
            "emplate literals in TypeScript involve defining strings with expressions using single quotes instead of backticks (`)."],
    }]);
if (question17.Question_no_17 === "it's a way to deal with strings and specially dynamic strings") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'it's a way to deal with strings and specially dynamic strings'"));
}
let question18 = await inquirer.prompt([{
        name: "Question_no_18",
        message: "Q18) What is the symbol of backticks?",
        type: "list",
        choices: ["''", "´´", "``", "::"],
    }]);
if (question18.Question_no_18 === "``") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is ``"));
}
let question19 = await inquirer.prompt([{
        name: "Question_no_19",
        message: "Q19) What is the difference between operation and operator?",
        type: "list",
        choices: ["Operations are the actions performed on operands, while operators are the symbols or functions representing those actions.",
            "Operations are the values or variables manipulated by operators, while operators are the overarching procedures.",
            "Operators are the individual steps in a process, whereas operations are the symbols representing these steps.",
            "None of these"],
    }]);
if (question19.Question_no_19 === "Operations are the actions performed on operands, while operators are the symbols or functions representing those actions.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'Operations are the actions performed on operands, while operators are the symbols or functions representing those actions.'"));
}
let question20 = await inquirer.prompt([{
        name: "Question_no_20",
        message: "Q20) In programming, which operator is used to increament the value of a variable by 1",
        type: "list",
        choices: ["**", "--", "++", "$$"],
    }]);
if (question20.Question_no_20 === "++") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '++'"));
}
let question21 = await inquirer.prompt([{
        name: "Question_no_21",
        message: "Q21) Which operator is used for exponentiation in most programming languages?",
        type: "list",
        choices: ["**", "--", "//", "&&"],
    }]);
if (question21.Question_no_21 === "**") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '**'"));
}
let question22 = await inquirer.prompt([{
        name: "Question_no_22",
        message: "Q22) Which operator is used for division in most programming languages?",
        type: "list",
        choices: ["**", "--", "/", "&&"],
    }]);
if (question22.Question_no_22 === "/") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '/'"));
}
let question23 = await inquirer.prompt([{
        name: "Question_no_23",
        message: "Q23) Which operator is used for multiplication in most programming languages?",
        type: "list",
        choices: ["**", "&&", "||", "*"],
    }]);
if (question23.Question_no_23 === "*") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '*'"));
}
let question24 = await inquirer.prompt([{
        name: "Question_no_24",
        message: "Q24) Which operator is used for subtraction in most programming languages?",
        type: "list",
        choices: ["+", "-", "++", "--"],
    }]);
if (question24.Question_no_24 === "-") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '-'"));
}
let question25 = await inquirer.prompt([{
        name: "Question_no_25",
        message: "Q25) In programming, which operator is used to decreament the value of a variable by 1",
        type: "list",
        choices: ["**", "--", "++", "$$"],
    }]);
if (question25.Question_no_25 === "--") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '--'"));
}
let question26 = await inquirer.prompt([{
        name: "Question_no_26",
        message: "Q26) What is the modulus operation?",
        type: "list",
        choices: ["The quotient obtained when dividing one number by another.",
            "The product of two numbers.",
            "The sum of two number",
            "The remainder obtained when dividing one number by another."],
    }]);
if (question26.Question_no_26 === "The remainder obtained when dividing one number by another.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'The remainder obtained when dividing one number by another.'"));
}
let question27 = await inquirer.prompt([{
        name: "Question_no_27",
        message: "Q27) What is the purpose of the '=='' operator in programming?",
        type: "list",
        choices: ["Comparision", "Assigning", "Modulus", "Division"],
    }]);
if (question27.Question_no_27 === "Comparision") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'Comparision'"));
}
let question28 = await inquirer.prompt([{
        name: "Question_no_28",
        message: "Q28) '&&' this operator is called?",
        type: "list",
        choices: ["OR operator", "AND operator", "Comprision operator", "Greater than equal to"],
    }]);
if (question28.Question_no_28 === "AND operator") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'AND operator'"));
}
let question29 = await inquirer.prompt([{
        name: "Question_no_29",
        message: "Q29) '||' this operator is called?",
        type: "list",
        choices: ["OR operator", "And operator", "Comprision operator", "Greater than equal to"],
    }]);
if (question29.Question_no_29 === "OR operator") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'OR operator'"));
}
let question30 = await inquirer.prompt([{
        name: "Question_no_30",
        message: "Q30) The sign of less than is?",
        type: "choices",
        Choices: ["<", ">", "<=", ">="],
    }]);
if (question30.Question_no_30 === "<") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '<'"));
}
let question31 = await inquirer.prompt([{
        name: "Question_no_31",
        message: "Q31) The sign of greater than is?",
        type: "choices",
        Choices: ["<", ">", "<=", ">="],
    }]);
if (question31.Question_no_31 === ">") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '>'"));
}
let question32 = await inquirer.prompt([{
        name: "Question_no_32",
        message: "Q32) let sum1:number = 22; let sum2:number = -22; console.log(sum1 + sum2);the answer is that?",
        type: "list",
        choices: ["222", "44", "2222", "0"],
    }]);
if (question32.Question_no_32 === "0") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '0'"));
}
let question33 = await inquirer.prompt([{
        name: "Question_no_33",
        message: "Q33) let sub1:number = 44; let sub2:number = -48; console.log(sub1 - sub2);the answer is that?",
        type: "list",
        choices: ["-4448", "92", "-92", "0"],
    }]);
if (question33.Question_no_33 === "92") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '92'"));
}
let question34 = await inquirer.prompt([{
        name: "Question_no_34",
        message: "Q34) let modulus:number = 5; console.log(modulus % 3); The answer is that",
        type: "list",
        choices: ["2", "3", "4", "5"],
    }]);
if (question34.Question_no_34 === "2") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '2'"));
}
let question35 = await inquirer.prompt([{
        name: "Question_no_35",
        message: "Q35) let divide:number = 22, console.log(divide/2);  What's the error in this code?",
        type: "list",
        choices: ["The variable name is not correct",
            "After the occurrence of 22, add a semicolon ' ; '",
            "The 'let' will be replaced with 'var'.",
            "No one error is occur"],
    }]);
if (question35.Question_no_35 === "After the occurrence of 22, add a semicolon ' ; '") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct is 'After the occurrence of 22, add a semicolon ' ; ''"));
}
let question36 = await inquirer.prompt([{
        name: "Question_no_36",
        message: "Q36) These are used to combine multiple conditions in one.",
        type: "list",
        choices: ["Logical operator", "Comparision operator", "Assignment operator are used to assigning values to variables.",
            "Arithmetic operators"],
    }]);
if (question36.Question_no_36 === "Logical operator") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'Logical operator'"));
}
let question37 = await inquirer.prompt([{
        name: "Question_no_37",
        message: "Q37) What is the purpose to use if statement?",
        type: "list",
        choices: ["Use if to specify a block of code to be executed, if the same condition is false",
            "Use if to specify a new condition to test, if the first condition is false.",
            "Use if to specify a block of code to be executed, if a specified condition is true.",
            "All of Above",],
    }]);
if (question37.Question_no_37 === "Use if to specify a block of code to be executed, if a specified condition is true.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'Use if to specify a block of code to be executed, if a specified condition is true.'"));
}
let question38 = await inquirer.prompt([{
        name: "Question_no_38",
        message: "Q38) What is the purpose to use else statement?",
        type: "list",
        choices: ["Use else to specify a block of code to be executed, if the same condition is false",
            "Use else to specify a new condition to test, if the first condition is false.",
            "Use else to specify a block of code to be executed, if a specified condition is true.",
            "All of Above",],
    }]);
if (question38.Question_no_38 === "Use else to specify a block of code to be executed, if the same condition is false") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'Use else to specify a block of code to be executed, if the same condition is false'"));
}
let question39 = await inquirer.prompt([{
        name: "Question_no_39",
        message: "Q39) What is the purpose to use else if statement?",
        type: "list",
        choices: ["Use else if to specify a block of code to be executed, if the same condition is false",
            "Use else if to specify a new condition to test, if the first condition is false.",
            "Use else if to specify a block of code to be executed, if a specified condition is true.",
            "All of Above",],
    }]);
if (question39.Question_no_39 === "Use else if to specify a new condition to test, if the first condition is false.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'Use else if to specify a new condition to test, if the first condition is false.'"));
}
let question40 = await inquirer.prompt([{
        name: "Question_no_40",
        message: "Q40) What is the purpose of 'Array'",
        type: "list",
        choices: ["An array is a data structure that stores a collection of elements, typically of the same type",
            "We use only one type of data",
            "We use numeric type of data",
            "All of these of these"],
    }]);
if (question40.Question_no_40 === "An array is a data structure that stores a collection of elements, typically of the same type") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'An array is a data structure that stores a collection of elements, typically of the same type'"));
}
let question41 = await inquirer.prompt([{
        name: "Question_no_41",
        message: "Q41) Array indexes start with?",
        type: "list",
        choices: ["0", "1", "2", "3"],
    }]);
if (question41.Question_no_41 === "0") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '0'"));
}
let question42 = await inquirer.prompt([{
        name: "Question_no_42",
        message: "This method removes the last element from an array",
        type: "list",
        choices: ["push()", "pop()", "shift()", "unshift()"],
    }]);
if (question42.Question_no_42 === "pop()") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'pop()'"));
}
let question43 = await inquirer.prompt([{
        name: "Question_no_43",
        message: "Q43) This method adds a new element to an array (at the end).",
        type: "list",
        choices: ["push()", "pop()", "shift()", "unshift()"],
    }]);
if (question43.Question_no_43 === "push()") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'push()'"));
}
let question44 = await inquirer.prompt([{
        name: "Question_no_44",
        message: "Q44) This method removes the first array element ",
        type: "list",
        choices: ["push()", "pop()", "shift()", "unshift()"],
    }]);
if (question44.Question_no_44 === "shift()") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'shift()'"));
}
let question45 = await inquirer.prompt([{
        name: "Question_no_45",
        message: "Q45) This method adds a new element to an array(at the beginning)",
        type: "list",
        choices: ["push()", "pop()", "shift()", "unshift()"],
    }]);
if (question45.Question_no_45 === "unshift()") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'unshift()'"));
}
let question46 = await inquirer.
    prompt([{
        name: "Question_no_46",
        message: "Q46) There is a mistake in this line, correct it=> let name[]:string ='Mahab Rizwan';",
        type: "list",
        choices: ["let name:string[] = ['Mahab Rizwan'];",
            "let name[]:string[] ='Mahab Rizwan';",
            "let name[]:string =['Mahab Rizwan'];",
            "let name.string[] =['Mahab Rizwan'];"],
    }]);
if (question46.Question_no_46 === "let name:string[] = ['Mahab Rizwan'];") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'let name:string[] = ['Mahab Rizwan'];'"));
}
let question47 = await inquirer.prompt([{
        name: "Question_no_47",
        message: "Q47) What's the output of this code => let name:string[] = ['Misbah']; name.push('Amna'); console.log(name);",
        type: "list",
        choices: ["[[Misbah],[Amna]];",
            "[ 'misbah', 'Amna' ]",
            "[ 'Misbah', 'Amna' ]",
            "'Misbah','Amna'"],
    }]);
if (question47.Question_no_47 === "[ 'Misbah', 'Amna' ]") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct is '[ 'Misbah', 'Amna' ]'"));
}
let question48 = await inquirer.prompt([{
        name: "Question_no_48",
        message: "Q48) What's the output of this code => let name:string[] = ['Misbah','Dua']; name.pop(); console.log(name);",
        type: "list",
        choices: ["[[Misbah],[Dua]];",
            "[ 'misbah', 'Dua' ]",
            "[ 'Misbah',  'Dua' ]",
            "[ 'Misbah' ]"],
    }]);
if (question48.Question_no_48 === "[ 'Misbah' ]") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '[ 'Misbah' ]'"));
}
let question49 = await inquirer.prompt([{
        name: "Question_no_49",
        message: "Q49) What's the output of this code => let number:number[] = [1,2,3,4,5,6]; number.shift(); console.log(number);",
        type: "list",
        choices: ["[ 1, 2, 3, 4, 5 ]", "[ 2, 3, 4, 5, 6 ]", "[ 1, 3, 4, 5, 6 ]", "[ 1, 3, 4, 5, 6 ]"],
    }]);
if (question49.Question_no_49 === "[ 2, 3, 4, 5, 6 ]") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '[ 2, 3, 4, 5, 6 ]'"));
}
let question50 = await inquirer.prompt([{
        name: "Question_no_50",
        message: "Q50) What's the output of this code => let even_number:number[] = [2,4,6,8,10,12]; even_number.unshift(14,16,20); console.log(even_number);",
        type: "list",
        choices: ["[ 2, 4, 6, 8, 10]", "[ 2, 4, 6, 8, 10, 12 ]", "[ 2, 4, 6, 8, 10, 12, 14, 16]", "[ 14, 16, 20, 2, 4, 6, 8, 10, 12 ]"],
    }]);
if (question50.Question_no_50 === "[ 14, 16, 20, 2, 4, 6, 8, 10, 12 ]") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.T he correct answer is '[ 14, 16, 20, 2, 4, 6, 8, 10, 12 ]'"));
}
let question51 = await inquirer.prompt([{
        name: "Question_no_51",
        message: "Q51) What do you know function?",
        type: "list",
        choices: ["Functions are the primary means of passing data around in TypeScript. TypeScript allows you to specify the types of both the input and output values of functions.",
            "We use function to store data.",
            "In function we store multiple types of data.",
            "We use function, if you want to run the same code over and over again,each time with a different value."],
    }]);
if (question51.Question_no_51 === "Functions are the primary means of passing data around in TypeScript. TypeScript allows you to specify the types of both the input and output values of functions.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'Functions are the primary means of passing data around in TypeScript. TypeScript allows you to specify the types of both the input and output values of functions.'"));
}
let question52 = await inquirer.prompt([{
        name: "Question_no_52",
        message: "Q52) Is this the correct syntax of function? => function name(params:type) {}",
        type: "list",
        choices: ["Yes", "No", "I Dont know", "May be Yes or may be No"],
    }]);
if (question52.Question_no_52 === "Yes") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct is 'Yes'"));
}
let question53 = await inquirer.prompt([{
        name: "Question_no_53",
        message: "Q53) What's the error in this code? => function introduction(name:string, course:string, age:number) {console.log(`my name is ${name} and I am enroll in ${course} and I am ${age} years old`) };  introduction('Mahab Muhammad Rizwan','Governor sindh IT initiative');",
        type: "list",
        choices: ["function syntax is not correct",
            "Expected 3 arguments, but got 2.",
            "Expected 2 arguments, but got 3.",
            "No one error is ocuur"],
    }]);
if (question53.Question_no_53 === "Expected 3 arguments, but got 2.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct is 'Expected 3 arguments, but got 2.'"));
}
let question54 = await inquirer.prompt([{
        name: "Question_no_54",
        message: "Q54) What is the purpose of loop in typescript?",
        type: "list",
        choices: ["If you want to run the same code over and over again,each time with a different value.",
            "These are the primary means of passing data around in TypeScript. TypeScript allows you to specify the types of both the input and output values of functions.",
            "To store mutliple data.",
            "All of these"],
    }]);
if (question54.Question_no_54 === "If you want to run the same code over and over again,each time with a different value.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct is 'If you want to run the same code over and over again,each time with a different value.'"));
}
let question55 = await inquirer.prompt([{
        name: "Question_no_55",
        message: "Q55) Which character sequence represents the 'shabang' in TypeScript?",
        type: "list",
        choices: ["!#", "//#", "<#", "#!"],
    }]);
if (question55.Question_no_55 === "#!") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is '#!'"));
}
let question56 = await inquirer.prompt([{
        name: "Question_no_56",
        message: "Q56) What do you know about inquirer in typescript?",
        type: "list",
        choices: ["Inquirer in TypeScript is a library for creating interactive command-line interfaces with prompts for user input.",
            "Inquirer in TypeScript is primarily used for generating HTML interfaces.",
            "Inquirer simplifies database querying in TypeScript applications.",
            "Inquirer is exclusively for handling asynchronous file operations in TypeScript."],
    }]);
if (question56.Question_no_56 === "Inquirer in TypeScript is a library for creating interactive command-line interfaces with prompts for user input.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'Inquirer in TypeScript is a library for creating interactive command-line interfaces with prompts for user input.'"));
}
let question57 = await inquirer.prompt([{
        name: "Question_no_57",
        message: "Q57) To install the inquirer we use the command?",
        type: "list",
        choices: ["npm i --inquirer", "npm i", "npm inquirer", "npm i inquirer"],
    }]);
if (question57.Question_no_57 === "npm i inquirer") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'npm i inquirer'"));
}
let question58 = await inquirer.prompt([{
        name: "Question_no_58",
        message: "Q58) Why we use chalk in typescript",
        type: "list",
        choices: ["To make the command prompt more attractive",
            "To make the vscode more attractive",
            "Chalk simplifies database querying in TypeScript applications.",
            "Chalk in TypeScript is primarily used for generating HTML interfaces."],
    }]);
if (question58.Question_no_58 === "To make the command prompt more attractive") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'To make the command prompt more attractive'"));
}
let question59 = await inquirer.prompt([{
        name: "Question_no_59",
        message: "Q59) In TypeScript, which keyword is used to declare a variable?",
        type: "list",
        choices: [" To define a new class",
            "To declare a type",
            "To import modules",
            "To create loops"]
    }]);
if (question59.Question_no_59 === "To declare a type") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'To declare a type'"));
}
let question60 = await inquirer.prompt([{
        name: "Question_no_60",
        message: "Q60) What is the purpose of the 'tsconfig.json' file?",
        type: "list",
        choices: ["The tsconfig.json file configures settings and options for the TypeScript compiler (`tsc`) in a project.",
            "The tsconfig.json file defines metadata and dependencies for a Node.js project.",
            "The tsconfig.json file specifies files and directories that Git should ignore, helping to keep repositories clean and manageable.",
            "The tsconfig.json file locks dependencies versions to ensure consistent installs across different environments."],
    }]);
if (question60.Question_no_60 === "The tsconfig.json file configures settings and options for the TypeScript compiler (`tsc`) in a project.") {
    console.log(chalk.blue.underline.bold.italic("Welldone! Answer is correct"));
    point++;
}
else {
    console.log(chalk.green.underline.bold.italic("Oops!Answer is not correct.The correct answer is 'The tsconfig.json file configures settings and options for the TypeScript compiler (`tsc`) in a project.'"));
}
// Output Condition
if (point >= 30) {
    console.log(chalk.bold.italic.bgMagenta.bold.italic("\n\t\t*********Congratulations*********"));
    console.log(chalk.bgYellow.bold.italic(`\n\t\t*******Your points is ${point}*******`));
}
else {
    console.log(chalk.bgRed.bold.italic("\n\t\tYou lost! Don't Worry try next time."));
    console.log(chalk.bgYellow.bold.italic(`\n\t\t*******Your points: ${point} out of 60*******`));
}
