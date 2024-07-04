# PHASE-1-WEEK-1-CODE-CHALLENGE

## CODE CHALLENGES.
1. Challenge 1: Student Grade Generator.
2. Challenge 2: Speed Detector.
3. Challenge 3: Net Salary Calculator .

 # Challenge 1: Student Grade Generator.

  ## LEARNING GOALS
  - The use of conditional statements (if, else if, else) to perform different actions based on different
    conditions.
  - Understanding how callback function works.

  ### INSTRUCTIONS
  - Create a repository on your GitHub account. 
  - Set up your local repository
  - Navigate to Your Project Directory.
  - Initialize git
  - Create your index.js file. Under this index.js file is where we are going to write our code.
  - Once you're done, be sure to commit and push your code up to GitHub.
  
  #### PART 1 BUILDING THE PROJECT.
  - The script uses Node.js's built-in `readline` module to handle user input from the command line. 
  `readline.createInterface()` creates an interface for reading data from the standard input `(stdin)`
   and writing to the standard output `(stdout)`. We use const `rl = readline.createInterface({ input: process.stdin, output: process.stdout });` initializes this interface.
  - Function `getStudentGrade()` defines a function that prompts the user to enter student marks, 
     validates the input, determines the grade, and outputs the grade.
  -  Prompting for Input: `rl.question('Enter student marks (0-100):, (marks) => { ... })` prompts the 
     user to enter marks. The callback function takes the user input (marks).
  - Input Validation: `marks = Number(marks);` converts the input string to a number. `if (isNaN
    (marks) || marks < 0 || marks > 100) { ... }` checks if the input is not a number or out of the valid 
    range (0-100). If it is invalid, the function logs an error message and recursively calls 
    `getStudentGrade()` to prompt the user again.
  - Determining the Grade: The function uses a series of conditional statements (if-else if-else) to 
    determine the grade based on the input marks:
      `A` for marks > `79`
      `B` for marks >= `60` and <= `79`
      `C` for marks >= `50` and <= `59`
      `D` for marks >= `40` and <= `49`
      `E` for marks < `40`
  - Output the Grade: `console.log(`The grade for marks ${marks} is: ${grade}`);` outputs the grade to 
    the console. `rl.close();` closes the `readline` interface.
  - Starting the Process: `getStudentGrade();` initiates the process by calling the `getStudentGrade()` 
    function.

 # Iteration and Looping in the Student Grade Generator
  - In the context of the Student Grade Generator project, iteration and looping are important 
    concepts, particularly for handling user input validation and prompting the user again if the input  
    is invalid.For this project, we use a `recursive function call` to handle the iteration for user 
    input validation. In the provided code, we use a recursive function call instead of an explicit loop 
    to handle user input validation. The recursion ensures that the user is repeatedly prompted to enter
    valid input until the input is within the range of 0-100.


    ## callback function
    In the getStudentGrade function, `rl.question` is used to prompt the user for input. The second
    argument to `rl.question` is a callback function that gets executed once the user provides input.The
    callback function is executed after the user enters their input and presses Enter. The user's input 
    is passed as the marks parameter to the callback. 


 # Challenge 2: Speed Detector
   ## OVERVIEW
   The Speed Detector is a simple program that checks the speed of a vehicle and determines if it is 
   within the allowed speed limit. If the speed exceeds the limit, the program calculates the number of 
   demerit points that the driver should receive. This project demonstrates basic input handling, 
   conditional logic, and output in JavaScript.

   ### LEARNING GOALS
   -Understand and implement basic input handling in JavaScript.
   -Use conditional statements to evaluate conditions.
   -Calculate and display results based on user input.

   #### INSTRUCTIONS
   - Create a repository on your GitHub account. 
   - Set up your local repository
   - Navigate to Your Project Directory.
   - Initialize git
   - Create your `index.js` file. Under this index.js file is where we are going to write our code.
   - Once you're done, be sure to commit and push your code up to GitHub.

   ##### BUILDING THE PROJECT.
   - Function Declaration `(function checkSpeed(speed) { ... })`: Defines a function named `checkSpeed` 
   that takes a single parameter speed, which represents the speed of a vehicle in kilometers per hour 
   (km/h).
   - Constants Initialization: `speedLimit`: Declares a constant variable set to 70, representing the 
   maximum allowed speed in km/h. `kmPerDemeritPoint`: Declares a constant variable set to 5, indicating 
   how many kilometers per hour over the speed limit correspond to one demerit point.
   - Conditional Logic: If Statement (`if (speed < speedLimit) { ... }`): Checks if the speed parameter
    passed to the function is less than `speedLimit`.If true (i.e., if the speed is within the limit), it 
   logs `Ok` to the console, indicating that the speed is acceptable.
   - Else Statement (`else { ... }`): Executes if the speed exceeds the `speedLimit`. Calculates the 
   number of demerit points using the formula: 
   `const demeritPoints = Math.floor((speed - speedLimit) / kmPerDemeritPoint)`;
    `Math.floor` ensures that only whole demerit points are counted, discarding any decimal points.
   - Nested Conditional (`if (demeritPoints > 12) { ... } else { ... }`):Checks if the calculated 
    `demeritPoints` exceed 12. if true, logs `License suspended` to the console, indicating that the 
    driver's license would be suspended due to excessive speeding.If false, logs `Points` followed by the 
    number of demerit points, indicating how many demerit points the driver has accumulated.
      # Example Usage:
      Here are a few examples of how you might use the checkSpeed function:
      `checkSpeed(60)`;  // Output: Ok (because 60 is less than 70)
      `checkSpeed(75)`;  // Output: Points: 1 (because 75 - 70 = 5, and 5 / 5 = 1)
      `checkSpeed(95)`;  // Output: License suspended (because 95 - 70 = 25, and 25 / 5 = 5)

 # CHALLENGE 3: Net Salary Calculator
 ## OVERVIEW
The Net Salary Calculator is a `Node.js` application designed to help users compute their net salary by 
taking into account their basic salary, benefits, and various deductions such as tax (PAYE), NHIF, and 
NSSF. The application prompts the user to input their basic salary and benefits, and then calculates the 
gross salary, applicable taxes, and deductions to provide the final net salary.

### LEARNING GOALS.
- Understand and implement basic arithmetic operations and calculations in JavaScript.
- Learn how to use conditional statements and loops to handle various tax brackets and deductions.
- Gain experience with Node.js, specifically the `readline` module for user input.
- Understand how to work with objects and arrays to store and retrieve tax and deduction rates.
- Improve debugging skills and ensure accurate calculations through testing.

#### INSTRUCTIONS.
   - Create a repository on your GitHub account. 
   - Set up your local repository
   - Navigate to Your Project Directory.
   - Initialize git
   - Create your `index.js` file. Under this index.js file is where we are going to write our code.
   - Once you're done, be sure to commit and push your code up to GitHub.


  ##### BUILDING THE PROJECT.
- `Import the readline Module`:The `readline` module is used to create an interface for reading input 
   from the standard input (keyboard) and writing output to the standard output (console).
- Create a `Readline Interface`: `const rl = readline.createInterface({input: process.stdin,    output:process stdout})`; The readline.createInterface method creates an interface for reading lines from 
 the input stream.
- Define the `calculateNetSalary Function`: function `calculateNetSalary()`.This function encapsulates
  the logic for calculating the net salary.
- Define Constants for Tax and Deduction Rates: const TAX_RATES = [
    {` min: 0, max: 24000, rate: 0.1` },
    { `min: 24001, max: 32333, rate: 0.25 `},
    {` min: 32334, max: 40667, rate: 0.3` },
    {` min: 40668, max: Infinity, rate: 0.35` }
];
- These constants define the progressive tax brackets and their respective rates.
- The constants that define the NHIF rates based on salary ranges from :
const `NHIF_RATES` = [
    {` min: 0, max: 5999, amount: 150` },
    // ... other rates ...
    { `min: 100000, max: Infinity, amount: 1700 `}
];
- The NSSF contribution rate is defined as a constant percentage (6% of the gross salary).
- The Prompt for Basic Salary is; `rl.question("Enter basic salary: ", (basicSalaryInput)` => 
    `const basicSalary = parseFloat(basicSalaryInput)`; The `rl.question` method prompts the user to 
    enter their basic salary. The input is then converted from a string to a floating-point number using 
    parseFloat.
- Prompt for Benefits; `rl.question("Enter benefits: ", (benefitsInput)=> {`
        `const benefits = parseFloat(benefitsInput);` The `rl.question` method prompts the user to enter their benefits. The input is also converted to a floating-point number.
- Calculate Gross Salary: The gross salary is calculated by adding the basic salary and benefits.
        `const grossSalary = basicSalary + benefits;`
- Calculate PAYE (Tax): The tax is calculated based on the progressive tax rates. The code iterates through the TAX_RATES array and calculates the tax for each applicable bracket.
        `let tax = 0;`
        `let remainingSalary = grossSalary;`
        `for (const rate of TAX_RATES) {`
            `if (remainingSalary > rate.max) {`
                `tax += (rate.max - rate.min) * rate.rate;`
            `} else {`
               ` tax += (remainingSalary - rate.min) * rate.rate;`
                `break;`
            `}`
           ` remainingSalary -= rate.max - rate.min;`
        `}`

Calculate NHIF Deductions: The NHIF deduction is calculated based on the gross salary and the NHIF rates. The code iterates through the NHIF_RATES array and determines the applicable NHIF deduction.
        `let nhifDeduction = 0;`
        `for (const rate of NHIF_RATES) {`
            `if (grossSalary > rate.min && grossSalary <= rate.max) {`
                `nhifDeduction = rate.amount;`
              `  break;`
           ` }`
        `}`

Calculate NSSF Deductions: The NSSF deduction is calculated as a percentage (6%) of the gross salary.
       `const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;`

Calculate Net Salary:The net salary is calculated by subtracting the tax, NHIF deduction, and NSSF deduction from the gross salary.
       `const netSalary = grossSalary - tax - nhifDeduction - nssfDeduction;`
- Output Results: The results are displayed to the user, formatted to two decimal places.

- Close the Readline Interface: `rl.close();});`
























































